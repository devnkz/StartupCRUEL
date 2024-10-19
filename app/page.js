import Image from "next/image";
import { Cinzel, Montserrat } from "next/font/google"

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
      <nav className="h-20 w-full bg-black flex justify-around flex-row p-4 items-center fixed">
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
          <ul className="flex justify-between gap-12">
            <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Inicio</li>
            <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Drops</li>
            <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Sobre</li>
            <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Contato</li>
          </ul>
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
