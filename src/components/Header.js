"use client";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/themeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Logo />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <IconButton
            aria-label="Toggle theme"
            icon={theme === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleTheme}
            variant="outline"
            size="md"
            isRound
          />
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            onClick={() => router.push("/sign-in")}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            onClick={() => router.push("/sign-up")}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
