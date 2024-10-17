"use client";
import {
  Box,
  Flex,
  Stack,
  useColorModeValue,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useTheme } from "@/context/themeContext";
import { useContext } from "react";
import { AuthContext } from "@/context/userAuthenticationContext";
import { useRouter, usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { FiLogOut, FiLogIn } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  const isWelcomePage = pathname === "/";
  const isHomePage = pathname === "/home";

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {!isHomePage && <Logo />}

        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          textAlign="center"
          fontStyle="italic"
          ml={isHomePage ? "72px" : "0px"}
          lineHeight="1.2"
          flexGrow={1}
        >
          Todo App
        </Text>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <IconButton
              icon={theme === "light" ? <MoonIcon /> : <SunIcon />}
              aria-label="Theme Switch"
              onClick={toggleTheme}
              variant="outline"
              borderRadius="50%"
              boxShadow="sm"
            />
            {isWelcomePage ? (
              <IconButton
                icon={<FiLogIn />}
                aria-label="Login"
                onClick={handleLogout}
                variant="outline"
                borderRadius="50%"
                boxShadow="sm"
              />
            ) : (
              <IconButton
                icon={<FiLogOut />}
                aria-label="Logout"
                onClick={handleLogout}
                variant="outline"
                borderRadius="50%"
                boxShadow="sm"
              />
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
