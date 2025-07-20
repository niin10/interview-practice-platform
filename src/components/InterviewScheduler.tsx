'use client';

import { useState } from 'react';
import { format } from 'date-fns';

interface InterviewSlot {
  date: Date;
  available: boolean;
}

interface InterviewSchedulerProps {
  availableSlots: InterviewSlot[];
  onSlotSelect: (slot: InterviewSlot) => void;
}

interface SchedulerProps {
  availableSlots: InterviewSlot[];
  onSlotSelect: (slot: InterviewSlot) => void;
}

export default function InterviewScheduler({
  availableSlots,
  onSlotSelect,
}: SchedulerProps) {
  const [selectedSlot, setSelectedSlot] = useState<InterviewSlot | null>(null);

  const handleSlotSelect = (slot: InterviewSlot) => {
    if (slot.available) {
      setSelectedSlot(slot);
      onSlotSelect(slot);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Schedule Interview</h2>
      <div className="grid grid-cols-3 gap-4">
        {availableSlots.map((slot, index) => (
          <button
            key={index}
            onClick={() => handleSlotSelect(slot)}
            disabled={!slot.available}
            className={`p-4 rounded-lg text-center transition-colors ${
              selectedSlot === slot
                ? 'bg-blue-500 text-white'
                : slot.available
                ? 'bg-white hover:bg-gray-50 border border-gray-200'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <div className="font-medium">
              {format(slot.date, 'EEEE, MMMM d')}
            </div>
            <div className="text-sm">
              {format(slot.date, 'h:mm a')}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
