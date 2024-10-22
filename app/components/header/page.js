import { User, ShoppingBag, X } from 'react-feather';
import Image from 'next/image';
import { Cinzel, Montserrat } from "next/font/google";
import { Form } from '../form/page';
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer"
import { CardProdutoInCart } from './headerComponents/cardProdutoInCart/page';
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs"
import { DivDescont } from './headerComponents/cardProdutoInCart/divDescont/page';
import Link from 'next/link';


const FontCinzel = Cinzel({
    weight: ['400'],
    subsets: ['latin'],
})

const FontMontserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

export function Header({idHome, idDrop , idFooter, LinkNext, LinkNextVoltar}) {
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
                <div className="flex flex-row items-center gap-10">
                    <ul className="flex justify-between gap-10">
                        <button className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">
                            <Link href={LinkNextVoltar}>Início</Link>
                        </button>
                        <button className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">
                            <Link href={LinkNextVoltar}>Drop</Link>
                        </button>
                        <button className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100"><Link href={LinkNext}>Sobre</Link></button>
                        <button className="text-white hover:text-green-600 cursor-pointer hover:scale-125 transition duration-100">
                            <Link href={LinkNextVoltar}>Contato</Link>
                        </button>
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
                                                            <X size={24} color="white" /></button>
                                                    </DrawerClose>
                                                </div>
                                                <div className='flex flex-row items-center'>
                                                    <div className='w-[70%]'>
                                                        <CardProdutoInCart NomeProduto={"Camiseta Plague War"} valorProduto={"165,00"} src={"/camisa.png"} />
                                                        <CardProdutoInCart NomeProduto={"Toxic Denim Double Knee"} valorProduto={"389,00"} src={"/calca.png"} />
                                                        <CardProdutoInCart NomeProduto={"Shape Faith White"} valorProduto={"299,00"} src={"/shape1.png"} />
                                                        <CardProdutoInCart NomeProduto={"Shape Faith Black"} valorProduto={"299,00"} src={"/shape2.png"} />
                                                    </div>
                                                    <div className={`bg-zinc-800 rounded-lg ${FontMontserrat.className} p-4 text-white`}>
                                                        <div>
                                                            <h1>Frete</h1>
                                                            <Tabs defaultValue='free'>
                                                                <TabsList className="bg-zinc-800 text-white justify-between gap-2 w-full">
                                                                    <TabsTrigger className="w-2/4" value="free">Free</TabsTrigger>
                                                                    <TabsTrigger className="w-2/4" value="express">Express: R$ 11,99</TabsTrigger>
                                                                </TabsList>
                                                                <TabsContent value='free'>
                                                                    <DivDescont numberDescont={10} valorDesconto={37} valorTotal={387}
                                                                    valorSubTotal={287}/>
                                                                </TabsContent>
                                                                <TabsContent value='express'>
                                                                    <DivDescont numberDescont={10} valorDesconto={37} valorTotal={387}
                                                                    valorSubTotal={287}/>
                                                                </TabsContent>
                                                            </Tabs>
                                                            <div className='flex flex-col items-center gap-6 mt-8'>
                                                                <button className='p-2 bg-white text-black rounded-lg w-2/4
                                                                hover:bg-black hover:text-white trasition duration-150'>Pagar</button>
                                                                <DrawerClose asChild>
                                                                    <button className={`text-white bg-zinc-800 p-2 rounded-lg flex flex-row gap-1 ${FontMontserrat.className}
                                                                        hover:scale-110 trasition duration-100`} variant="outline">
                                                                        Continuar comprando </button>
                                                                </DrawerClose>
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