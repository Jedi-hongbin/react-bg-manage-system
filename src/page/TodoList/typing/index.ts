export interface Todo {
  content: string;
  selected: boolean;
}

export type TodoList = Array<Todo>;
