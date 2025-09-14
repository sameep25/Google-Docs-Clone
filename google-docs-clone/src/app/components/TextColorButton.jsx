import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { cn } from "@/lib/utils";
import { CirclePicker } from "react-color";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

const TextColorButton = () => {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("textStyle").color || "#111111";

  const handleColorChange = (color) => {
    editor?.chain().focus().setColor(color.hex).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 mb-2 min-w-7 flex flex-col items-center justify-between hover:bg-neutral-200/80 p-2 overflow-hidden rounded-sm text-sm ml-1">
          <span className="text-xs">A</span>
          <div className="h-1 w-full" style={{ background: value }}>
            s
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5">
        <CirclePicker color={value} onChange={handleColorChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TextColorButton;
