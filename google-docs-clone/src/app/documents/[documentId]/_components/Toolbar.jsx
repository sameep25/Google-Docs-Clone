import React from "react";
import { cn } from "@/lib/utils"; //deals with tailwind classes
import { Undo2Icon } from "lucide-react";
import { useEditorStore } from "@/store/use-editor-store";

const ToolbarButton = ({ onClick, isActive, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-[#dde3ec]",
        isActive && "bg-natural-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

const Toolbar = () => {
  const { editor } = useEditorStore();
  console.log(editor);

  const sections = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor.chain().focus().undo().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto ">
      {sections[0].map((item) => (
        <ToolbarButton
          key={item.label}
          onClick={item.onClick}
          isActive={false}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Toolbar;
