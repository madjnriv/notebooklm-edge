"use client";

import { AppHeader } from "@/common/components/app-header";
import { useState } from "react";

export default function Home() {
  const [noteTitle, setNoteTitle] = useState<string>(
    "Firebase Authentication and Google OAuth Implementation Strategies",
  );
  const [editNoteTitle, setEditNoteTitle] = useState<boolean>(false);
  return (
    <div className="p-3">
      <AppHeader
        title={noteTitle}
        isEditMode={editNoteTitle}
        onTitleEdit={() => {}}
        setEditMode={setEditNoteTitle}
      />
    </div>
  );
}
