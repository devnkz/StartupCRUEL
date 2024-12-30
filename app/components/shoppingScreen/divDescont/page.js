
export function DivDescont({numberDescont, valorTotal, valorSubTotal}) {
    return (
        <>
            <h1 className='mt-4'>Insira um cupom de desconto</h1>
            <div className='w-full p-2 rounded-lg bg-black text-white justify-between flex'>
                <input className='bg-black w-full placeholder:bg-black border-none' placeholder='cupom...' />
                <button>Aplicar</button>
            </div>
            <p>Desconto de {numberDescont}% aplicado</p>
            <div className='mt-8'>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <h1>Subtotal</h1>
                    <h3>R$ {valorSubTotal}</h3>
                </div>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <h1>Desconto</h1>
                    <h3>{`${numberDescont}%`}</h3>
                </div>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <h1 className=' text-xl text-center'>Total</h1>
                    <h3>R$ {valorTotal}</h3>
                </div>
            </div>
        </>
    )
}