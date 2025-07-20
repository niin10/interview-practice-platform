'use client';

import { useState } from 'react';

interface SystemDesignQuestion {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  constraints: string[];
}

interface SystemDesignInterfaceProps {
  question: SystemDesignQuestion;
  onSubmit: (solution: string) => void;
}

export default function SystemDesignInterface({
  question,
  onSubmit,
}: SystemDesignInterfaceProps) {
  const [solution, setSolution] = useState('');
  const [activeTab, setActiveTab] = useState<'question' | 'whiteboard'>('question');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('question')}
          className={`px-4 py-2 rounded ${
            activeTab === 'question'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100'
          }`}
        >
          Question
        </button>
        <button
          onClick={() => setActiveTab('whiteboard')}
          className={`px-4 py-2 rounded ${
            activeTab === 'whiteboard'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100'
          }`}
        >
          Whiteboard
        </button>
      </div>

      {activeTab === 'question' ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{question.title}</h2>
          <p className="text-gray-700">{question.description}</p>
          
          <div>
            <h3 className="font-semibold mb-2">Requirements:</h3>
            <ul className="list-disc list-inside space-y-1">
              {question.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Constraints:</h3>
            <ul className="list-disc list-inside space-y-1">
              {question.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <textarea
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            placeholder="Design your solution here..."
            className="w-full h-96 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={() => onSubmit(solution)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Solution
          </button>
        </div>
      )}
    </div>
  );
}
