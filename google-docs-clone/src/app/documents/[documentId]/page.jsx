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
      <Navbar />
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
