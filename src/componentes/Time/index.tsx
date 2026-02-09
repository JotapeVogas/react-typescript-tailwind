import Colaborador from '../Colaborador'
import { IColaborador } from '../../shared/interfaces'

interface TimeProps {
    nome: string;
    corPrimaria: string;
    corSecundaria: string;
    colaboradores: IColaborador[];
}

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }: TimeProps) => {

    return (
        colaboradores.length > 0 ? (
            <section 
                className="text-center p-8" 
                style={{ backgroundColor: corSecundaria }}
            >
                <h3 
                    className="text-[32px] border-b-4 inline-block pb-2" 
                    style={{ borderColor: corPrimaria }}
                >
                    {nome}
                </h3>
                <div className="flex justify-around mt-8 flex-wrap">
                    {colaboradores.map(colaborador => (
                        <Colaborador 
                            corDeFundo={corPrimaria}
                            key={colaborador.nome} 
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            email={colaborador.email}
                            data_admissao={colaborador.data_admissao}
                            imagem={colaborador.imagem}
                        />
                    ))}
                </div>
            </section>
        ) : null
    )
}

export default Time
