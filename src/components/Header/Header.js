import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// CSS
import styles from "./_Header.module.scss";
// Hooks
import useScrollPosition from "../Hooks/useScrollPosition";

const Header = () => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  // Abrir Menu Mobile
  const [mobileActive, setMobileActive] = useState();

  const handleMobile = () => {
    setMobileActive(!mobileActive);
  };
  // Next Router (Active Link)
  const router = useRouter();

  return (
    <>
      <div className={styles.header_container}>
        <div
          className={
            scrollPosition < 250 ? `${styles.logo}` : `${styles.logoScroll}`
          }
        >
          <Link href="/">
            <a>
              <img
                src="/images/logo.png"
                alt="Logo do studio escrito Pâmela Ramos e acima uma flor de lotus na cor dourada"
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
              <Link href="/servicos">
                <a>SERVIÇOS</a>
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
            <Link href="https://www.instagram.com/pamela.raamos/">
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
        <a className={styles.closebtn} onClick={handleMobile}>
          &times;
        </a>

        <div>
          <ul>
            <li
              className={
                router.pathname === "/" ? `${styles.active_link_mobile}` : ""
              }
              onClick={handleMobile}
            >
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li
              className={
                router.pathname === "/quem-somos"
                  ? `${styles.active_link_mobile}`
                  : ""
              }
              onClick={handleMobile}
            >
              <Link href="/quem-somos">
                <a>QUEM SOMOS</a>
              </Link>
            </li>
            <li onClick={handleMobile}>
              <Link href="/servicos">
                <a>SERVIÇOS</a>
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
