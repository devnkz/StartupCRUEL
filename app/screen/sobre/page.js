import { Footer } from "@/app/components/footer/page";
import { Header } from "@/app/components/header/page";
import { Cinzel, Montserrat } from "next/font/google";
import Image from "next/image";
const FontCinzel = Cinzel({
    weight: ['400'],
    subsets: ['latin'],
})

const FontMontserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
})

export default function Sobre() {
    return (
        <main className="h-screen w-full bg-zinc-900 flex flex-col">
            <Header LinkNextVoltar={"/"} idHome={"..."} idDrop={"..."} idFooter={"..."} LinkNext={"/screen/sobre"}/>
            <section className="flex h-screen items-center justify-center flex-col gap-12">
                <div className="flex flex-row gap-12">
                    <h1 className={`text-white text-5xl ${FontMontserrat.className}`}>
                        A EMPRESA <span className={`text-green-600  text-6xl ${FontCinzel.className}`}>Cruelty</span></h1>
                    <Image
                        className="object-contain rounded-2xl"
                        src="/logoCRUEL.jpg"
                        width={50}
                        height={50}
                    />
                </div>
                <article className={`text-white text-xl mt-4 text-justify ${FontMontserrat.className} w-2/4`}>
                    <p>
                        Criada em 2022, a Cruel se destacou por ser uma das marcas pioneiras a trazer a clássica calça jeans baggy de volta ao Brasil.
                        Além de toda a exclusividade das peças, a Cruel prima pela qualidade excepcional de seus produtos.
                        Cada peça  é cuidadosamente projetada e confeccionada para atender aos mais altos padrões de qualidade do mundo.
                        Nossa  matéria-prima é selecionada com rigor. Modelagem e acabamentos perfeitos, garantem um produto final que se
                        destaca não somente pela beleza, mas também pela sua resistência e durabilidade.
                        O mundo é Cruel!
                    </p>
                </article>
            </section>
            <footer>
            <Footer />
            </footer>
        </main>
    )
}