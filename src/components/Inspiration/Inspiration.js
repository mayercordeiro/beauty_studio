// CSS
import styles from "./_Inspiration.module.scss";
// Components
import { CardInspiration, CardInspirationDark } from "./CardInspiration";
import InstagramLink from "./InstagramLink";

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
            <CardInspiration
              titulo="Extensão"
              subtitulo="Cílios"
              texto="É um procedimento estético que visa a aumentar o volume de fios, sem a
          necessidade de utilizar maquiagem (ou cílios postiços). Além disso,
          ele proporciona, também, o preenchimento de falhas, intensificando o
          olhar."
              img="./images/inspiration01.jpg"
            />

            <CardInspirationDark
              titulo="Lash Lift"
              subtitulo="Cílios"
              texto="O Lash Lifting, também conhecido como lifting de cílios, é uma
          técnica moderna, criada na Inglaterra, que pode ser considerada
          a evolução do antigo permanente de cílios. O tratamento entrega
          o efeito de alongamento da raiz até a ponta dos cílios,
          aumentando comprimento e volume, sem danificar os fios."
              img="./images/inspiration01.jpg"
            />

            <CardInspiration
              titulo="Brow Lamination"
              subtitulo="Sobrancelhas"
              texto="Essa técnica usa a sobrancelha natural da pessoa e com a ajuda de produtos químicos, a deixa com aspecto de volumosa e com os pelos mais alinhados."
              img="./images/inspiration01.jpg"
            />
          </div>

          <InstagramLink />
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
