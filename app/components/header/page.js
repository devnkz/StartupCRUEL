import { User, ShoppingBag, X } from 'react-feather';
import Image from 'next/image';
import { Cinzel, Montserrat } from "next/font/google";
import { Form } from '../form/page';
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"

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
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="text-white" variant="outline">
                                        <User size={24} color="white" />
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="w-full bg-transparent border-none">
                                    <Form />
                                </DialogContent>
                            </Dialog>
                        </div>
                        <div className="p-2 bg-transparent rounded-lg hover:bg-green-700 transition duration-100 cursor-pointer">
                            <Drawer>
                                <DrawerTrigger className="text-white">
                                    <ShoppingBag size={24} color="white" />
                                </DrawerTrigger>
                                <DrawerContent className="border-none bg-zinc-800">
                                    <div className='h-[700px] bg-zinc-900 w-full p-4'>
                                        <DrawerClose asChild>
                                            <button className={`text-white bg-black p-2 rounded-lg flex flex-row gap-1 ${FontMontserrat.className}
                                            hover:scale-110 trasition duration-100`} variant="outline">
                                            Fechar<X size={24} color="white"/></button>
                                        </DrawerClose>
                                        <h1 className={`text-green-700 text-6xl ${FontCinzel.className} text-center`}>Cruelty</h1>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}