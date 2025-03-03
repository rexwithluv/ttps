import "bootstrap/dist/css/bootstrap.min.css";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es-ES">
      <body>{children}</body>
    </html>
  );
}
