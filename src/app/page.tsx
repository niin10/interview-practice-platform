'use client';

import React from 'react';
import Link from 'next/link';
import { CodeBracketIcon, CpuChipIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <div className="animate-pulse mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <CodeBracketIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-5xl md:text-6xl animate-fade-in">
            Interview Practice Platform
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 sm:text-xl md:text-2xl leading-relaxed">
            Master technical interviews with AI-powered practice sessions, real-time coding challenges, 
            and comprehensive system design scenarios.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              ✨ Start Practicing Now
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Coding Challenges Card */}
          <Link href="/coding-challenges" className="group">
            <div className="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <CodeBracketIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Coding Challenges
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Practice algorithmic problems with our intelligent code editor, 
                  instant feedback, and support for 10+ programming languages.
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                  Start Coding →
                </div>
              </div>
            </div>
          </Link>

          {/* System Design Card */}
          <Link href="/system-design" className="group">
            <div className="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <CpuChipIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  System Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Master scalable architecture design with interactive whiteboards, 
                  real-world scenarios, and expert-level guidance.
                </p>
                <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:text-purple-800">
                  Design Systems →
                </div>
              </div>
            </div>
          </Link>

          {/* Mock Interviews Card */}
          <Link href="/mock-interviews" className="group">
            <div className="relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <VideoCameraIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mock Interviews
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience realistic interview simulations with video calls, 
                  live coding sessions, and professional feedback.
                </p>
                <div className="mt-4 flex items-center text-green-600 font-medium group-hover:text-green-800">
                  Schedule Interview →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                1000+
              </div>
              <div className="text-gray-600 mt-1">Practice Problems</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                50+
              </div>
              <div className="text-gray-600 mt-1">System Design Cases</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                24/7
              </div>
              <div className="text-gray-600 mt-1">Available Practice</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                95%
              </div>
              <div className="text-gray-600 mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
