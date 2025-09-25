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
const NavMenu = () => {
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
            <MenubarItem>
              <Undo2Icon className="size-4 " />
              Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
            </MenubarItem>
            {/* Redo */}
            <MenubarItem>
              <Redo2Icon className="size-4 " />
              Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut>
            </MenubarItem>
            {/* Table Submenu */}
            <MenubarSub>
              <MenubarSubTrigger>
                {" "}
                <Grid3X3Icon className="size-4 mr-2" /> Table
              </MenubarSubTrigger>
              <MenubarSubContent className="[&>*]:pl-2">
                <MenubarItem>1 X 1</MenubarItem>
                <MenubarItem>2 X 2</MenubarItem>
                <MenubarItem>3 X 3</MenubarItem>
                <MenubarItem>4 X 4</MenubarItem>
                <MenubarItem>5 X 5</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>

        {/* Insert */}
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Insert
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileIcon />
              Save
            </MenubarItem>
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
