import { IoIosClose } from "react-icons/io";

interface ColaboradorProps {
  id: number;
  nome: string;
  imagem: string;
  cargo: string;
  email?: string;
  data_admissao?: string;
  corDeFundo: string;
  aoDeletar: (id: number) => void;
}

const styles = {
  container: "w-[280px]",
  cabecalho: "rounded-t-[10px] text-center flex flex-col items-end justify-center relative",
  imagem: "w-[100px] rounded-full h-[100px] w-[100px] relative mb-[-50px] block mx-auto",
  rodape: "bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.08)] rounded-b-[10px] pt-[90px] pb-10",
  nome: "text-[#6278F7] text-lg leading-[22px] font-bold mb-2 px-4 justify-center text-center gap-10",
  texto: "text-lg leading-[22px] text-[#212121] px-4 justify-center text-center gap-10",
  id: "text-lg text-[#fff] px-4 flex flex-col items-start absolute top-0 left-0 gap-10",
};

const Colaborador = ({
  nome,
  imagem,
  cargo,
  email,
  data_admissao,
  corDeFundo,
  aoDeletar,
  id,
}: ColaboradorProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.cabecalho} style={{ backgroundColor: corDeFundo }}>
        <h5 className={styles.id}>{id}</h5>
        <IoIosClose 
          size={28} 
          color="#fff" 
          className="flex gap-1 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => aoDeletar(id)}
        />
        <img 
          className={styles.imagem} 
          src={imagem}
          alt={nome} 
          onError={(e) => {
            e.currentTarget.src = '/imagens/avatar-default.png';
          }}
        />
      </div>
      <div className={styles.rodape}>
        <h4 className={styles.nome}>{nome}</h4>
        <h5 className={styles.texto}>{cargo}</h5>
        <h5 className={styles.texto}>{email}</h5>
        <h5 className={styles.texto}>{data_admissao}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
