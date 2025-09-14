import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { SketchPicker } from "react-color";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { HighlighterIcon } from "lucide-react";

const HighlightColorButton = () => {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("highlight").color || "#ffffff";

  const handleColorChange = (color) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 mt-1 min-w-7 flex flex-col items-center justify-between hover:bg-neutral-200/80 p-2 overflow-hidden rounded-sm text-sm ml-1">
          <HighlighterIcon className="size-4" />
          <div className="h-1 w-full" style={{ background: value }}></div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5">
        <SketchPicker color={value} onChange={handleColorChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HighlightColorButton;
