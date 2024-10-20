import {User, ShoppingBag} from 'react-feather';
import Image from 'next/image';
import { Cinzel, Montserrat } from "next/font/google";

const FontCinzel = Cinzel({
    weight: ['400'],
    subsets: ['latin'],
  })
  
  const FontMontserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
  })

export function Header() {
    return (
        <nav className="w-full bg-black flex justify-center flex-row p-4 items-center fixed gap-36 z-10">
            <div className="flex flex-row items-center justify-center gap-4">
                <Image
                    className="object-contain"
                    src="/logoCRUEL.jpg"
                    width={50}
                    height={50}
                />
                <div className={FontCinzel.className}>
                    <h1 className="text-3xl text-white cursor-default hover:text-green-600 transition duration-100">Cruelty</h1>
                </div>
            </div>
            <div className={FontMontserrat.className}>
                <div className="flex flex-row items-center gap-10">
                    <ul className="flex justify-between gap-10">
                        <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Inicio</li>
                        <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Drop</li>
                        <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Sobre</li>
                        <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">Contato</li>
                    </ul>
                    <div className="flex flex-row gap-4">
                        <div className="p-2 bg-transparent rounded-lg hover:bg-green-700 transition duration-100 cursor-pointer">
                            <User size={24} color="white" />
                        </div>
                        <div className="p-2 bg-transparent rounded-lg hover:bg-green-700 transition duration-100 cursor-pointer">
                            <ShoppingBag size={24} color="white" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}