interface CampoTextoProps {
    label: string;
    placeholder: string;
    valor: string;
    obrigatorio?: boolean;
    tipo?: string;
    aoAlterado: (valor: string) => void;
}

const CampoTexto = ({ label, placeholder, valor, obrigatorio = false, tipo = 'text', aoAlterado }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="my-6">
            <label className='block mb-2 text-2xl'>
                {label}
            </label>
            <input 
                className='bg-white shadow-[10px_10px_30px_rgba(0,0,0,0.06)] w-full border-none text-2xl p-6 box-border'
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                type={tipo ||'text'}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto
