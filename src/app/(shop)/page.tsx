import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <>
      <h1>Holis</h1>
      <h1 className={`${titleFont.className} font-bold`}>Hola mundo</h1>
    </>
  );
}
