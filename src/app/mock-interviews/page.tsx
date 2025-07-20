'use client';

import React, { useState } from 'react';
import VideoCall from '@/components/VideoCall';
import InterviewScheduler from '@/components/InterviewScheduler';
import CodeEditor from '@/components/CodeEditor';

const SAMPLE_SLOTS = [
  {
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    available: true,
  },
  {
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    available: true,
  },
  {
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    available: false,
  },
];

const MockInterviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'interview'>('schedule');
  const [roomId, setRoomId] = useState<string>('');

  const handleSlotSelect = (slot: { date: Date; available: boolean }) => {
    // Here you would typically create a room and get its ID from the backend
    const newRoomId = Math.random().toString(36).substring(7);
    setRoomId(newRoomId);
    setActiveTab('interview');
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {activeTab === 'schedule' ? (
        <div>
          <h1 className="text-3xl font-bold mb-6">Schedule Mock Interview</h1>
          <InterviewScheduler
            availableSlots={SAMPLE_SLOTS}
            onSlotSelect={handleSlotSelect}
          />
        </div>
      ) : (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Mock Interview Session</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <VideoCall roomId={roomId} />
            <CodeEditor
              language="javascript"
              initialCode="// Write your solution here"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MockInterviews;
