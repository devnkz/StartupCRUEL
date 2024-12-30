import { User, ShoppingBag } from 'react-feather';
import Image from 'next/image';
import { Cinzel, Montserrat } from "next/font/google";
import { Form } from '../form/page';
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import Link from 'next/link';
import ShoppingScreen from '../shoppingScreen/page';


const FontCinzel = Cinzel({
    weight: ['400'],
    subsets: ['latin'],
})

const FontMontserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

export function Header({ idHome, LinkNext, LinkNextVoltar }) {
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
                    <h1 className="text-3xl text-white cursor-default hover:text-green-600 transition duration-100"><a href={idHome}>Cruelty</a></h1>
                </div>
            </div>
            <div className={FontMontserrat.className}>
                <div className="flex flex-row items-center gap-6">
                    <ul className="flex justify-between gap-10">
                        <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">
                            <Link href={LinkNextVoltar}>Início</Link>
                        </li>
                        <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">
                            <Link href={LinkNextVoltar}>Drop</Link>
                        </li>
                        <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">
                            <Link href={LinkNext}>Sobre</Link></li>
                        <li className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">
                            <Link href={LinkNextVoltar}>Contato</Link>
                        </li>
                    </ul>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="p-2 bg-transparent rounded-lg hover:bg-green-700 transition duration-100 cursor-pointer">
                                <User size={24} color="white" />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="w-full bg-transparent border-none">
                            <Form />
                        </DialogContent>
                    </Dialog>
                    <Drawer>
                        <DrawerTrigger>
                            <div className="p-2 bg-transparent rounded-lg hover:bg-green-700 transition duration-100 cursor-pointer">
                                <ShoppingBag size={24} color="white" />
                            </div>
                        </DrawerTrigger>
                        <DrawerContent className="border-none bg-zinc-800">
                           <ShoppingScreen/>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </nav >
    )
}