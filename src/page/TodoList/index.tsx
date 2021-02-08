import React, { FC, ReactElement, useState, useCallback } from "react";
import { ContentContainer } from "../../constants/LayoutStyled";
import { Typography } from "@material-ui/core";
import { Todo, TodoList as TodoListType } from "./typing";
import Input from "./Input";
import List from "./List";

interface IProps {}

const TodoList: FC<IProps> = (): ReactElement => {
  const [todoList, setTodoList] = useState<TodoListType>([]);

  const addTodo = useCallback((todo: Todo): void => {
    setTodoList((prev) => [...prev, todo]);
  }, []);

  const removeTodo = useCallback((todo: Todo): void => {
    setTodoList((prev) => prev.filter((item) => item.content !== todo.content));
  }, []);

  const toggleTodoStatus = useCallback((todo: Todo): void => {
    setTodoList((prev) => {
      const prevData = [...prev];
      prevData.some((item) => {
        if (item.content === todo.content) {
          item.selected = !item.selected;
          return true;
        }
      });
      return prevData;
    });
  }, []);

  return (
    <ContentContainer>
      <Typography variant="caption">ToDo List</Typography>
      <Input addTodo={addTodo} />
      <List
        todoList={todoList}
        removeTodo={removeTodo}
        toggleTodoStatus={toggleTodoStatus}
      />
    </ContentContainer>
  );
};
export default TodoList;
