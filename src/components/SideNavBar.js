"use client";

import {
  Box,
  Flex,
  VStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Divider,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FiHome, FiSettings, FiLogOut } from "react-icons/fi";

const SideNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        onClick={onOpen}
        variant="outline"
        borderRadius="50%"
        boxShadow="sm"
        position="fixed"
        top={4}
        left={16}
        zIndex={10}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("white", "gray.800")}
          borderRightRadius="md"
          boxShadow="lg"
        >
          <DrawerCloseButton />
          <DrawerBody>
            <Flex direction="column" height="100%" p={4}>
              <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Menu
              </Text>
              <Divider />
              <VStack align="start" spacing={4} mt={4}>
                <MenuItem icon={FiHome} label="Home" />
                <MenuItem icon={FiSettings} label="Settings" />
                <MenuItem icon={FiLogOut} label="Logout" />
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const MenuItem = ({ icon, label }) => {
  return (
    <Flex
      align="center"
      p={2}
      borderRadius="md"
      _hover={{ bg: "gray.100", color: "black" }}
      transition="background 0.2s"
    >
      <Box as={icon} mr={2} fontSize="20px" />
      <Text fontSize="lg" _hover={{ color: "black" }} transition="color 0.2s">
        {label}
      </Text>
    </Flex>
  );
};

export default SideNavBar;
