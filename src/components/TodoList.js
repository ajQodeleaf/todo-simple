import { Grid } from "@chakra-ui/react";
import { TodoStatus } from "../constants/todoStatus";
import TaskStatusSection from "./TaskStatusSection";

function TodoList({ todos, onToggle, onRemove, onUpdateTimer }) {
  const activeTodos = todos.filter((todo) => todo.status === TodoStatus.ACTIVE);
  const completedTodos = todos.filter(
    (todo) => todo.status === TodoStatus.COMPLETED
  );
  const delayedTodos = todos.filter((todo) => todo.status === TodoStatus.DELAYED);

  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      w="100%"
      gap={8}
      px={4}
      py={16}
    >
      <TaskStatusSection
        todos={activeTodos}
        statusTitle="Active Todos"
        bgColor="yellow.100"
        onToggle={onToggle}
        onRemove={onRemove}
        onUpdateTimer={onUpdateTimer}
      />

      <TaskStatusSection
        todos={completedTodos}
        statusTitle="Completed Todos"
        bgColor="green.100"
        onToggle={onToggle}
        onRemove={onRemove}
        onUpdateTimer={onUpdateTimer}
      />

      <TaskStatusSection
        todos={delayedTodos}
        statusTitle="Delayed Todos"
        bgColor="red.100"
        onToggle={onToggle}
        onRemove={onRemove}
        onUpdateTimer={onUpdateTimer}
      />
    </Grid>
  );
}

export default TodoList;
