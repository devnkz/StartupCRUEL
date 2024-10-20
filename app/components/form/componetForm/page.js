

export function ComponentForm({Title, one_input, second_input, text_button}) {
    return (
        <>
            <div>
                <h1 className="text-2xl font-bold">{Title}</h1>
                <p className="text-md text-zinc-600">Preencha as informações e conecte a sua conta <span className="text-green-700 font-bold">CRUEL</span></p>
            </div>
            <div className="w-full">
                <h1 className="font-bold text-base">{one_input}</h1>
                <input className="p-2 rounded-lg bg-zinc-900 w-full" defaultValue={"nyckolas@gmail.com"} />
            </div>
            <div>
                <h1 className="font-bold text-base">{second_input}</h1>
                <input className="p-2 rounded-lg bg-zinc-900 w-full" defaultValue={"@Senha@123"} />
            </div>
            <button className="p-3 mt-6 rounded-lg bg-zinc-900 font-bold hover:scale-110 hover:bg-zinc-600 transition duration-100">
                {text_button}
            </button>
        </>
    )
}