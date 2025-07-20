'use client';

import SystemDesignInterface from '@/components/SystemDesignInterface';

const SAMPLE_QUESTION = {
  id: '1',
  title: 'Design a URL Shortening Service',
  description: `Design a URL shortening service like TinyURL. This service will provide short aliases redirecting to long URLs.`,
  requirements: [
    'Given a URL, our service should generate a shorter and unique alias of it',
    'When users access a short link, our service should redirect them to the original link',
    'Users should optionally be able to pick a custom short link for their URL',
    'Links will expire after a standard default timespan',
  ],
  constraints: [
    'The system should be highly available',
    'URL redirection should happen in real-time with minimal latency',
    'Shortened links should not be guessable',
  ],
};

export default function SystemDesign() {
  const handleSolutionSubmit = (solution: string) => {
    console.log('Solution submitted:', solution);
    // Here you would typically send the solution to your backend
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <SystemDesignInterface
        question={SAMPLE_QUESTION}
        onSubmit={handleSolutionSubmit}
      />
    </div>
  );
}
