import { Cinzel } from "next/font/google";
import { Header } from "./components/header/page";
import { Images } from "./components/img/page";
import { CardProduto } from "./components/cardProdutos/page";
import { Footer } from "./components/footer/page";
import { Sobre } from "./screen/sobre/page";


const FontCinzel = Cinzel({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div id="Home" className="bg-zinc-900">
      <Header LinkNextVoltar={"/page.js"} idHome={"#Home"} idDrop={"#Drop"} idFooter={"#Footer"} LinkNext={"/screen/sobre"}/>
      <article className="h-56 w-full flex items-end justify-center gap-4">
        <div className={FontCinzel.className}>
          <h1 className="text-5xl text-green-600">Seja<span className="text-white"> Cruel</span></h1>
        </div>
      </article>
      <section className="mt-24 w-full flex flex-row items-center justify-center gap-12">
        <Images src={"/img1.png"} />
        <Images src={"/img2.png"} />
        <Images src={"/img3.png"} />
        <Images src={"/img4.png"} />
      </section>
      <div className="w-full flex items-center justify-center">
        <section id="Drop" className="mt-24 w-7/12 flex flex-row items-center justify-evenly mb-5 flex-wrap gap-24">
          <CardProduto src={"/camisa.png"} valor_produto={"165,00"} nome_produto={"Camisa Plague War"} />
          <CardProduto src={"/calca.png"} valor_produto={"389,00"} nome_produto={"Toxic Denim Double Knee"} />
          <CardProduto src={"/shape1.png"} valor_produto={"299,00"} nome_produto={"Shape Faith White"} />
          <CardProduto src={"/shape2.png"} valor_produto={"299,00"} nome_produto={"Shape Faith black"} />
        </section>
      </div>
      <footer id="Footer">
        <Footer />
      </footer>
    </div>
  );
}
