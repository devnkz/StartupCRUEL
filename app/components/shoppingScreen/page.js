import { X } from 'react-feather';
import { CardProdutoInCart } from './cardProdutoInCart/page';
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs"
import { DivDescont } from './divDescont/page';
import { Cinzel, Montserrat } from "next/font/google";
import { DrawerClose } from "@/components/ui/drawer"


const FontCinzel = Cinzel({
    weight: ['400'],
    subsets: ['latin'],
})

const FontMontserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

export default function ShoppingScreen() {
    return (
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
                                        <DivDescont numberDescont={0} valorTotal={387}
                                            valorSubTotal={387} />
                                    </TabsContent>
                                    <TabsContent value='express'>
                                        <DivDescont numberDescont={10} valorTotal={357}
                                            valorSubTotal={387} />
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
    )
}
