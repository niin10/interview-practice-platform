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
        <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/" className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-white text-sm font-bold">IP</span>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Interview Platform
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <a
                  href="/coding-challenges"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 relative group"
                >
                  Coding
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a
                  href="/system-design"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 relative group"
                >
                  System Design
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a
                  href="/mock-interviews"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 relative group"
                >
                  Mock Interviews
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-300"></div>
                </a>
                <div className="ml-4 pl-4 border-l border-gray-200">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 mt-auto">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">IP</span>
                </div>
                <span className="font-medium text-gray-700">Interview Practice Platform</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <a href="#" className="hover:text-blue-600 transition-colors duration-200">Privacy</a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-200">Terms</a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-200">Support</a>
                <a href="#" className="hover:text-blue-600 transition-colors duration-200">About</a>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-medium">
                  ✨ Designed & Developed by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">Tech7400</span>
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  © {new Date().getFullYear()} All rights reserved • Made with ❤️ for developers
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
