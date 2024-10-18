import Image from "next/image";

export default function Home() {
  return (
    <div className="m-0 p-0 box-border">
      <nav className="h-20 w-full bg-slate-900 flex justify-around flex-row p-4 items-center">
        <h1 className="font-bold text-2xl italic">Cruelty</h1>
        <ul className="flex justify-between gap-12">
          <li className="font-semibold hover:text-green-500 hover:scale-150 transition duration-200 cursor-pointer">Inicio</li>
          <li className="font-semibold hover:text-green-500 hover:scale-150 transition duration-200 cursor-pointer">Drops</li>
          <li className="font-semibold hover:text-green-500 hover:scale-150 transition duration-200 cursor-pointer">Sobre</li>
          <li className="font-semibold hover:text-green-500 hover:scale-150 transition duration-200 cursor-pointer">Contato</li>
        </ul>
      </nav>

      <div className="mt-24 p-2 w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl"><span className="text-green-700 text-8xl">DROP</span> ATUAL</h1>
        <div className="flex mt-24 w-3/4 h-auto flex-row justify-between">
          <div className="h-64 rounded-lg bg-slate-500 w-1/4 hover:scale-105 transition duration-100">Card</div>
          <div className="h-64 rounded-lg bg-slate-500 w-1/4 hover:scale-105 transition duration-100">Card</div>
          <div className="h-64 rounded-lg bg-slate-500 w-1/4 hover:scale-105 transition duration-100">Card</div>
        </div>
      </div>
      <div className="mt-24 p-2 w-full flex justify-center items-center flex-col">
        <div className="flex mt-24 w-3/4 h-auto flex-row justify-between">
          <div className="h-64 rounded-lg bg-slate-500 w-1/4 hover:scale-105 transition duration-100 ">Card</div>
          <div className="h-64 rounded-lg bg-slate-500 w-1/4 hover:scale-105 transition duration-100 ">Card</div>
          <div className="h-64 rounded-lg bg-slate-500 w-1/4 hover:scale-105 transition duration-100 ">Card</div>
        </div>
      </div>
    </div>
  );
}
