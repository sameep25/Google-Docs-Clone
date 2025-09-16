import React from "react";
import ToolbarButton from "@/app/components/ToolbarButton";
import FontFamilyButton from "@/app/components/FontFamilyButton";
import HeadingLevelButton from "@/app/components/HeadingLevelButton";
import {
  Undo2Icon,
  Redo2Icon,
  PrinterIcon,
  SpellCheckIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  MessageSquarePlusIcon,
  ListTodoIcon,
  RemoveFormattingIcon,
} from "lucide-react";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";
import TextColorButton from "@/app/components/TextColorButton";
import HighlightColorButton from "@/app/components/HighlightColorButton";
import LinkButton from "@/app/components/LinkButton";
import ImageButton from "@/app/components/ImageButton";
import AlignButton from "@/app/components/AlignButton";

const Toolbar = () => {
  const { editor } = useEditorStore();
  // console.log(editor);

  const sections = [
    // Tools1-Undo,Redo,Print,Spell-Check
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        // using browser apis to implement spell check
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    // Fonts-Bold, Italtc ,Underline
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    // Tools2-comment ,Todo List ,Remove Formatting
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        isActive: false,
        onClick: () => {
          console.log("Todo:comment");
        },
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        isActive: editor?.isActive("taskList"),
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto ">
      {/* tools1 */}
      {sections[0].map((item) => (
        <ToolbarButton
          key={item.label}
          onClick={item.onClick}
          isActive={false}
          icon={item.icon}
        />
      ))}
      <Separator orientation="vertical" className="h-6 bg-gray-400 ml-1" />

      {/* fonts */}
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-6 bg-gray-400 ml-1" />

      {/* Headings */}
      <Separator orientation="vertical" className="h-6 bg-gray-400 ml-1" />
      <HeadingLevelButton />

      {/* Font size */}
      <Separator orientation="vertical" className="h-6 bg-gray-400 ml-1" />
      {/* tools-2 bold,italic */}
      {sections[1].map((item) => (
        <ToolbarButton
          key={item.label}
          onClick={item.onClick}
          isActive={item.isActive}
          icon={item.icon}
        />
      ))}

      {/* Text color */}
      <TextColorButton />
      {/* Highlight color */}
      <HighlightColorButton />
      <Separator orientation="vertical" className="h-6 bg-gray-400 ml-1" />
      {/* Link */}
      <LinkButton />
      {/* Image */}
      <ImageButton />
      {/* Align */}
      <AlignButton />
      {/* Line Height */}
      {/* List */}

      {sections[2].map((item) => (
        <ToolbarButton
          key={item.label}
          onClick={item.onClick}
          isActive={item.isActive}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Toolbar;
