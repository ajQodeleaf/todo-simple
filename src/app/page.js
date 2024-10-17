"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/themeContext";

export default function WelcomePage() {
  const { theme } = useTheme();
  const router = useRouter();
  console.log("Theme:", theme);
  return (
    <>
      <Header />
      <main>
        <Box
          h="81vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={8}
          bg={theme === "light" ? "#fff" : "#333"}
        >
          <HStack spacing={16} alignItems="center" maxW="1200px" mt={20}>
            <VStack align="start" spacing={12}>
              <Heading as="h1" size="3xl" fontWeight="bold">
                Stay Organized <br />
                Stay Creative
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Join millions of people to capture ideas, organize life, and do
                something creative every day.
              </Text>
              <HStack spacing={4}>
                <Button
                  colorScheme="blue"
                  size="lg"
                  onClick={() => router.push("/sign-up")}
                >
                  Get Started - It&apos;s Free
                </Button>
              </HStack>
            </VStack>

            <Image
              src="/header.png"
              alt="To-Do App Illustration"
              maxW="400px"
              objectFit="contain"
            />
          </HStack>
        </Box>
      </main>
      <Footer />
    </>
  );
}
