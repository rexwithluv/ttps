"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./globals.scss";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="es-ES">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
