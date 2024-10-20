import { Cinzel, Montserrat } from "next/font/google";

const FontCinzel = Cinzel({
    weight: ['400'],
    subsets: ['latin'],
  })

  const FontMontserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
  })

export function Footer(){
    return(
        <div className="bg-black w-full mt-12 p-4 flex flex-col items-center">
        <div className="flex flex-row items-center justify-center gap-12">
          <div className={FontCinzel.className}>
            <h1 className="text-4xl cursor-default text-white">Cruelty</h1>
          </div>
          <div className={FontMontserrat.className}>
            <h1 className="mt-4 text-white">Seja Cruel!</h1>
            <h1 className="mt-4 text-white">Precisa de ajuda ?</h1>
            <input className="mt-4 text-white border-2 rounded-lg bg-black p-2 placeholder:bg-black placeholder:border-none" placeholder="Fale conosco..."></input>
            <h3 className="mt-4 text-white">atendimento@cruelty.com.br</h3>
          </div>
        </div>
        <div className={FontMontserrat.className}>
          <h1 className="text-green-600 mt-4">Copyright Cruelty - 53956776000146 - 2024. Todos os direitos reservados.</h1>
        </div>
      </div>
    )
}