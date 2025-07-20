'use client';

import React, { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';

interface VideoCallProps {
  roomId: string;
}

export default function VideoCall({ roomId }: VideoCallProps) {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [peer, setPeer] = useState<Peer.Instance | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  useEffect(() => {
    if (!roomId) {
      setError('Room ID is required');
      return;
    }

    let mounted = true;

    const setupMediaStream = async () => {
      try {
        const userMedia = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });

        if (!mounted) {
          userMedia.getTracks().forEach(track => track.stop());
          return;
        }

        setStream(userMedia);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = userMedia;
        }

        const isInitiator = window.location.search.includes(`room=${roomId}&init=true`);
        const newPeer = new Peer({
          initiator: isInitiator,
          trickle: false,
          stream: userMedia
        });

        setPeer(newPeer);

        newPeer.on('error', (err: Error) => {
          console.error('Peer error:', err);
          setError('Connection error occurred');
        });

        newPeer.on('connect', () => {
          setIsConnected(true);
          setError(null);
        });

        newPeer.on('close', () => {
          setIsConnected(false);
          setError('Connection closed');
        });

        newPeer.on('signal', async (data: any) => {
          try {
            const response = await fetch('/api/signal', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ signal: data, roomId, isInitiator })
            });
            
            if (!mounted) return;
            
            const signalingData = await response.json();
            if (signalingData.signal) {
              newPeer.signal(signalingData.signal);
            }
          } catch (err) {
            console.error('Signaling error:', err);
            setError('Failed to connect to signaling server');
          }
        });

        newPeer.on('stream', (remoteStream: MediaStream) => {
          if (!mounted) return;
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
            setIsConnected(true);
            setError(null);
          }
        });
      } catch (err) {
        if (err instanceof Error) {
          console.error('Error accessing media devices:', err);
          setError('Failed to access camera/microphone');
        }
      }
    };

    setupMediaStream();

    return () => {
      mounted = false;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (peer) {
        peer.destroy();
      }
    };
  }, [roomId, stream, peer]);

  const toggleMute = () => {
    if (stream) {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      stream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setIsVideoOff(!isVideoOff);
    }
  };

  return (
    <div className="space-y-4 p-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className={`w-full h-[300px] object-cover rounded-lg bg-gray-900 ${
              !stream ? 'opacity-50' : ''
            }`}
          />
          <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
            You {isMuted && '(Muted)'} {isVideoOff && '(Video Off)'}
          </span>
        </div>
        <div className="relative">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className={`w-full h-[300px] object-cover rounded-lg bg-gray-900 ${
              !isConnected ? 'opacity-50' : ''
            }`}
          />
          <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
            {isConnected ? 'Interviewer' : 'Waiting for interviewer...'}
          </span>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleMute}
          disabled={!stream}
          className={`px-4 py-2 rounded-full ${
            !stream ? 'bg-gray-400' :
            isMuted ? 'bg-red-500' : 'bg-blue-500'
          } text-white hover:opacity-90 transition-opacity disabled:opacity-50`}
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <button
          onClick={toggleVideo}
          disabled={!stream}
          className={`px-4 py-2 rounded-full ${
            !stream ? 'bg-gray-400' :
            isVideoOff ? 'bg-red-500' : 'bg-blue-500'
          } text-white hover:opacity-90 transition-opacity disabled:opacity-50`}
        >
          {isVideoOff ? 'Turn Video On' : 'Turn Video Off'}
        </button>
      </div>

      <div className="text-center text-gray-500 text-xs">
        Tech7400 Video Interface {isConnected && '• Connected'}
      </div>
    </div>
  );
}
