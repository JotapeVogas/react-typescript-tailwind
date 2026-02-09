interface ColaboradorProps {
  nome: string;
  imagem: string;
  cargo: string;
  email?: string;
  data_admissao?: string;
  corDeFundo: string;
}

const styles = {
  container: "w-[280px]",
  cabecalho: "rounded-t-[10px] text-center",
  imagem: "w-[100px] rounded-full relative -bottom-[50px] block mx-auto",
  rodape: "bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.08)] rounded-b-[10px] pt-[90px] pb-10",
  nome: "text-[#6278F7] text-lg leading-[22px] font-bold mb-2 px-4 justify-center text-center gap-10",
  texto: "text-lg leading-[22px] text-[#212121] px-4 justify-center text-center gap-10",
};

const Colaborador = ({
  nome,
  imagem,
  cargo,
  email,
  data_admissao,
  corDeFundo,
}: ColaboradorProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.cabecalho} style={{ backgroundColor: corDeFundo }}>
        <img className={styles.imagem} src={imagem} alt={nome} />
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
