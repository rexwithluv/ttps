import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/images/ttps-main.png"
        alt="Main image of the store"
        layout="responsive"
        height={1820}
        width={1080}
      />
    </>
  );
}
