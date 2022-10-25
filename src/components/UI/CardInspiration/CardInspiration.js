import styled from "styled-components";

const Card = styled.div`
  width: 390px;
  height: 455px;
  border: 2px solid #c59d5f;
  cursor: pointer;

  position: relative;

  background-color: ${(props) => props.bkg};
  box-shadow: ${(props) => props.shadow};

  @media screen and (max-width: 420px) {
    width: 320px;
    height: 490px;
  }
`;

const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: "";
    background-image: ${(props) => `url(${props.url})`};
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    filter: blur(15px);
    transition: all 1.2s ease;
  }

  &:hover:after {
    opacity: 1;
    filter: blur(0px);
  }
`;

const Titulo = styled.h1`
  font-size: 3rem;
  text-align: center;
  line-height: 50px;
  min-height: 100px;

  display: flex;
  align-items: flex-end;

  color: ${(props) => props.h1Color};
`;

const SubTitulo = styled.h2`
  font-size: 36px;
  color: #c59d5f;
  margin-top: 10px;
`;

const Texto = styled.p`
  font-size: 1rem;
  margin-top: 18px;

  color: ${(props) => props.pColor};
`;

const CardInspiration = (props) => {
  return (
    <Card bkg={props.bkg} shadow={props.shadow}>
      <Front url={props.url}>
        <Titulo h1Color={props.h1Color}>{props.titulo}</Titulo>
        <SubTitulo>{props.subtitulo}</SubTitulo>
        <Texto pColor={props.pColor}>{props.texto}</Texto>
      </Front>
    </Card>
  );
};

export default CardInspiration;
