"use client";

import { useCursors } from "react-together";

export default function CursorSharing() {
  const { myCursor, allCursors } = useCursors({
    omitMyValue: true, // Don't include our own cursor in allCursors
    deleteOnLeave: true, // Remove cursor when mouse leaves window
    throttleDelay: 16, // ~60fps updates for smooth movement
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Render other users' cursors */}
      {Object.entries(allCursors).map(([userId, cursor]) => {
        // Skip if cursor is null
        if (!cursor) return null;
        
        return (
          <div
            key={userId}
            className="absolute transition-all duration-75 ease-out pointer-events-none"
            style={{
              left: `${cursor.pageX}px`,
              top: `${cursor.pageY}px`,
              transform: "translate(-2px, -2px)",
            }}
          >
            {/* Cursor SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-md"
            >
              <path
                d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                fill="#3B82F6"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
            
            {/* User ID label */}
            <div
              className="absolute top-5 left-2 px-2 py-1 rounded text-xs text-white text-nowrap shadow-lg"
              style={{
                backgroundColor: "#3B82F6",
              }}
            >
              User {userId.slice(-4)} {/* Show last 4 characters of user ID */}
            </div>
          </div>
        );
      })}
    </div>
  );
} 