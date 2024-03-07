import React from "react";
import { Inter } from "next/font/google"; // Import the Inter font
import "./globals.css"; // Import global styles

const inter = Inter({ subsets: ["latin"] }); // Initialize Inter font

export const metadata = {
  title: "Boba Thoughts",
  description: "Made With Love",
};

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Gallery</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
        <li className="nav-item"><a href="#">Account</a></li>
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
        <style>{`
          .navbar {
            background-color: #333;
            padding: 15px 0;
          }

          .nav-list {
            list-style-type: none;
            margin: 0;
            padding: 0;
            text-align: center;
          }

          .nav-item {
            display: inline;
            margin-right: 20px;
          }

          .nav-item:last-child {
            margin-right: 0;
          }

          .nav-item a {
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            font-family: ${inter.family};
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <div id="google-map"></div> {/* Google Map container */}
        <NavigationBar /> {/* Include the NavigationBar component */}
        {children}
      </body>
    </html>
  );
}