"use client";
import { useParams } from "next/navigation";
import React from "react";
import Editor from "./_components/Editor";

const DocumentIdPage = () => {
  const { documentId } = useParams();

  return (
    <div className="min-h-screen">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
