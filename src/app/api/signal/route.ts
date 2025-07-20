import { NextResponse } from 'next/server';

const rooms = new Map<string, { initiatorSignal?: any; responderSignal?: any }>();

export async function POST(req: Request) {
  try {
    const { signal, roomId, isInitiator } = await req.json();

    if (!roomId) {
      return NextResponse.json({ error: 'Room ID is required' }, { status: 400 });
    }

    if (!rooms.has(roomId)) {
      rooms.set(roomId, {});
    }

    const room = rooms.get(roomId)!;

    if (isInitiator) {
      room.initiatorSignal = signal;
      return NextResponse.json({ signal: room.responderSignal });
    } else {
      room.responderSignal = signal;
      return NextResponse.json({ signal: room.initiatorSignal });
    }
  } catch (error) {
    console.error('Signal error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
