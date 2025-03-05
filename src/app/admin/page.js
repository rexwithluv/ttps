import Link from "next/link";

export default function Admin() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-row vh-80 gap-5">
      <div className="bg-last px-4 py-5 border rounded-3">
        <Link href={"/admin/productos"} className="btn btn-primary mx-3 fs-3">
          <i className="bi bi-box-seam-fill me-2 fs-4" />
          Gestionar productos
        </Link>
        <Link href={"/admin/usuarios"} className="btn btn-primary mx-3 fs-3">
          <i className="bi bi-person-fill-gear me-2 fs-4" />
          Gestionar usuarios
        </Link>
      </div>
    </div>
  );
}
