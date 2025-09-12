"use client";
import { useParams } from "next/navigation";
import React from "react";
import Editor from "./_components/Editor";
import Toolbar from "./_components/Toolbar";

const DocumentIdPage = () => {
  const { documentId } = useParams();

  return (
    <div className="min-h-screen">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
