type TaskId = string;

interface Task {
  id: TaskId;
  content: {
    title: string;
  };
}

type ColumnId = string;

interface Column {
  id: ColumnId;
  title: string;
  taskIds: TaskId[];
}

interface TaskState {
  tasks: Record<TaskId, Task>;
  columns: Record<ColumnId, Column>;
  columnOrder: ColumnId[];
}

export type { Task, TaskState, Column, ColumnId };
