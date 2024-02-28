import React from "react";
import { Inter } from "next/font/google"; // Import the Inter font
import "./globals.css"; // Import global styles
import { AuthContextProvider } from "../context/AuthContext";

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter font

export const metadata = {
  title: "Boba Thoughts",
  description: "Made With Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          type="text/javascript"
        ></script>
      </head>
      <body className={inter.className}>
        
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
