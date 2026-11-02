import React from "react";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon, Share03Icon } from "@hugeicons/core-free-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogoWordMark } from "./logo";
import { NoteTitle } from "./note-title";

interface AppHeaderProps {
  title?: string;
  user?: unknown;
  onTitleEdit: () => void;
  isEditMode: boolean;
  setEditMode: (val: boolean) => void;
}
export const AppHeader = ({
  title,
  user,
  isEditMode,
  onTitleEdit,
  setEditMode,
}: AppHeaderProps) => {
  return (
    <div className="flex items-center justify-between lg:w-[95%] lg:mx-auto">
      <div className="flex items-center gap-x-5">
        <LogoWordMark />
        <NoteTitle
          title={title}
          isEditMode={isEditMode}
          onTitleEdit={onTitleEdit}
          setEditMode={setEditMode}
        />
      </div>

      <div className="flex items-center">
        <Button
          variant={"secondary"}
          size={"sm"}
          className={"text-sm font-medium"}
        >
          <HugeiconsIcon icon={PlusSignIcon} className="size-5" />
          <span className="hidden md:block">Create New Note</span>
        </Button>
        <Button variant={"secondary"} className={"text-sm font-medium"}>
          <HugeiconsIcon icon={Share03Icon} className="size-5" />
          <span className="hidden md:block">Share</span>
        </Button>

        <Avatar className={"size-10 ml-3"}>
          <AvatarImage src="/portrait-img.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
