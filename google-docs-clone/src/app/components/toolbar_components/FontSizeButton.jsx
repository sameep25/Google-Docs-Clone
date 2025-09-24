"use client";
import { React, useEffect, useState } from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { MinusIcon, PlusIcon } from "lucide-react";

const FontSizeButton = () => {
  const { currentFontSize, updateFontSize } = useEditorStore();
  const [inputValue, setInputValue] = useState("14");
  const [isEditing, setIsEditing] = useState(false);

  const getCurrentSizeNumber = () => {
    return parseInt(currentFontSize?.replace(/[^\d]/g, ""), 10) || 14;
  };

  useEffect(() => {
    if (!isEditing) {
      setInputValue(getCurrentSizeNumber().toString());
    }
  }, [currentFontSize, isEditing]);

  const handleIncrement = () => {
    const currentSize = getCurrentSizeNumber();
    const newSize = Math.min(currentSize + 2, 200); // Increment by 2 for faster changes
    updateFontSize(`${newSize}px`);
    setInputValue(newSize.toString());
  };

  const handleDecrement = () => {
    const currentSize = getCurrentSizeNumber();
    const newSize = Math.max(currentSize - 2, 6); // Decrement by 2 for faster changes
    updateFontSize(`${newSize}px`);
    setInputValue(newSize.toString());
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleInputFocus = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    applyFontSize();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  const applyFontSize = () => {
    const size = parseInt(inputValue, 10);
    if (!isNaN(size) && size >= 6 && size <= 100) {
      updateFontSize(`${size}px`);
    } else {
      setInputValue(getCurrentSizeNumber().toString());
    }
  };

  return (
    <div className="flex items-center gap-1">
      {/* Decrement Button */}
      <button
        onClick={handleDecrement}
        className="w-6 h-6 flex items-center justify-center hover:bg-neutral-200/80 rounded"
      >
        <MinusIcon className="size-4" />
      </button>

      {/* Font Size Input */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyPress={handleKeyPress}
        className="w-10 h-7 p-2 text-center text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 "
        min="6"
        max="100"
        title="Font size"
        placeholder="16"
      />

      {/* Increment Button */}
      <button
        onClick={handleIncrement}
        className="w-6 h-6 flex items-center justify-center hover:bg-neutral-200/80 rounded"
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
};

export default FontSizeButton;
