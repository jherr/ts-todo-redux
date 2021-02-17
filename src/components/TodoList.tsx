import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../store/types";
import { deleteTodo, toggleTodo, updateTodo } from "../store/actions";

function TodoListItems() {
  const todos = useSelector((state: Store) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => dispatch(toggleTodo(todo.id))} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => dispatch(updateTodo(todo.id, evt.target.value))}
          />
          <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
