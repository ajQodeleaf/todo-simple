import { Box, Heading, List, Text } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

const TaskStatusSection = ({
  todos,
  statusTitle,
  bgColor,
  onToggle,
  onRemove,
  onUpdateTimer,
}) => {
  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      p={4}
      maxW="sm"
      minH="51.8vh"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
    >
      {todos.length === 0 ? (
        <Text textAlign="center" color="gray.500" mt={6}>
          No {statusTitle} task.
        </Text>
      ) : (
        <List spacing={3}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => onToggle(todo.id)}
              onRemove={() => onRemove(todo.id)}
              onUpdateTimer={onUpdateTimer}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default TaskStatusSection;
