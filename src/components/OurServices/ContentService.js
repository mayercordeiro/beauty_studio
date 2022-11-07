// CSS
import styled from "styled-components";
// Componente
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";

const Description = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    margin-left: 80px;
  }
`;

const ItemImg = styled.img`
  height: 300px;
  border: 1px solid #c59d5f;
  background-image: ${(props) => `url(${props.image})`};
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

const ContentService = (props) => {
  return (
    <Description>
      <ItemImg image={props.image} />
      <Infos>
        <h3>{props.title}</h3>
        <span>{props.price}</span>
        <p>{props.description}</p>
      </Infos>
      <PrimaryButton
        text="Agendar"
        color="#FFF"
        colorHover="#3F3F3F"
        border="1px solid #3F3F3F"
        bkg="#3F3F3F"
        bkgHover="transparent"
        href="/"
        bkgAnimation="#FFF"
      />
    </Description>
  );
};

export default ContentService;
