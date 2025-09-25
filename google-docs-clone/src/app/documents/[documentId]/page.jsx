"use client";
import { useParams } from "next/navigation";
import React from "react";
import Editor from "./_components/Editor";
import Navbar from "./_components/Navbar";
import Toolbar from "./_components/Toolbar";

const DocumentIdPage = () => {
  const { documentId } = useParams();

  return (
    <div className="min-h-screen">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden ">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default DocumentIdPage;
