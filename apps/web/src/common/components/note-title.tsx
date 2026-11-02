import React from "react";
import { Field, FieldDescription } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
interface NoteTitleProps {
  title?: string;
  onTitleEdit: () => void;
  isEditMode: boolean;
  setEditMode: (val: boolean) => void;
}
export const NoteTitle = ({
  title,
  isEditMode,
  onTitleEdit,
  setEditMode,
}: NoteTitleProps) => {
  return (
    <>
      {isEditMode ? (
        <Field>
          <Input value={title} />
          <FieldDescription>Press enter to save</FieldDescription>
        </Field>
      ) : (
        <Button onClick={() => setEditMode(true)}>
          <p className="hidden md:block font-heading text-lg leading-1">
            {title ?? "Untitled Notebook"}
          </p>
        </Button>
      )}
    </>
  );
};
