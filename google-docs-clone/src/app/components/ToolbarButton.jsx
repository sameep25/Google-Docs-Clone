import React from "react";
import { cn } from "@/lib/utils"; //deals with tailwind classes

const ToolbarButton = ({ onClick, isActive, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-[#dde3ec]",
        isActive && "bg-[#dde3ec]"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export default ToolbarButton;
