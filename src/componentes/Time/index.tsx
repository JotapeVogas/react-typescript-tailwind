import Colaborador from '../Colaborador'
import { IColaborador } from '../../shared/interfaces'

interface TimeProps {
    nome: string;
    corPrimaria: string;
    corSecundaria: string;
    colaboradores: IColaborador[];
    aoDeletar: (id:number) => void;
}

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, aoDeletar }: TimeProps) => {

    return (
        colaboradores.length > 0 ? (
            <section 
                className="text-center p-8" 
                style={{ backgroundColor: corSecundaria }}
            >
                <h3 
                    className={`text-[32px] text-[${corPrimaria}] border-b-4 inline-block pb-2`} 
                    style={{ borderColor: corPrimaria, 
                             color: corPrimaria
                }}
                >
                    {nome} ({colaboradores.length} {colaboradores.length === 1 ? 'colaborador' : 'colaboradores'})
                </h3>
                <div className="flex justify-around mt-8 flex-wrap">
                    {colaboradores.map(colaborador => (
                        <Colaborador 
                            corDeFundo={corPrimaria}
                            id={colaborador.id}
                            key={colaborador.id}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            email={colaborador.email}
                            data_admissao={colaborador.data_admissao}
                            imagem={colaborador.imagem}
                            aoDeletar={aoDeletar}
                        />
                    ))}
                </div>
            </section>
        ) : null
    )
}

export default Time
