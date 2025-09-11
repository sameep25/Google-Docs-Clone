"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "paddinf-left:56px ; padding:right:56px ;",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 px-8 pb-10 cursor-text",
      },
    },
    extensions: [StarterKit],
    content: "",
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
