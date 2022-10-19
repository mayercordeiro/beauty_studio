import Link from "next/link";
import { useState, useEffect } from "react";
// CSS
import styles from "./_Header.module.scss";
// Hooks
import useScrollPosition from "../Hooks/useScrollPosition";

const Header = () => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  //
  // Abrir Menu Mobile
  const [mobileActive, setMobileActive] = useState();

  const handleMobile = () => {
    setMobileActive(!mobileActive);
  };
  //

  return (
    <>
      <div className={styles.header_container}>
        <div
          className={
            scrollPosition < 726 ? `${styles.logo}` : `${styles.logoScroll}`
          }
        >
          <Link href="/">
            <a>
              <img
                src="/images/logo.png"
                alt="Logo Pâmela Ramos Beauty Studio"
              />
            </a>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/quem-somos">
                <a>QUEM SOMOS</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>SERVIÇOS</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>GALERIA DE FOTOS</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>CURSOS</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>BLOG</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>CONTATO</a>
              </Link>
            </li>
          </ul>

          <div className={styles.social}>
            <Link href="https://www.instagram.com/pamela.raamos/">
              <a target="_blank">
                <img
                  src="/images/icon-ig.svg"
                  alt="Conheça o nosso instagram"
                />
              </a>
            </Link>
            <Link href="/">
              <a target="_blank">
                <img src="/images/icon-fb.svg" alt="Conheça o nosso facebook" />
              </a>
            </Link>
          </div>
        </nav>

        <span className={styles.buttonMenu} onClick={handleMobile}>
          &#9776;
        </span>
      </div>

      {/*Menu Mobile*/}
      <nav
        id={mobileActive ? `${styles.openMobile}` : ""}
        className={styles.overlay}
      >
        <a class={styles.closebtn} onClick={handleMobile}>
          &times;
        </a>

        <div>
          <ul>
            <li className={styles.active_link_mobile} onClick={handleMobile}>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li onClick={handleMobile}>
              <Link href="/quem-somos">
                <a>QUEM SOMOS</a>
              </Link>
            </li>
            <li onClick={handleMobile}>
              <Link href="/">
                <a>SERVIÇOS</a>
              </Link>
            </li>
            <li onClick={handleMobile}>
              <Link href="/">
                <a>GALERIA DE FOTOS</a>
              </Link>
            </li>
            <li onClick={handleMobile}>
              <Link href="/">
                <a>CURSOS</a>
              </Link>
            </li>
            <li onClick={handleMobile}>
              <Link href="/">
                <a>BLOG</a>
              </Link>
            </li>
            <li onClick={handleMobile}>
              <Link href="/">
                <a>CONTATO</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.socialMobile}>
          <Link href="https://www.instagram.com/pamela.raamos/">
            <a target="_blank">
              <img src="/images/icon-ig.svg" alt="Conheça o nosso instagram" />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank">
              <img src="/images/icon-fb.svg" alt="Conheça o nosso facebook" />
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
