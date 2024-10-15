import {
  GridItem,
  Input,
  Button,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function TodoInputForm({ onSubmit }) {
  const [input, setInput] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && time) {
      onSubmit({ text: input, timer: parseInt(time) });
      setInput("");
      setTime("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid columns={12} spacing={4} alignItems="center" px={4}>
        <GridItem colSpan={6}>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a todo"
            mr={2}
            width="100%"
          />
        </GridItem>

        <GridItem colSpan={1}>
          <Text textAlign="center">in</Text>
        </GridItem>

        <GridItem colSpan={3}>
          <Select
            placeholder="Select time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            width="100%"
          >
            <option value="1">1 minute</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
          </Select>
        </GridItem>

        <GridItem colSpan={2}>
          <Button colorScheme="teal" type="submit" width="100%">
            Add
          </Button>
        </GridItem>
      </SimpleGrid>
    </form>
  );
}

export default TodoInputForm;
