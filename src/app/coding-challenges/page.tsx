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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Coding Challenge
          </h1>
          <p className="text-gray-600 text-lg">Solve algorithmic problems and improve your coding skills</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Challenge Description */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{SAMPLE_CHALLENGE.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{SAMPLE_CHALLENGE.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded mr-2 flex items-center justify-center">
                    <span className="text-blue-600 text-xs">📝</span>
                  </span>
                  Examples
                </h3>
                {SAMPLE_CHALLENGE.examples.map((example, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl mb-4 border border-gray-200">
                    <div className="space-y-2">
                      <p className="font-mono text-sm">
                        <span className="font-semibold text-blue-600">Input:</span> 
                        <span className="ml-2 bg-blue-50 px-2 py-1 rounded">{example.input}</span>
                      </p>
                      <p className="font-mono text-sm">
                        <span className="font-semibold text-green-600">Output:</span> 
                        <span className="ml-2 bg-green-50 px-2 py-1 rounded">{example.output}</span>
                      </p>
                      {example.explanation && (
                        <p className="text-sm text-gray-600 mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                          <span className="font-semibold">💡 Explanation:</span> {example.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-5 h-5 bg-orange-100 rounded mr-2 flex items-center justify-center">
                    <span className="text-orange-600 text-xs">⚠️</span>
                  </span>
                  Constraints
                </h3>
                <ul className="space-y-2">
                  {SAMPLE_CHALLENGE.constraints.map((constraint, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 font-mono text-sm">{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timer */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 p-4">
                <h3 className="text-white font-semibold flex items-center">
                  <span className="mr-2">⏱️</span>
                  Challenge Timer
                </h3>
              </div>
              <div className="p-4">
                <Timer duration={30} onTimeUp={() => console.log('Time is up!')} />
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">💻</span>
                  </span>
                  Code Editor
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600">JavaScript</span>
                </div>
              </div>
              <CodeEditor
                initialCode={SAMPLE_CHALLENGE.starterCode}
                language="javascript"
                onCodeChange={handleCodeChange}
              />
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => console.log('Running tests...')}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">▶️</span>
                Run Tests
              </button>
              <button
                onClick={() => console.log('Submitting solution...')}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">📤</span>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
