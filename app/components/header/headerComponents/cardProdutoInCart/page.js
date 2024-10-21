import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Plus, Minus, Trash2} from 'react-feather';
import Image from "next/image";
import { Cinzel, Montserrat } from "next/font/google";


const FontCinzel = Cinzel({
    weight: ['400'],
    subsets: ['latin'],
})

const FontMontserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

export function CardProdutoInCart({NomeProduto, valorProduto, src}) {
    return (
        <div className='mt-12 flex flex-row gap-6 w-[30%]'>
            <Image
                className='object-contain rounded-lg'
                src={src}
                height={150}
                width={150}
            />
            <div className='justify-between flex flex-col'>
                <h1 className={`text-white text-xl ${FontCinzel.className}`}>{NomeProduto}</h1>
                <div className={`text-white ${FontMontserrat.className}`}>
                    <h1>R$ {valorProduto}</h1>
                    <h2 className='text-green-600'>Em estoque</h2>
                </div>
                <Select>
                    <SelectTrigger className="w-full bg-zinc-700 text-white">
                        <SelectValue placeholder="Escolha o tamanho" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="P">P</SelectItem>
                        <SelectItem value="M">M</SelectItem>
                        <SelectItem value="G">G</SelectItem>
                        <SelectItem value="GG">GG</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex items-end gap-6'>
                <div className='flex flex-row justify-between items-end w-24 bg-zinc-800 p-2 rounded-lg'>
                    <Minus size={24} color='white' className='cursor-pointer' />
                    <h1 className='text-white'>2</h1>
                    <Plus size={24} color='white' className='cursor-pointer' />
                </div>
            </div>
            <div className='justify-between flex flex-col'>
                <h1 className={`text-white ${FontCinzel.className}`}>R$ 325,00</h1>
                <button className='flex items-center p-2 bg-red-600 text-white 
                    rounded-lg hover:bg-red-900 transition duration-100'>
                    <Trash2 size={24} color='white' />
                    <h1>Delete</h1>
                </button>
            </div>
        </div>
    )
}