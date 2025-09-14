"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import ImageResize from "tiptap-extension-resize-image";
import { TextStyle, FontFamily } from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import { Color } from "@tiptap/extension-text-style";
// import { Color } from "react-color";

import { useEditorStore } from "@/store/use-editor-store";

const Editor = () => {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    // saving the state of editor after every change made in the editor
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },

    editorProps: {
      attributes: {
        style: "paddinf-left:56px ; padding:right:56px ;",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 px-8 pb-10 cursor-text",
      },
    },

    extensions: [
      StarterKit,
      ImageResize.configure({
        inline: true,
      }),
      TaskItem.configure({ nested: true }),
      TaskList,
      Image,
      TableKit.configure({
        table: { resizable: true },
      }),
      TextStyle,
      FontFamily,
      Color,
      Highlight.configure({ multicolor: true }),
    ],

    content: ``,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    autofocus: true,
  });

  return (
    <div className="size-full overflow-y-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
