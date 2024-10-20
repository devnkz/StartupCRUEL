import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Montserrat } from "next/font/google";
import { ComponentForm } from "./componetForm/page";

const FontMontserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
});

export function Form() {
  return (
    <div className={FontMontserrat.className}>
      <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
        <Tabs defaultValue="account" className="w-[400px] flex items-center justify-center flex-col bg-black p-12 rounded-lg">
          <TabsList className="bg-zinc-800 text-white w-3/4 justify-between">
            <TabsTrigger className="w-2/4" value="account">Entrar</TabsTrigger>
            <TabsTrigger className="w-2/4" value="password">Criar</TabsTrigger>
          </TabsList>
          <TabsContent className="text-white flex flex-col gap-6 mt-12" value="account">
            <ComponentForm one_input={"Email"} second_input={"Senha"} Title={"Entre em sua conta"} text_button={"Entrar"}/>
          </TabsContent>
          <TabsContent className="text-white flex flex-col gap-6" value="password">
            <ComponentForm one_input={"Nome"} second_input={"Email"} Title={"Crie sua conta"} text_button={"Criar"}/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
