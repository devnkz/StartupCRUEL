export function ButtonForm({text_button}) {
    return (
        <button className="p-3 mt-6 rounded-lg bg-zinc-900 font-bold hover:scale-110 hover:bg-zinc-600 transition duration-100">
            {text_button}
        </button>
    )
}