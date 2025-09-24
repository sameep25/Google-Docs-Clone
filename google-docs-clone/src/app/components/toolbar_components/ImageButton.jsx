"use client";
import { React, useState } from "react";
import { useEditorStore } from "@/store/use-editor-store";
import { cn } from "@/lib/utils";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ImageIcon, SearchIcon, UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ImageButton = () => {
  const { editor } = useEditorStore();
  const [imageURL, setImageURL] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onChange = (src) => {
    editor.chain().focus().setImage({ src }).run();
  };

  const onUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const imageURL = URL.createObjectURL(file);
        onChange(imageURL);
      }
    };
    input.click();
  };

  const handleImageURLSubmit = () => {
    if (imageURL) {
      onChange(imageURL);
      setImageURL("");
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-[#dde3ec]">
            <ImageIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-left gap-x-2">
          <DropdownMenuItem className="hover:bg-[#dedede]" onClick={onUpload}>
            <UploadIcon className="size-4 " /> Upload
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-[#dedede]"
            onClick={() => {
              setIsDialogOpen(true);
            }}
          >
            <SearchIcon className="size-4" /> Paste Image URL
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert Image URL </DialogTitle>
          </DialogHeader>
          <Input
            plcaeholder="Insert image url"
            value={imageURL}
            onChange={(e) => {
              setImageURL(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleImageURLSubmit();
            }}
          />
          <DialogFooter>
            <Button onClick={handleImageURLSubmit}>Insert</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageButton;
