import { Cinzel } from "next/font/google";
import { Header } from "./components/header/page";
import { Images } from "./components/img/page";
import { CardProduto } from "./components/cardProdutos/page";
import { Footer } from "./components/footer/page";


const FontCinzel = Cinzel({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Header/>
      <article className="h-56 w-full flex items-end justify-center gap-4">
        <div className={FontCinzel.className}>
          <h1 className="text-5xl text-green-600">Seja<span className="text-white"> Cruel</span></h1>
        </div>
      </article>
      <section className="mt-24 w-full flex flex-row items-center justify-center gap-12">
        <Images src={"/img1.png"}/>
        <Images src={"/img2.png"}/>
        <Images src={"/img3.png"}/>
        <Images src={"/img4.png"}/>
      </section>
   
      <section className="mt-24 w-full flex flex-row items-center justify-evenly mb-5">
        <CardProduto src={"/camisa.png"} valor_produto={"165,00"} nome_produto={"Camisa Plague War"}/>
        <CardProduto src={"/calca.png"} valor_produto={"389,00"} nome_produto={"Camisa Plague War"}/>
        <CardProduto src={"/shape1.png"} valor_produto={"299,00"} nome_produto={"Shape Faith White"}/>
        <CardProduto src={"/shape2.png"} valor_produto={"299,00"} nome_produto={"Shape Faith black"}/>
      </section>

      <Footer/>
    </>
  );
}
