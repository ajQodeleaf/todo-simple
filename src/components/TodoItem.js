import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  CircularProgress,
  CircularProgressLabel,
  ListItem,
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
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = Math.max(0, prevTimeLeft - 1);
        onUpdateTimer(todo.id, newTimeLeft);
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [todo.id, onUpdateTimer]);

  const progress = Math.min(
    (1 - timeLeft / ((todo.endTime - todo.startTime) / 1000)) * 100,
    100
  );

  return (
    <ListItem
      display="flex"
      alignItems="center"
      p={3}
      m={4}
      borderWidth="1px"
      borderRadius="md"
      bg={
        todo.status === TodoStatus.COMPLETED
          ? "green.100"
          : todo.status === TodoStatus.DELAYED
          ? "red.100"
          : "yellow.100"
      }
    >
      <Box
        display="contents"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flex="1" color={"black"}>
          <Text>{todo.text}</Text>
        </Box>

        <Box display="flex" alignItems="center">
          {todo.status !== TodoStatus.DELAYED && (
            <CircularProgress
              value={progress}
              color="green"
              trackColor="green.200"
              size="32px"
              mr={2}
            >
              <CircularProgressLabel color={"black"}>
                {Math.floor(timeLeft / 60)}:
                {("0" + Math.floor(timeLeft % 60)).slice(-2)}
              </CircularProgressLabel>
            </CircularProgress>
          )}

          {todo.status !== TodoStatus.DELAYED && (
            <IconButton
              icon={<CheckIcon />}
              colorScheme={
                todo.status === TodoStatus.COMPLETED ? "blue" : "green"
              }
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
    </ListItem>
  );
}

export default TodoItem;
