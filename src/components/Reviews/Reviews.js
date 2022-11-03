import styled from "styled-components";
// Components
import Titles from "../UI/Titles/Titles";

const Container = styled.section`
  position: relative;
  background-color: #fff;
  padding-bottom: 500px;
  z-index: 3;
`;

const Content = styled.div`
  position: relative;

  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 16px 200px 16px;

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
  }
`;

const Reviews = () => {
  return (
    <Container>
      <Content>
        <Titles
          h2="Avaliações de Clientes"
          h3="DEPOIMENTOS"
          color="#505050"
          left="160px"
        />
        <p>a</p>
      </Content>
    </Container>
  );
};

export default Reviews;
