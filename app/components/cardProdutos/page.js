import Image from "next/image"
import { Cinzel } from "next/font/google";
import { ShoppingBag } from 'react-feather';

const FontCinzel = Cinzel({
  weight: ['400'],
  subsets: ['latin'],
})

export function CardProduto({ src, valor_produto, nome_produto }) {
  return (
    <div>
      <Image
        className="object-contain rounded-lg"
        src={src}
        width={400}
        height={400}
        alt="LOGO"
      />
      <div className="flex flex-row justify-between items-center mt-4">
        <div className={FontCinzel.className}>
          <h1 className="text-xl  text-white cursor-default hover:text-green-700 transition duration-100">{nome_produto}</h1>
          <h2 className="text-white">R$ {valor_produto}</h2>
        </div>
        <div className="bg-transparent p-2 rounded-lg hover:bg-green-700 hover:scale-110 cursor-pointer transition duration-100">
          <ShoppingBag size={36} color="white" />
        </div>
      </div>
    </div>
  )
}