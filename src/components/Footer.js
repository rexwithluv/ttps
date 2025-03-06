"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-dark text-white text-center pb-2 pt-3">
      <div className="container">
        <p>&copy; {currentYear} The Tortured Poets Store.</p>
        <Link href={"/politica-privacidad"} className="text-white">
          Política de privacidad
        </Link>
        &nbsp;|&nbsp;
        <Link href={"/terminos-uso"} className="text-white">
          Términos de uso
        </Link>
      </div>
    </footer>
  );
}
