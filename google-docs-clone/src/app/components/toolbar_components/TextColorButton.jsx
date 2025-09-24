import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { cn } from "@/lib/utils";
import { SketchPicker } from "react-color";
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
        <button className="text-sm h-7 min-w-7 flex flex-col items-center justify-center rounded-sm hover:bg-[#dde3ec]">
          <span className="text-xs">A</span>
          <div className="h-1.5 w-3/4" style={{ background: value }}></div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5">
        <SketchPicker color={value} onChange={handleColorChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TextColorButton;
