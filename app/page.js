import Image from "next/image";
import { Cinzel, Montserrat } from "next/font/google";
import { Search, User, ShoppingBag } from 'react-feather';


const FontCinzel = Cinzel({
  weight: ['400'],
  subsets: ['latin'],
})

const FontMontserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
})
export default function Home() {
  return (
    <>
      <nav className="w-full bg-black flex justify-center flex-row p-4 items-center fixed gap-36">
        <div className="flex flex-row items-center justify-center gap-4">
          <Image
            className="object-contain"
            src="/logoCRUEL.jpg"
            width={50}
            height={50}
            alt="LOGO"
          />
          <div className={FontCinzel.className}>
            <h1 className="text-3xl cursor-default hover:text-green-600 transition duration-100">Cruelty</h1>
          </div>
        </div>
        <div className={FontMontserrat.className}>
          <div className="flex flex-row gap-10">
            <ul className="flex justify-between gap-10">
              <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Inicio</li>
              <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Drops</li>
              <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Sobre</li>
              <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Contato</li>
            </ul>
            <div className="flex flex-row gap-4">
              <div className="p-2 bg-transparent rounded-lg hover:bg-green-600 transition duration-100">
                <User size={24} color="white" />
              </div>
              <div className="p-2 bg-transparent rounded-lg hover:bg-green-600 transition duration-100">
                <ShoppingBag size={24} color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-row p-3 rounded-full bg-gray-500 gap-2">
          <Search size={24} color="white" />
          <input className="bg-transparent border-none w-full" placeholder="Pesquisar"></input>
        </div>
      </nav>
      <div className="h-96 w-full flex items-center justify-center gap-4">
        <div className={FontCinzel.className}>
          <h1 className="text-5xl text-green-600">DROP<span className="text-white"> CRUEL</span></h1>
        </div>
      </div>
    </>
  );
}
