import { useCallback, useEffect, useRef, useState } from "react";
import { ActionType } from "../../Board";
import {
  ActionsContainer,
  CancelButton,
  ColumnButton,
  CreateColumnButton,
  CreatingContainer,
  StyledTextArea,
} from "./NewColumnButton.styles";
import PlusIcon from "../../../../../../assets/svg/PlusIcon";
import XIcon from "../../../../../../assets/svg/XIcon";

type NewColumnButtonProps = {
  dispatch: React.Dispatch<ActionType>;
};

function NewColumnButton({ dispatch }: NewColumnButtonProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [columnName, setColumnName] = useState<string>();

  const containerRef = useRef<HTMLDivElement>(null);

  const toggleIsCreating = () => setIsCreating(!isCreating);

  const resetState = () => {
    setIsCreating(false);
    setColumnName(undefined);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    )
      resetState();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const addColumn = useCallback(() => {
    const newColumnId = columnName ?? ""; // Just temporary id -> All the responsability given to backend
    const newColumn = { id: newColumnId, taskIds: [], title: columnName ?? "" };

    resetState();
    dispatch({ type: "ADD_COLUMN", payload: { column: newColumn } });
  }, [dispatch, columnName]);

  return isCreating ? (
    <CreatingContainer ref={containerRef}>
      <StyledTextArea
        placeholder="Enter list title…"
        value={columnName}
        onChange={(e) => setColumnName(e.target.value)}
      />
      <ActionsContainer>
        <CreateColumnButton onClick={addColumn}>Add List</CreateColumnButton>
        <CancelButton>
          <XIcon height={20} />
        </CancelButton>
      </ActionsContainer>
    </CreatingContainer>
  ) : (
    <ColumnButton onClick={toggleIsCreating}>
      <PlusIcon height={16} width={16} /> Add another list
    </ColumnButton>
  );
}

export default NewColumnButton;
