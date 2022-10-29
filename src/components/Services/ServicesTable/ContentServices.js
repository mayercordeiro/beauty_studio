// CSS
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;
//
const Items = styled.div`
  width: 350px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
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

  ul {
    padding: 16px;

    div {
      display: flex;
      justify-content: space-between;
      padding: 24px 0;
      border-bottom: 2px dashed #a7a7a7;

      &:last-child {
        border-bottom: unset;
      }

      li {
        list-style: none;
      }
    }
  }
`;

const Description = styled.div`
  max-width: 860px;
  display: flex;
  flex-direction: column;
`;
//
const ItemImg = styled.img`
  height: 300px;
  border: 1px solid #c59d5f;
  background-image: url(./images/item01.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2);
`;

const Infos = styled.div`
  h3 {
    font-size: 24px;
    margin-top: 16px;
  }

  span {
    font-size: 18px;
    margin-top: 8px;
    color: #c59d5f;
  }

  p {
    margin-top: 16px;
  }
`;

const ContentServices = (props) => {
  return (
    <Container>
      <Items>
        <ul>
          <div>
            <li>Item 01</li>
            <span>R$ 50,00</span>
          </div>
          <div>
            <li>Item 01</li>
            <span>R$ 50,00</span>
          </div>
        </ul>
      </Items>

      <Description>
        <ItemImg />
        <Infos>
          <h3>Item 01</h3>
          <span>R$ 50,00</span>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
        </Infos>
      </Description>
    </Container>
  );
};

export default ContentServices;
