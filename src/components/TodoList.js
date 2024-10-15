import {
  Grid,
  Box,
  Heading,
  List,
} from "@chakra-ui/react";
import TodoItem from "../components/TodoItem";
import { TodoStatus } from "../constants/todoStatus";

function TodoList({ todos, onToggle, onRemove, onUpdateTimer }) {
  const activeTodos = todos.filter((todo) => todo.status === TodoStatus.ACTIVE);
  
  const completedTodos = todos.filter(
    (todo) => todo.status === TodoStatus.COMPLETED
  );
  const delayedTodos = todos.filter(
    (todo) => todo.status === TodoStatus.DELAYED
  );

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      w="100%"
      minH="100vh"
      gap={8}
      px={4}
      py={16}
    >
      <Box bg="yellow.300" borderRadius={"2xl"}>
        <Heading size="md" fontWeight='bold' m={4} textAlign="center">
          Active Todos
        </Heading>
        <List spacing={3}>
          {activeTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => onToggle(todo.id)}
              onRemove={() => onRemove(todo.id)}
              onUpdateTimer={onUpdateTimer}
            />
          ))}
        </List>
      </Box>
      <Box bg="green.300" borderRadius={"2xl"}>
        <Heading size="md" m={4} textAlign="center">
          Complete Todos
        </Heading>
        <List spacing={3}>
          {completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => onToggle(todo.id)}
              onRemove={() => onRemove(todo.id)}
              onUpdateTimer={onUpdateTimer}
            />
          ))}
        </List>
      </Box>
      <Box bg="red.300" borderRadius={"2xl"}>
        <Heading size="md" m={4} textAlign="center">
          Delayed Todos
        </Heading>
        <List spacing={3}>
          {delayedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => onToggle(todo.id)}
              onRemove={() => onRemove(todo.id)}
              onUpdateTimer={onUpdateTimer}
            />
          ))}
        </List>
      </Box>
    </Grid>
  );
}

export default TodoList;
