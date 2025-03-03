import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-secondary vh-81 d-flex justify-content-center align-items-center">
      <Image
        src={"/images/404.png"}
        width={915}
        height={506}
        alt="Error 404: Page not found"
      />
    </div>
  );
}
