import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Montserrat } from "next/font/google";
import { TitleForm } from "./componetForm/titleForm/page";
import { InputForm } from "./componetForm/inputForm/page";
import { ButtonForm } from "./componetForm/buttonForm/page";

const FontMontserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
});

export function Form() {
  return (
    <div className={FontMontserrat.className}>
      <div className="w-full h-screen bg-transparent flex items-center justify-center">
        <Tabs defaultValue="account" className="w-[400px] border-green-700 border-2 flex items-center justify-center flex-col bg-black p-12 rounded-lg">
          <TabsList className="bg-zinc-800 text-white w-3/4 justify-between">
            <TabsTrigger className="w-2/4" value="account">Entrar</TabsTrigger>
            <TabsTrigger className="w-2/4" value="password">Criar</TabsTrigger>
          </TabsList>
          <TabsContent className="text-white flex flex-col gap-6 mt-12" value="account">
            <TitleForm Title={"Entre em sua conta"}/>
            <InputForm inputText={"Email"} type={"email"}/>
            <InputForm inputText={"Senha"} type={"passoword"}/>
            <ButtonForm text_button={"Entrar"}/>
          </TabsContent>
          <TabsContent className="text-white flex flex-col gap-6" value="password">
          <TitleForm Title={"Crie sua conta"}/>
          <InputForm inputText={"Nome"} type={"text"}/>
            <InputForm inputText={"Email"} type={"email"}/>
            <InputForm inputText={"Senha"} type={"passoword"}/>
            <ButtonForm text_button={"Criar"}/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
