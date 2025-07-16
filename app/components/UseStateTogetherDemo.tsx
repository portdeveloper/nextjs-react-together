"use client";

import { useStateTogether } from "react-together";

export default function UseStateTogetherDemo() {
  // Shared counter state
  const [count, setCount] = useStateTogether("demo-counter", 0);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">useStateTogether Demo</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Real-time shared state across all connected users
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            💡 <strong>Try this:</strong> Open this page in multiple browser windows or share with others to see real-time synchronization!
          </p>
        </div>
      </div>

      {/* Shared Counter */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold mb-4">Shared Counter</h2>
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-blue-500">
            {count}
          </div>
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              -1
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              +1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 