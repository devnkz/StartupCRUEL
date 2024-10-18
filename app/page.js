import Image from "next/image";

export default function Home() {
  return (
    <div className="m-0 p-0 box-border">
      <div className="h-20 w-full bg-slate-900 flex justify-around flex-row p-4 items-center">
        <h1 className="font-bold text-2xl italic">Cruelty</h1>
        <ul className="flex justify-between gap-6">
          <li className="font-semibold hover:text-green-500 cursor-pointer">Inicio</li>
          <li className="font-semibold hover:text-green-500 cursor-pointer">Drops</li>
          <li className="font-semibold hover:text-green-500 cursor-pointer">Sobre</li>
          <li className="font-semibold hover:text-green-500 cursor-pointer">Contato</li>
        </ul>
      </div>
    </div>
  );
}
