import { useState } from 'react'
import Botao from '../BotaoCriarCard'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import { IColaborador } from '../../shared/interfaces'

interface FormularioProps {
    times: string[];
    aoColaboradorCadastrado: (colaborador: IColaborador) => void;
}

const Formulario = ({ times, aoColaboradorCadastrado }: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [email, setEmail] = useState('')
    const [data_admissao, setDataAdmissao] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        aoColaboradorCadastrado({  
            nome,
            cargo,
            imagem, 
            time,
            email,
            data_admissao
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setEmail('')
        setDataAdmissao('')
    }

    return (
        <section className="flex justify-center my-20">
            <form onSubmit={aoSalvar} className='bg-[#F2F2F2] rounded-[20px] p-[36px_64px] shadow-[8px_8px_16px_rgba(0,0,0,0.08)]'>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <CampoTexto
                    label="Email" 
                    placeholder="Digite o endereço de email"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto
                    label="Data de Admissão" 
                    placeholder="Digite a data de admissão"
                    valor={data_admissao}
                    aoAlterado={valor => setDataAdmissao(valor)}
                />
                <Botao> 
                    Criar Card 
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
