// CSS
import styles from "./_Inspiration.module.scss";

const Inspiration = () => {
  return (
    <section className={styles.inspiration}>
      <div className={styles.inspiration_container}>
        <div className={styles.inspiration_title}>
          <h3>INSPIRAÇÃO</h3>
          <h2>Últimas Tendências</h2>
        </div>

        <div className={styles.destaques}>
          <div className={styles.destaques_container}>
            <div>
              <h1>Extensão</h1>
              <h2>Cílios</h2>
              <p>
                É um procedimento estético que visa a aumentar o volume de fios,
                sem a necessidade de utilizar maquiagem (ou cílios postiços).
                Além disso, ele proporciona, também, o preenchimento de falhas,
                intensificando o olhar.
              </p>
            </div>

            <div>
              <h1>Lash Lift</h1>
              <h2>Cílios</h2>
              <p>
                O Lash Lifting, também conhecido como lifting de cílios, é uma
                técnica moderna, criada na Inglaterra, que pode ser considerada
                a evolução do antigo permanente de cílios. O tratamento entrega
                o efeito de alongamento da raiz até a ponta dos cílios,
                aumentando comprimento e volume, sem danificar os fios.
              </p>
            </div>

            <div>
              <h1>Brow Lamination</h1>
              <h2>Sobrancelhas</h2>
              <p>
                Essa técnica usa a sobrancelha natural da pessoa e com a ajuda
                de produtos químicos, a deixa com aspecto de volumosa e com os
                pelos mais alinhados.
              </p>
            </div>
          </div>
        </div>

        <button className={styles.instagram}>CONHEÇA NOSSO INSTAGRAM</button>
      </div>
    </section>
  );
};

export default Inspiration;
