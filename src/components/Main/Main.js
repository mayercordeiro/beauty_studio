// CSS
import styles from "./_Main.module.scss";
// Hooks
import useScrollPosition from "../Hooks/useScrollPosition";

const Main = () => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <>
      <main className={styles.main}>
        <div
          className={
            scrollPosition < 120
              ? `${styles.main_left}`
              : `${styles.main_left} ${styles.main_off}`
          }
        >
          <h2>Realçamos e valorizamos a sua beleza natural</h2>
          <h1>
            Você merece as melhores extensões de cílios em Francisco Beltrão!
            Seus cílios perfeitos com a melhor técnica de aplicação.
          </h1>
          <div className={styles.main_buttons}>
            <button>Agendar</button>
            <button>Veja Mais</button>
          </div>
        </div>
      </main>

      <div
        className={
          scrollPosition < 120
            ? `${styles.main_image_pinca}`
            : `${styles.main_image_pinca} ${styles.pinca_off}`
        }
      >
        <img src="/images/pinca-main.svg" alt="" />
      </div>
    </>
  );
};

export default Main;
