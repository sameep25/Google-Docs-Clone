"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  Grid3X3Icon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";

const NavMenu = () => {
  const { editor } = useEditorStore();

  const handleAddTable = (rows, cols) => {
    console.log(rows, cols);
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  return (
    <div className="flex ">
      <Menubar className="border-none bg-transparent shadow-none h-auto p-0 ">
        {/* File Menu*/}
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            File
          </MenubarTrigger>
          <MenubarContent className="print:hidden">
            {/* Save submenu */}
            <MenubarSub>
              {/* Trigger */}
              <MenubarSubTrigger>
                <MenubarItem>
                  <FileIcon />
                  Save
                </MenubarItem>
              </MenubarSubTrigger>
              {/* Menu content */}
              <MenubarSubContent>
                <MenubarItem>
                  <FileJsonIcon className="size-4 mr-2" /> JSON
                </MenubarItem>
                <MenubarItem>
                  <GlobeIcon className="size-4 mr-2" /> HTML
                </MenubarItem>
                <MenubarItem>
                  <BsFilePdf className="size-4 mr-2" /> PDF
                </MenubarItem>
                <MenubarItem>
                  <FileTextIcon className="size-4 mr-2" /> Text
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            {/* New document item */}
            <MenubarItem>
              <FilePlusIcon className="size-4 ml-2" />
              New Document
            </MenubarItem>

            <MenubarSeparator />

            {/* Rename */}
            <MenubarItem>
              <FilePenIcon className="size-4 ml-2" />
              Rename
            </MenubarItem>
            {/* Remove */}
            <MenubarItem>
              <TrashIcon className="size-4 ml-2" />
              Remove
            </MenubarItem>

            <MenubarSeparator />

            {/* Print */}
            <MenubarItem
              onClick={() => {
                window.print();
              }}
            >
              <PrinterIcon className="size-4 ml-2" />
              Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Edit */}
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Edit
          </MenubarTrigger>
          <MenubarContent>
            {/* Undo */}
            <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
              <Undo2Icon className="size-4 " />
              Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
            </MenubarItem>
            {/* Redo */}
            <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
              <Redo2Icon className="size-4 " />
              Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        {/* Insert */}
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Insert
          </MenubarTrigger>
          <MenubarContent>
            {/* Table Submenu */}
            <MenubarSub>
              <MenubarSubTrigger>
                {" "}
                <Grid3X3Icon className="size-4 mr-2" /> Table
              </MenubarSubTrigger>
              <MenubarSubContent className="[&>*]:pl-2">
                <MenubarItem onClick={() => handleAddTable(1, 1)}>
                  1 X 1
                </MenubarItem>
                <MenubarItem onClick={() => handleAddTable(2, 2)}>
                  2 X 2
                </MenubarItem>
                <MenubarItem onClick={() => handleAddTable(3, 3)}>
                  3 X 3
                </MenubarItem>
                <MenubarItem onClick={() => handleAddTable(4, 4)}>
                  4 X 4
                </MenubarItem>
                <MenubarItem onClick={() => handleAddTable(5, 5)}>
                  5 X 5
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>

        {/* Format */}
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Format
          </MenubarTrigger>
          <MenubarContent>
            {/* Formatting Sub menu */}
            <MenubarSub>
              <MenubarSubTrigger>
                <TextIcon className="size-4 mr-2" />
                Text
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <BoldIcon /> Bold <MenubarShortcut>Ctrl+B</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <ItalicIcon /> Italic{" "}
                  <MenubarShortcut>Ctrl+I</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <UnderlineIcon /> Underline{" "}
                  <MenubarShortcut>Ctrl+U </MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <StrikethroughIcon /> Strikethrough&nbsp;
                  <MenubarShortcut>Ctrl+Sft+S</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              <RemoveFormattingIcon className="size-4 " />
              Remove Formatting
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default NavMenu;
