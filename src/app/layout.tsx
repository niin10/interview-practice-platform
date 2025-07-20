import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Interview Practice Platform',
  description: 'Practice technical interviews with real-time coding and system design discussions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/" className="text-xl font-bold text-blue-600">
                    Interview Platform
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="/mock-interviews"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Mock Interviews
                </a>
                <a
                  href="/coding-challenges"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Coding
                </a>
                <a
                  href="/system-design"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  System Design
                </a>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-center text-gray-500 text-sm font-medium">
                Designed by Tech7400
              </p>
              <p className="text-center text-gray-400 text-xs">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
