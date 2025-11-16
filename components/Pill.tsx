// components/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap
        ${
          isActive
            ? "bg-gray-900 text-white border-gray-900"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
