interface ListaSuspensaProps {
    label: string;
    obrigatorio?: boolean;
    valor: string;
    itens: string[];
    aoAlterado: (valor: string) => void;
}

const ListaSuspensa = ({ label, obrigatorio = false, valor, itens, aoAlterado }: ListaSuspensaProps) => {
    
    return (
        <div className='my-6'>
            <label className='block mb-2 text-2xl'>
                {label}
            </label>
            <select 
                className='bg-white-50 text-2xl p-6 box-border border-none w-full shadow-[10px 10px 30px rgba(0, 0, 0, 0.06)]'
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                value={valor}
            >
                <option value="">Selecione um time</option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa
