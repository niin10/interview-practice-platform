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
    <div className="max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('question')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'question'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              <span className="mr-2">📋</span>
              Problem Statement
            </button>
            <button
              onClick={() => setActiveTab('whiteboard')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === 'whiteboard'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              <span className="mr-2">🎨</span>
              Design Whiteboard
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'question' ? (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Question Header */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white text-xl">🏗️</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{question.title}</h2>
              <p className="text-purple-600 font-medium">System Design Challenge</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <p className="text-gray-700 text-lg leading-relaxed">{question.description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 text-sm">✅</span>
                </span>
                Functional Requirements
              </h3>
              <div className="space-y-3">
                {question.requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Constraints */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-orange-600 text-sm">⚡</span>
                </span>
                Non-Functional Requirements
              </h3>
              <div className="space-y-3">
                {question.constraints.map((constraint, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{constraint}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setActiveTab('whiteboard')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-xl hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🚀</span>
              Start Designing
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Whiteboard Header */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎨</span>
                <div>
                  <h3 className="text-white text-xl font-bold">Design Whiteboard</h3>
                  <p className="text-purple-100 text-sm">Architect your solution step by step</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Whiteboard Content */}
          <div className="p-6">
            <div className="mb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-600">Tools:</span>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="w-6 h-6 bg-green-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="w-6 h-6 bg-red-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                    <div className="w-6 h-6 bg-yellow-500 rounded cursor-pointer hover:scale-110 transition-transform"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <textarea
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="🏗️ Design your system architecture here...

💡 Consider including:
• High-level system components
• Database design and data flow
• API endpoints and services
• Scalability considerations
• Load balancing strategies
• Caching mechanisms
• Security measures

Start with a brief overview, then dive into each component..."
              className="w-full h-[500px] p-6 border-2 border-dashed border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 font-mono text-sm leading-relaxed bg-gray-50 hover:bg-white"
            />
            
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>💾 Auto-saved</span>
                <span>📝 {solution.length} characters</span>
              </div>
              <button
                onClick={() => onSubmit(solution)}
                disabled={!solution.trim()}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="mr-2">🚀</span>
                Submit Design
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
