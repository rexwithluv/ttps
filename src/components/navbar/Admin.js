import { LoginContext } from "@/contexts/LoginContext";
import Link from "next/link";
import { useContext } from "react";

export default function Admin() {
  const { isAdmin } = useContext(LoginContext);

  return (
    <>
      {isAdmin && (
        <li className="nav-item">
          <Link className="nav-link" href={"/admin"}>
            <i className="bi bi-shield-lock-fill" />
          </Link>
        </li>
      )}
    </>
  );
}
