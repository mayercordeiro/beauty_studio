import styled from "styled-components";
// Components
import Titles from "../UI/Titles/Titles";
import ReviewBox from "./ReviewBox";

const Container = styled.section`
  position: relative;
  background-color: #fff;
  z-index: 3;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;

  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 16px 300px 16px;

  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/bkg-watercolor-02.svg);
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) 0%;
    z-index: -1;
  }
`;

const ContainerReviews = styled.div`
  padding: 32px 16px;
  margin-top: 40px;
  z-index: 2;
  overflow-x: auto;
  position: relative;
  scroll-behavior: smooth;

  width: 100%;
  display: flex;

  @media screen and (max-width: 430px) {
    padding: 32px 0px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    background-color: #f5f5f5;

    @media screen and (max-width: 1420px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
    background-image: -webkit-gradient(
      linear,
      40% 0%,
      75% 92%,
      from(#c9ab65),
      to(#cda66d),
      color-stop(0.6, #fce693)
    );
  }
`;

const ArrowLeft = styled.img`
  width: 26.8px;
  height: 38px;
  position: absolute;
  top: 320px;
  left: -50px;
  cursor: pointer;
  transition: all 0.5s ease;
  z-index: 2000;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 1420px) {
    top: 520px;
    left: calc(50% - 35px);
  }

  @media screen and (max-width: 650px) {
    top: 425px;
  }

  @media screen and (max-width: 478px) {
    top: 455px;
  }
`;

const ArrowRight = styled.img`
  width: 26.8px;
  height: 38px;
  position: absolute;
  top: 320px;
  right: -50px;
  cursor: pointer;
  transition: all 0.5s ease;
  z-index: 2000;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 1420px) {
    top: 520px;
    left: calc(50% + 35px);
  }

  @media screen and (max-width: 650px) {
    top: 425px;
  }

  @media screen and (max-width: 478px) {
    top: 455px;
  }
`;

const Reviews = () => {
  const slideLeft = () => {
    const left = document.getElementById("slider");
    left.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const right = document.getElementById("slider");
    right.scrollLeft = right.scrollLeft + 500;
  };

  return (
    <Container>
      <Content>
        <Titles
          h2="Avaliações de Clientes"
          h3="DEPOIMENTOS"
          color="#505050"
          left="160px"
        />
        <ContainerReviews id="slider">
          <ReviewBox
            text="A Pâmela é uma excelente profissional! Atenciosa, simpática e lindaaa! Tudo ficou lindo, amei demais 😍❤️ apaixonada pelo seu trabalho!"
            image="./images/profile-review01.jpg"
            author="- Daiana Broska"
          />
          <ReviewBox
            text="Melhor extensão que já fiz! O atendimento e o procedimento foram feitos com muito carinho e cuidado."
            image="./images/profile-review01.jpg"
            author="- Hellen Moreira"
          />
          <ReviewBox
            text="Pessoa incrível, que admiro muito e não troco por ninguém. Profissional excelente, organizada, material ótimo. Sucesso 👏👏"
            image="./images/profile-review01.jpg"
            author="- Camila Melo Souza"
          />
          <ReviewBox
            text="Uma profissional impecável, querida e atenciosa. Faz um trabalho delicado e supera as expectativas! Super recomendo a Pâmela!"
            author="- Evelyn"
            image="./images/profile-review01.jpg"
          />
        </ContainerReviews>
        <ArrowLeft src="./images/arrow-left.svg" onClick={slideLeft} />
        <ArrowRight src="./images/arrow-right.svg" onClick={slideRight} />
      </Content>
    </Container>
  );
};

export default Reviews;
