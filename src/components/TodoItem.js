import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  CircularProgress,
  CircularProgressLabel,
  Box,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TodoStatus } from "../constants/todoStatus";

function TodoItem({ todo, onToggle, onRemove, onUpdateTimer }) {
  const [timeLeft, setTimeLeft] = useState(
    Math.max(0, (todo.endTime - Date.now()) / 1000)
  );

  useEffect(() => {
    if (todo.status === TodoStatus.COMPLETED) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = Math.max(0, prevTimeLeft - 1);
        onUpdateTimer(todo.id, newTimeLeft);
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [todo.id, onUpdateTimer, todo.status]);

  const progress = Math.min(
    (1 - timeLeft / ((todo.endTime - todo.startTime) / 1000)) * 100,
    100
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={3}
      my={2}
      boxShadow="sm"
      borderRadius="3xl"
      bg={
        todo.status === TodoStatus.COMPLETED
          ? "green.100"
          : todo.status === TodoStatus.DELAYED
          ? "red.100"
          : "yellow.50"
      }
      _hover={{
        bg: todo.status === TodoStatus.COMPLETED ? "green.50" : "gray.50",
        boxShadow: "md",
      }}
      transition="box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out"
      border="1px solid"
      borderColor={
        todo.status === TodoStatus.COMPLETED ? "green.50" : "gray.50"
      }
      minH="60px"
    >
      <Box flex="1" display="flex" alignItems="center">
        <Text
          color="black"
          fontWeight={todo.status === TodoStatus.COMPLETED ? "bold" : "normal"}
          fontSize="md"
          isTruncated
        >
          {todo.text}
        </Text>
      </Box>

      <Box display="flex" alignItems="center">
        {todo.status === TodoStatus.ACTIVE && (
          <CircularProgress
            value={progress}
            color="green"
            trackColor="green.200"
            size="32px"
            mr={3}
          >
            <CircularProgressLabel color="black">
              {Math.floor(timeLeft / 60)}:
              {("0" + Math.floor(timeLeft % 60)).slice(-2)}
            </CircularProgressLabel>
          </CircularProgress>
        )}

        {todo.status === TodoStatus.ACTIVE && (
          <IconButton
            icon={<CheckIcon />}
            colorScheme="green"
            onClick={onToggle}
            mr={2}
            size="sm"
          />
        )}

        <IconButton
          icon={<DeleteIcon />}
          colorScheme="red"
          onClick={onRemove}
          size="sm"
        />
      </Box>
    </Box>
  );
}

export default TodoItem;
