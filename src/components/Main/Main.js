import Link from "next/link";
// CSS
import styles from "./_Main.module.scss";
// Hooks
import useScrollPosition from "../Hooks/useScrollPosition";
// Components
import IconsAnimated from "./Icons/IconsAnimated";

const Main = () => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <>
      <main className={styles.main}>
        <div
          className={
            scrollPosition < 200
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
            <Link href="/quem-somos">
              <button>Agendar</button>
            </Link>
            <button>Serviços</button>
          </div>
        </div>

        <IconsAnimated />
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
