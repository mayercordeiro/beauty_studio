import { useState, useEffect } from "react";
// CSS
import styles from "./_Main.module.scss";

const Main = () => {
  // Scroll Top
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <main className={styles.main}>
        <div
          className={
            scrollTop < 235
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
          scrollTop < 400
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
