// CSS
import styles from "./_Experts.module.scss";
// Components
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import Titles from "../UI/Titles/Titles";

const Experts = () => {
  return (
    <section className={styles.experts}>
      <div className={styles.experts_container}>
        <Titles
          h2="Quem Somos"
          h3="PROFISSIONALISMO"
          color="#505050"
          left="200px"
        />

        <div className={styles.expertN1}>
          <div className={styles.description}>
            <div className={styles.img_mobile}>
              <img src="./images/expertn1-mobile.jpg" alt="Pâmela Ramos" />
            </div>
            <h4>Pâmela Ramos</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              dolor urna, iaculis sit amet nulla vel, gravida fringilla ligula.
              Duis ultricies diam ac dolor commodo, quis pretium turpis iaculis.
              Fusce vitae hendrerit sem. Donec ullamcorper blandit purus, non
              vulputate nisl venenatis a. Pellentesque scelerisque metus augue,
              nec gravida mi mollis quis. Fusce congue eget ex at tincidunt. In
              eget nisl ipsum. Morbi ipsum justo, euismod vitae eros non,
              ultrices tincidunt turpis.
            </p>
            <PrimaryButton
              text="Saiba Mais"
              color="#FFF"
              colorHover="#3F3F3F"
              border="1px solid #3F3F3F"
              bkg="#3F3F3F"
              bkgHover="transparent"
              href="/"
              bkgAnimation="#FFF"
            />
          </div>
          <div className={styles.img_expert}>
            <img src="./images/expertn1.png" alt="Pâmela Ramos" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
