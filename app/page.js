import Image from "next/image";
import { Cinzel, Montserrat } from "next/font/google";
import { User, ShoppingBag } from 'react-feather';


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
      <nav className="w-full bg-black flex justify-center flex-row p-4 items-center fixed gap-36 z-10">
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
      <div className="h-56 w-full flex items-end justify-center gap-4">
        <div className={FontCinzel.className}>
          <h1 className="text-5xl text-green-600">Seja<span className="text-white"> Cruel</span></h1>
        </div>
      </div>
      <div className="mt-24 w-full flex flex-row items-center justify-center gap-12">
        <Image
          className="object-contain rounded-lg hover:scale-110 transition duration-120"
          src="/img1.png"
          width={400}
          height={400}
          alt="LOGO"
        />
        <Image
          className="object-contain rounded-lg hover:scale-110 transition duration-120"
          src="/img2.png"
          width={400}
          height={400}
          alt="LOGO"
        />
        <Image
          className="object-contain rounded-lg hover:scale-110 transition duration-120"
          src="/img3.png"
          width={400}
          height={400}
          alt="LOGO"
        />
        <Image
          className="object-contain rounded-lg hover:scale-110 transition duration-120"
          src="/img4.png"
          width={400}
          height={400}
          alt="LOGO"
        />
      </div>

      <div className="mt-24 w-full flex flex-row items-center justify-evenly mb-5">
        <div>
          <Image
            className="object-contain rounded-lg"
            src="/camisa.png"
            width={400}
            height={400}
            alt="LOGO"
          />
          <div className="flex flex-row justify-between items-center mt-4">
            <div className={FontCinzel.className}>
              <h1 className="text-xl cursor-default hover:text-green-700 transition duration-100">Camiseta Plague War</h1>
              <h2>R$ 165,00</h2>
            </div>
            <div className="bg-transparent p-2 rounded-lg hover:bg-green-700 hover:scale-110 cursor-pointer transition duration-100"><ShoppingBag size={36} color="white" /></div>
          </div>
        </div>
        <div>
          <Image
            className="object-contain rounded-lg"
            src="/calca.png"
            width={400}
            height={400}
            alt="LOGO"
          />
          <div className="flex flex-row justify-between items-center mt-4">
            <div className={FontCinzel.className}>
              <h1 className="text-xl cursor-default hover:text-green-700 transition duration-100">Toxic Denim Double Knee</h1>
              <h2>R$ 389,00</h2>
            </div>
            <div className="bg-transparent p-2 rounded-lg hover:bg-green-700 hover:scale-110 cursor-pointer transition duration-100"><ShoppingBag size={36} color="white" /></div>
          </div>
        </div>
      </div>

      <div className="mt-24 w-full flex flex-row items-center justify-evenly mb-5">
        <div>
          <Image
            className="object-contain rounded-lg"
            src="/shape1.png"
            width={400}
            height={400}
            alt="LOGO"
          />
          <div className="flex flex-row justify-between items-center mt-4">
            <div className={FontCinzel.className}>
              <h1 className="text-xl cursor-default hover:text-green-700 transition duration-100">Shape Faith White</h1>
              <h2>R$ 299,00</h2>
            </div>
            <div className="bg-transparent p-2 rounded-lg hover:bg-green-700 hover:scale-110 cursor-pointer transition duration-100"><ShoppingBag size={36} color="white" /></div>
          </div>
        </div>
        <div>
          <Image
            className="object-contain rounded-lg"
            src="/shape2.png"
            width={400}
            height={400}
            alt="LOGO"
          />
          <div className="flex flex-row justify-between items-center mt-4">
            <div className={FontCinzel.className}>
              <h1 className="text-xl cursor-default hover:text-green-700 transition duration-100">Shape Faith Black</h1>
              <h2>R$ 299,00</h2>
            </div>
            <div className="bg-transparent p-2 rounded-lg hover:bg-green-700 hover:scale-110 cursor-pointer transition duration-100"><ShoppingBag size={36} color="white" /></div>
          </div>
        </div>
      </div>

      <div className="bg-black w-full mt-12 p-4 flex flex-col items-center">
        <div className="flex flex-row items-center justify-center gap-12">
          <div className={FontCinzel.className}>
            <h1 className="text-4xl cursor-default">Cruelty</h1>
          </div>
          <div className={FontMontserrat.className}>
            <h1 className="mt-4">Seja Cruel!</h1>
            <h1 className="mt-4">Precisa de ajuda ?</h1>
            <input className="mt-4 border-2 rounded-lg bg-black p-2 placeholder:bg-black placeholder:border-none" placeholder="Fale conosco..."></input>
            <h3 className="mt-4">atendimento@cruelty.com.br</h3>
          </div>
        </div>
        <div className={FontMontserrat.className}>
          <h1 className="text-green-600 mt-4">Copyright Cruelty - 53956776000146 - 2024. Todos os direitos reservados.</h1>
        </div>
      </div>
    </>
  );
}
