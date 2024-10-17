"use client";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "../styles/theme";
import { ThemeProvider } from "@/context/themeContext";
import { AuthProvider } from "@/context/userAuthenticationContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
