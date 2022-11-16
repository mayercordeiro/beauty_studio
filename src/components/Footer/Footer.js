import Link from "next/link";
// CSS
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  background-color: #3f3f3f;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 16px 32px 16px;

  display: flex;
  gap: 80px;

  @media screen and (max-width: 1130px) {
    flex-wrap: wrap;
  }

  .intro {
    max-width: 350px;
    display: flex;
    flex-direction: column;

    img {
      width: 70%;
    }

    p {
      color: #fff;
      font-size: 18px;
      margin-top: 16px;
    }
  }

  .links {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    @media screen and (max-width: 610px) {
      margin-top: 0px;
    }

    h2 {
      font-size: 28px;
      color: #c59d5f;
    }

    ul {
      list-style: none;

      li a {
        font-size: 18px;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 16px;
        height: 40px;

        &:before {
          content: url(./images/arrow-footer.svg);
          transition: all 0.5s ease;
        }

        &:hover::before {
          transform: translateX(10px);
        }
      }
    }
  }

  .hour {
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    @media screen and (max-width: 610px) {
      margin-top: 0px;
    }

    h2 {
      font-size: 28px;
      color: #c59d5f;
    }

    ul {
      list-style: none;

      li {
        font-size: 18px;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 16px;
        height: 40px;

        @media screen and (max-width: 500px) {
          margin: 16px 0;
        }
      }
    }

    .clock {
      &:before {
        content: url(./images/clock.svg);
      }
    }

    .place {
      &:before {
        content: url(./images/place.svg);
      }
    }
  }
`;

const Copyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #c59d5f;
  padding: 16px;

  p {
    text-align: center;
    font-size: 18px;
    color: #c59d5f;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <div className="intro">
          <img
            src="./images/logo-pamela-invert.png"
            alt="Logo do studio escrito Pâmela Ramos e acima uma flor de lotus na cor dourada"
          />
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
            officia.Lorem ipsum dolor sit amet.
          </p>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        <div className="links">
          <h2>Links Úteis</h2>
          <ul>
            <li>
              <Link href="/servicos">
                <a>Serviços</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Cursos</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hour">
          <h2>Atendimento</h2>
          <ul>
            <li className="place">
              Rua São Paulo, 1647 | Francisco Beltrão / PR
            </li>
            <li className="clock">Seg-Sex: 8h - 22h</li>
            <li className="clock">Sábado: 8h - 17h</li>
          </ul>
        </div>
      </Content>
      <Copyright>
        <p>© 2022 Copyright | Pâmela Ramos Beauty Studio</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
