"use client";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "../styles/theme";
import { ThemeProvider } from "@/context/themeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <ThemeProvider>{children}</ThemeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
