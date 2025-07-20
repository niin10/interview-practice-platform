'use client';

import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Interview Practice Platform
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Practice technical interviews with real-time coding, system design
            discussions, and behavioral questions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Coding Challenges Card */}
          <Link href="/coding-challenges" className="group">
            <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">
                Coding Challenges
              </h3>
              <p className="mt-2 text-gray-500">
                Practice coding problems with real-time feedback and multiple
                language support.
              </p>
            </div>
          </Link>

          {/* System Design Card */}
          <Link href="/system-design" className="group">
            <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">
                System Design
              </h3>
              <p className="mt-2 text-gray-500">
                Learn how to design scalable systems and discuss architectural
                decisions.
              </p>
            </div>
          </Link>

          {/* Mock Interviews Card */}
          <Link href="/mock-interviews" className="group">
            <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">
                Mock Interviews
              </h3>
              <p className="mt-2 text-gray-500">
                Schedule and participate in mock interviews with experienced
                interviewers.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
