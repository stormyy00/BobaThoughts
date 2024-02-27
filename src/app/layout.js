import React from "react";
import { Inter } from "next/font/google"; // Import the Inter font
import "./globals.css"; // Import global styles

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter font

export const metadata = {
  title: "Boba Thoughts",
  description: "Made with Love",
};

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Gallery</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
        <li className="nav-item"><a href="#">Feedback</a></li>
      </ul>
    </nav>
  );
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
        <NavigationBar /> {/* Include the NavigationBar component */}
        {children}
      </body>
    </html>
  );
}