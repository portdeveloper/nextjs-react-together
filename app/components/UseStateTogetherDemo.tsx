"use client";

import { useStateTogether } from "react-together";
import { useState } from "react";

export default function UseStateTogetherDemo() {
  // Shared counter state
  const [count, setCount] = useStateTogether("demo-counter", 0);
  
  // Shared text state
  const [sharedText, setSharedText] = useStateTogether("demo-text", "");
  
  // Shared color state
  const [selectedColor, setSelectedColor] = useStateTogether("demo-color", "#3b82f6");
  
  // Shared list state
  const [todos, setTodos] = useStateTogether("demo-todos", [] as string[]);
  
  // Local state for new todo input
  const [newTodo, setNewTodo] = useState("");

  const colors = [
    "#3b82f6", // blue
    "#ef4444", // red
    "#10b981", // green
    "#f59e0b", // yellow
    "#8b5cf6", // purple
    "#06b6d4", // cyan
  ];

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

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

      {/* Demo Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Shared Counter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold mb-4">Shared Counter</h2>
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold" style={{ color: selectedColor }}>
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

        {/* Color Selector */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold mb-4">Shared Color Theme</h2>
          <div className="space-y-4">
            <div 
              className="w-full h-20 rounded-lg border-2 border-gray-300 dark:border-gray-600"
              style={{ backgroundColor: selectedColor }}
            ></div>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-full h-12 rounded-lg border-2 transition-all ${
                    selectedColor === color 
                      ? 'border-gray-800 dark:border-white scale-110' 
                      : 'border-gray-300 dark:border-gray-600 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Shared Text Input */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold mb-4">Shared Text</h2>
          <div className="space-y-4">
            <textarea
              value={sharedText}
              onChange={(e) => setSharedText(e.target.value)}
              placeholder="Type something here... it will appear for everyone!"
              className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Characters: {sharedText.length}
            </div>
          </div>
        </div>

        {/* Shared Todo List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold mb-4">Shared Todo List</h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                placeholder="Add a new todo..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                onClick={addTodo}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Add
              </button>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {todos.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                  No todos yet. Add one above!
                </p>
              ) : (
                todos.map((todo, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <span className="text-gray-900 dark:text-white">{todo}</span>
                    <button
                      onClick={() => removeTodo(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold mb-4">How it works</h2>
        <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`import { useStateTogether } from "react-together";

// Shared state that syncs across all users
const [count, setCount] = useStateTogether("demo-counter", 0);
const [text, setText] = useStateTogether("demo-text", "");
const [color, setColor] = useStateTogether("demo-color", "#3b82f6");

// Use it just like regular useState!
<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>`}</code>
        </pre>
      </div>
    </div>
  );
} 