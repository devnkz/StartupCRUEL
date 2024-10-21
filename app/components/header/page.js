import { User, ShoppingBag, X } from 'react-feather';
import Image from 'next/image';
import { Cinzel, Montserrat } from "next/font/google";
import { Form } from '../form/page';
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"
import { CardProdutoInCart } from './headerComponents/cardProdutoInCart/page';
import { TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs"


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
                                    <div className='h-screen bg-zinc-900 w-full p-4'>
                                        <div className='flex flex-row gap-12 h-full justify-center'>
                                            <div className='bg-black w-[70%] rounded-lg p-6 '>
                                                <div className='flex flex-row w-full justify-between items-center'>
                                                    <h1 className='text-white text-xl'>Carrinho</h1>
                                                    <h1 className={`text-green-600 text-6xl ${FontCinzel.className} text-center`}>Cruelty</h1>
                                                    <DrawerClose asChild>
                                                        <button className={`text-white bg-zinc-800 p-2 rounded-lg flex flex-row gap-1 ${FontMontserrat.className}
                                                        hover:scale-110 trasition duration-100`} variant="outline">
                                                            Fechar<X size={24} color="white" /></button>
                                                    </DrawerClose>
                                                </div>
                                                <div className='flex flex-row items-center'>
                                                    <div className='w-[60%]'>
                                                        <CardProdutoInCart NomeProduto={"Camiseta Plague War"} valorProduto={"165,00"} src={"/camisa.png"} />
                                                        <CardProdutoInCart NomeProduto={"Toxic Denim Double Knee"} valorProduto={"389,00"} src={"/calca.png"} />
                                                        <CardProdutoInCart NomeProduto={"Shape Faith White"} valorProduto={"299,00"} src={"/shape1.png"} />
                                                        <CardProdutoInCart NomeProduto={"Shape Faith Black"} valorProduto={"299,00"} src={"/shape2.png"} />
                                                    </div>
                                                    <div className={`bg-zinc-800 w-[50%] rounded-lg ${FontMontserrat.className} p-4 text-white`}>
                                                        <div>
                                                            <h1>Frete</h1>
                                                            <Tabs defaultValue='account'>
                                                                <TabsList className="bg-zinc-800 text-white justify-between gap-2 w-full">
                                                                    <TabsTrigger className="w-2/4" value="account">Free</TabsTrigger>
                                                                    <TabsTrigger className="w-2/4" value="password">Express: R$ 11,99</TabsTrigger>
                                                                </TabsList>
                                                            </Tabs>
                                                            <h1 className='mt-4'>Insira um cupom de desconto</h1>
                                                            <div className='w-[50%] p-2 rounded-lg bg-black text-white justify-between flex'>
                                                                <input className='bg-black w-full placeholder:bg-black border-none' placeholder='cupom...' />
                                                                <button>Aplicar</button>
                                                            </div>
                                                            <p>Desconto de 15% aplicado</p>
                                                            <div className='w-full flex flex-row justify-between mt-4'>
                                                                <h1>Subtotal</h1>
                                                                <h3>R$ 569,89</h3>
                                                            </div>
                                                            <div className='w-full flex flex-row justify-between mt-4'>
                                                                <h1>Disconto</h1>
                                                                <h3>(15%) -R$ 84,00</h3>
                                                            </div>
                                                            <div className='w-full flex flex-row justify-between mt-4'>
                                                                <h1 className=' text-xl text-center'>Total</h1>
                                                                <h3>R$ 484,00</h3>
                                                            </div>
                                                            <div className='flex flex-col items-center gap-6'>
                                                                <button className='p-2 bg-white text-black rounded-lg w-2/4
                                                                hover:bg-black hover:text-white trasition duration-150'>Pagar</button>
                                                                <button className='p-2 bg-white text-black rounded-lg w-2/4
                                                                hover:bg-black hover:text-white trasition duration-150'>Continuar comprando</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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