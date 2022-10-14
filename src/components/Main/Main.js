// CSS
import styles from "./_Main.module.scss";

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.main_left}>
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

      <div className={styles.main_image_pinca}>
        <img src="/images/pinca-main.svg" alt="" />
      </div>
    </>
  );
};

export default Main;
