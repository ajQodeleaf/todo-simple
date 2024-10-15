"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TodoInputForm from "../components/TodoInputForm";
import TodoList from "../components/TodoList";
import { TodoStatus } from "../constants/todoStatus";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (input) => {
    const newTodo = {
      id: Date.now(),
      text: input.text,
      status: TodoStatus.ACTIVE,
      startTime: Date.now(),
      endTime: Date.now() + input.timer * 60 * 1000,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status:
                todo.status === TodoStatus.COMPLETED
                  ? TodoStatus.ACTIVE
                  : TodoStatus.COMPLETED,
            }
          : todo
      )
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTimer = (id, newTime) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          if (newTime <= 0 && todo.status === TodoStatus.ACTIVE) {
            return { ...todo, status: TodoStatus.DELAYED, endTime: 0 };
          }
          return { ...todo, endTime: Date.now() + newTime * 1000 };
        }
        return todo;
      })
    );
  };

  return (
    <Box px={4} py={4}>
      <Text
        fontSize="2xl"
        fontWeight="extrabold"
        mb={5}
        textAlign="center"
        fontStyle="italic"
      >
        Todo App
      </Text>

      <TodoInputForm onSubmit={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onRemove={handleRemoveTodo}
        onUpdateTimer={handleUpdateTimer}
      />
    </Box>
  );
}
