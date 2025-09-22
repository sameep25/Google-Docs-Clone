import { create } from "zustand";

export const useEditorStore = create((set, get) => ({
  editor: null,
  currentFontSize: "16px",

  setEditor: (editor) => set({ editor }),

  // custom extenstions
  setCurrentFontSize: (size) => set({ currentFontSize: size }),
  updateFontSize: (size) => {
    const { editor } = get();
    if (editor) {
      editor.chain().focus().setFontSize(size).run();
      set({ currentFontSize: size });
    }
  },

  setCurrentLineHeight: (height) => set({ currentLineHeight: height }),
  updateLineHeight: (height) => {
    const { editor } = get();
    if (editor) {
      editor.chain().focus().setLineHeight(height).run();
      set({ currentLineHeight: height });
    }
  },
}));
