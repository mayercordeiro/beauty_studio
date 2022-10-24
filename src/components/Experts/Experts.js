// CSS
import styles from "./_Experts.module.scss";
// Components
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

const Experts = () => {
  return (
    <section className={styles.experts}>
      <div className={styles.experts_container}>
        <div className={styles.title}>
          <h3>PROFISSIONALISMO</h3>
          <h2>Nossos Experts</h2>
        </div>

        <div className={styles.expertN1}>
          <div className={styles.description}>
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
            <PrimaryButton text="Quem Somos" />
          </div>
          <div className={styles.img_expert}>
            <img src="./images/expertn1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
