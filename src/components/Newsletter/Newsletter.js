import { useState } from "react";
import axios from "axios";
// CSS
import styled from "styled-components";

const Container = styled.section`
  min-height: 100px;
  background-color: #fdf7f5;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 1020px) {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  h2 {
    max-width: 540px;
    font-size: 18px;

    @media screen and (max-width: 1020px) {
      text-align: center;
      margin-top: 16px;
    }
  }

  > div {
    margin-left: 80px;
    display: flex;

    @media screen and (max-width: 1020px) {
      margin-bottom: 16px;
      margin-left: 0px;
    }

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

      @media screen and (max-width: 590px) {
        width: unset;
        max-width: 340px;
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
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(
        "https://prbscms.herokuapp.com/api/newsletters",
        JSON.stringify({
          data: {
            email: email,
          },
        })
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Container>
      <Content>
        <h2>
          Inscreva-se em nossa Newsletter para receber as últimas atualizações e
          ofertas:
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </Content>
    </Container>
  );
};

export default Newsletter;
