import Head from "next/head";
// CSS
import styled from "styled-components";
// Components
import Titles from "../components/UI/Titles/Titles";

const Container = styled.section`
  position: relative;
  width: 100%;
  background-color: #fff;
  z-index: 3;
  padding-top: 220px;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;

  h1 {
    font-size: 40px;
    height: 500px;
  }
`;

const quemSomos = () => {
  return (
    <>
      <Head>
        <title>Quem Somos - Pâmela Ramos Beauty Studio</title>
      </Head>
      <Container>
        <Content>
          <h1>Quem Somos</h1>
        </Content>
      </Container>
    </>
  );
};

export default quemSomos;
