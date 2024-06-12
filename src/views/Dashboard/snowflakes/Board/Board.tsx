import { useReducer, useCallback, useMemo } from "react";
import { CardType } from "./snowflakes/Card";
import Column, { ColumnType } from "./snowflakes/Column/Column";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import initialData from "./Board.mock";
import { BoardContainer, StyledList } from "./Board.styles";
import NewColumnButton from "./snowflakes/NewColumnButton/NewColumnButton";

type TaskBoardType = {
  tasks: Record<string, CardType>;
  columns: Record<string, ColumnType>;
  columnOrder: string[];
};

export type ActionType =
  | { type: "MOVE_COLUMN"; payload: { startIndex: number; endIndex: number } }
  | {
      type: "MOVE_TASK";
      payload: {
        startColumnId: string;
        endColumnId: string;
        startIndex: number;
        endIndex: number;
      };
    }
  | { type: "ADD_CARD"; payload: { columnId: string; card: CardType } }
  | { type: "ADD_COLUMN"; payload: { column: ColumnType } };

const reducer = (state: TaskBoardType, action: ActionType): TaskBoardType => {
  switch (action.type) {
    case "ADD_COLUMN": {
      const { column } = action.payload;
      const newColumnOrder = [...state.columnOrder, column.id];
      return {
        ...state,
        columns: { ...state.columns, [column.id]: column },
        columnOrder: newColumnOrder,
      };
    }
    case "MOVE_COLUMN": {
      const newColumnOrder = [...state.columnOrder];
      const [removedColumn] = newColumnOrder.splice(
        action.payload.startIndex,
        1
      );
      newColumnOrder.splice(action.payload.endIndex, 0, removedColumn);
      return { ...state, columnOrder: newColumnOrder };
    }
    case "MOVE_TASK": {
      const { startColumnId, endColumnId, startIndex, endIndex } =
        action.payload;
      if (startColumnId === endColumnId) {
        // Moving within the same column
        const column = state.columns[startColumnId];
        const newTaskIds = [...column.taskIds];
        const [movedTaskId] = newTaskIds.splice(startIndex, 1);
        newTaskIds.splice(endIndex, 0, movedTaskId);
        const updatedColumn = { ...column, taskIds: newTaskIds };
        return {
          ...state,
          columns: {
            ...state.columns,
            [startColumnId]: updatedColumn,
          },
        };
      }

      // Moving to a different column
      const startColumn = state.columns[startColumnId];
      const endColumn = state.columns[endColumnId];
      const newStartTaskIds = [...startColumn.taskIds];
      const [movedTaskId] = newStartTaskIds.splice(startIndex, 1);
      const newEndTaskIds = [...endColumn.taskIds];
      newEndTaskIds.splice(endIndex, 0, movedTaskId);
      return {
        ...state,
        columns: {
          ...state.columns,
          [startColumnId]: { ...startColumn, taskIds: newStartTaskIds },
          [endColumnId]: { ...endColumn, taskIds: newEndTaskIds },
        },
      };
    }

    case "ADD_CARD": {
      const { columnId, card } = action.payload;
      const column = state.columns[columnId];
      const newTaskIds = [...column.taskIds, card.id];
      const updatedColumn = { ...column, taskIds: newTaskIds };
      const updatedTasks = { ...state.tasks, [card.id]: card };
      return {
        ...state,
        tasks: updatedTasks,
        columns: {
          ...state.columns,
          [columnId]: updatedColumn,
        },
      };
    }

    default:
      return state;
  }
};

const Board = () => {
  const [boardContent, dispatch] = useReducer(reducer, initialData);

  const onDragEnd = useCallback(({ destination, source, type }: DropResult) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "column") {
      dispatch({
        type: "MOVE_COLUMN",
        payload: { startIndex: source.index, endIndex: destination.index },
      });
      return;
    }

    dispatch({
      type: "MOVE_TASK",
      payload: {
        startColumnId: source.droppableId,
        endColumnId: destination.droppableId,
        startIndex: source.index,
        endIndex: destination.index,
      },
    });
  }, []);

  const memoizedBoardContent = useMemo(() => boardContent, [boardContent]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <BoardContainer>
            <StyledList {...provided.droppableProps} ref={provided.innerRef}>
              {memoizedBoardContent.columnOrder.map((columnId, index) => {
                const column = memoizedBoardContent.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => memoizedBoardContent.tasks[taskId]
                );
                return (
                  <Column
                    index={index}
                    tasks={tasks}
                    column={column}
                    key={column.id}
                    dispatch={dispatch}
                  />
                );
              })}
              <NewColumnButton dispatch={dispatch} />
            </StyledList>

            {provided.placeholder}
          </BoardContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
