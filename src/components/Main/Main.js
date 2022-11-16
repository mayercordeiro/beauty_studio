import Image from "next/image";
// CSS
import styles from "./_Main.module.scss";
// Hooks
import useScrollPosition from "../Hooks/useScrollPosition";
// Components
import IconsAnimated from "./Icons/IconsAnimated";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

const Main = () => {
  // Scroll Position
  const scrollPosition = useScrollPosition();

  return (
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
          Você merece as melhores extensões de cílios em Francisco Beltrão! Seus
          cílios perfeitos com a melhor técnica de aplicação.
        </h1>
        <div className={styles.main_buttons}>
          <PrimaryButton
            text="Agendar"
            color="#FFF"
            colorHover="#3F3F3F"
            border="1px solid #3F3F3F"
            bkg="#3F3F3F"
            bkgHover="transparent"
            href="/quem-somos"
            bkgAnimation="#FFF"
          />
          <PrimaryButton
            text="Serviços"
            color="#FFF"
            colorHover="#3F3F3F"
            border="1px solid #3F3F3F"
            bkg="#3F3F3F"
            bkgHover="transparent"
            href="/servicos"
            bkgAnimation="#FFF"
          />
        </div>
      </div>

      <IconsAnimated />
    </main>
  );
};

export default Main;
