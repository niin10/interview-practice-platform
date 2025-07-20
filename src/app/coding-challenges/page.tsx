'use client';

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import Timer from '@/components/Timer';

const SAMPLE_CHALLENGE = {
  title: 'Two Sum',
  description: `Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
  ],
  constraints: [
    '2 <= nums.length <= 104',
    '-109 <= nums[i] <= 109',
    '-109 <= target <= 109',
    'Only one valid answer exists.',
  ],
  starterCode: `function twoSum(nums, target) {
    // Your code here
};`,
};

export default function CodingChallenges() {
  const [code, setCode] = useState(SAMPLE_CHALLENGE.starterCode);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Challenge Description */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{SAMPLE_CHALLENGE.title}</h1>
          <p className="text-gray-600">{SAMPLE_CHALLENGE.description}</p>

          <div>
            <h3 className="font-semibold mb-2">Examples:</h3>
            {SAMPLE_CHALLENGE.examples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>Input:</strong> {example.input}
                </p>
                <p>
                  <strong>Output:</strong> {example.output}
                </p>
                {example.explanation && (
                  <p>
                    <strong>Explanation:</strong> {example.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Constraints:</h3>
            <ul className="list-disc list-inside">
              {SAMPLE_CHALLENGE.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>

          <Timer duration={30} onTimeUp={() => console.log('Time is up!')} />
        </div>

        {/* Code Editor */}
        <div>
          <CodeEditor
            initialCode={SAMPLE_CHALLENGE.starterCode}
            language="javascript"
            onCodeChange={handleCodeChange}
          />
          <div className="mt-4">
            <button
              onClick={() => console.log('Running tests...')}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Run Tests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
