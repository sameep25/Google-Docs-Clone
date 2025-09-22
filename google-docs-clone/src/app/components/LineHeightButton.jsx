import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { SketchPicker } from "react-color";
import { cn } from "@/lib/utils";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  ListCollapseIcon,
} from "lucide-react";

const LineHeightButton = () => {
  const { editor } = useEditorStore();

  const lineHeights = [
    { label: "Default", value: "normal" },
    { label: "Single", value: "1" },
    { label: "1.15", value: "1.15" },
    { label: "1.5", value: "1.5" },
    { label: "Double", value: "2" },
  ];

  const handleclick = (height) => {
    editor?.chain().focus().setLineHeight(height).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-sm h-7 min-w-7 flex flex-col items-center justify-center rounded-sm hover:bg-[#dde3ec]">
          <ListCollapseIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5">
        {lineHeights.map(({ label, value }) => (
          <button
            className={cn(
              "flex items-center w-full gap-x-2 p-2 rounded-sm hover:bg-neutral-200/80",
              editor?.getAttributes("paragraph").lineHeight === value &&
                "bg-neutral-200/80"
            )}
            key={value}
            onClick={() => handleclick(value)}
          >
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LineHeightButton;
