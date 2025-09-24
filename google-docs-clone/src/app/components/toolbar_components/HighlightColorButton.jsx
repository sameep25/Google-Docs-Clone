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
        <button className="text-sm h-7 min-w-7 flex flex-col items-center justify-center rounded-sm hover:bg-[#dde3ec]">
          <HighlighterIcon className="size-4" />
          <div
            className="h-1.5 w-3/4 border-[0.5px] border-black"
            style={{ background: value }}
          ></div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5">
        <SketchPicker color={value} onChange={handleColorChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HighlightColorButton;
