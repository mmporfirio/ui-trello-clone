import { Draggable, Droppable } from "react-beautiful-dnd";
import {
  ColumnContainer,
  ColumnHeaderButton,
  ColumnHeaderContainer,
  ColumnTitle,
  ColumnTitleContainer,
  StyledList,
  StyledListItem,
} from "./Column.styles";
import Card, { CardType } from "../Card/Card";
import DotsIcon from "../../../../../../assets/svg/DotsIcon";
import { ColumnFooter } from "../ColumnFooter";
import { Dispatch, useCallback } from "react";
import { ActionType } from "../../Board";

export type ColumnType = {
  id: string;
  title: string;
  color?: string;
  taskIds: string[];
};

type ColumnProps = {
  tasks: CardType[];
  column: ColumnType;
  index: number;
  dispatch: Dispatch<ActionType>;
};

const Column = ({ tasks, column, index, dispatch }: ColumnProps) => {
  const addCardToColumn = useCallback(
    (card: CardType) => {
      dispatch({
        type: "ADD_CARD",
        payload: { columnId: column.id, card },
      });
    },
    [dispatch]
  );

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <StyledListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ColumnContainer>
            <ColumnHeaderContainer>
              <ColumnTitleContainer>
                <ColumnTitle>{column.title}</ColumnTitle>
              </ColumnTitleContainer>
              <ColumnHeaderButton>
                <DotsIcon />
              </ColumnHeaderButton>
            </ColumnHeaderContainer>
            <Droppable droppableId={column.id} type="card" direction="vertical">
              {(provided) => (
                <StyledList ref={provided.innerRef}>
                  {tasks.map((task, index) => (
                    <Card key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}

                  <ColumnFooter handleAddCard={addCardToColumn} />
                </StyledList>
              )}
            </Droppable>
          </ColumnContainer>
        </StyledListItem>
      )}
    </Draggable>
  );
};

export default Column;
