import React from "react";
import { useEditorStore } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const HeadingLevelButton = () => {
  const { editor } = useEditorStore();
  const Headings = [
    { label: "Normal Text", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
    { label: "Heading 5", value: 5, fontSize: "16px" },
  ];

  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }
    return "Normal Text";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center hover:bg-neutral-200/80 p-2 overflow-hidden rounded-sm text-sm ml-1">
          <span className="truncate">{getCurrentHeading()}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className=" flex flex-col gap-y-2 p-1">
        {Headings.map(({ label, value, fontSize }) => (
          <button
            key={value}
            className={cn(
              "flex items-center rounded-sm hover:bg-neutral-200/80 px-2 py-1",
              (value === 0 && !editor?.isActive("heading")) ||
                (editor?.isActive("heading", { level: value }) &&
                  "bg-neutral-200/80")
            )}
            style={{ fontSize }}
            onClick={() => {
              if (value === 0) editor?.chain().focus().setParagraph().run();
              else
                editor?.chain().focus().toggleHeading({ level: value }).run();
            }}
          >
            <span className="">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeadingLevelButton;
