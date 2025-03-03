"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="es-ES">
      <body className="main-container">
        <Navbar />

        <main className="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
