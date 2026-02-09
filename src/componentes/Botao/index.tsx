interface BotaoProps {
    children: React.ReactNode;
    tipo?: 'submit' | 'button' | 'reset';
    onClick?: () => void;
}

const Botao = ({ children, tipo = 'submit', onClick }: BotaoProps) => {
    return (
        <button 
            type={tipo} 
            className='bg-[#6278f7] rounded-[10px] font-bold text-lg px-8 py-8 border-none cursor-pointer text-white my-4 hover:bg-[#00d37f]'
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Botao