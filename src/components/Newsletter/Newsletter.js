import styled from "styled-components";

const Container = styled.section`
  height: 100px;
  background-color: #fdf7f5;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;

  display: flex;
  align-items: center;

  h2 {
    max-width: 540px;
    font-size: 22px;
  }

  > div {
    margin-left: 80px;
    display: flex;

    input[type="email"] {
      width: 450px;
      height: 48px;
      background: #ffffff;
      border: 1px solid #c59d5f;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      padding-left: 16px;
      color: #c59d5f;
      font-weight: 700;

      &::placeholder {
        color: #b4b4b4;
        font-weight: 400;
      }

      &:focus {
        outline: none;
      }
    }

    input[type="image"] {
      position: relative;
      background-color: #c59d5f;
      border: 1px solid #c59d5f;
      width: 64px;
      height: 48px;
      padding: 12px;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
    }
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Content>
        <h2>
          Inscreva-se em nossa Newsletter para receber as últimas atualizações e
          ofertas:
        </h2>
        <div>
          <input type="email" placeholder="Digite seu email" />
          <input
            type="image"
            name="submit"
            src="./images/paper-plane.svg"
            border="0"
            alt="Submit"
          />
        </div>
      </Content>
    </Container>
  );
};

export default Newsletter;
