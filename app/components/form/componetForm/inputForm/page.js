export function InputForm({inputText, type}) {
    return (
        <div className="w-full">
            <h1 className="font-bold text-base">{inputText}</h1>
            <input type={type} className="p-2 rounded-lg bg-zinc-900 w-full"/>
        </div>
    )
}