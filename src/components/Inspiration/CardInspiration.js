import styled from "styled-components";

const Card = styled.div`
  width: 390px;
  height: 455px;
  border: 2px solid #c59d5f;
  cursor: pointer;

  position: relative;

  background-color: ${(props) => (props.background_dark ? "#3F3F3F" : "")};
  box-shadow: ${(props) => (props.box_shadow ? "0 0 0px 16px #3f3f3f" : "")};
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
`;

const Titulo = styled.h1`
  font-size: 3rem;
  text-align: center;
  line-height: 50px;
  min-height: 100px;

  display: flex;
  align-items: flex-end;

  color: ${(props) => (props.text_color ? "#FFF" : "")};
`;

const SubTitulo = styled.h2`
  font-size: 36px;
  color: #c59d5f;
  margin-top: 10px;
`;

const Texto = styled.p`
  font-size: 1rem;
  margin-top: 18px;

  color: ${(props) => (props.text_color ? "#FFF" : "")};
`;

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  &:hover {
    animation-name: reveal;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes reveal {
    0% {
      opacity: 0;
      filter: blur(20px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
`;

const ImgBack = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardInspiration = (props) => {
  return (
    <Card>
      <Front>
        <Titulo>{props.titulo}</Titulo>
        <SubTitulo>{props.subtitulo}</SubTitulo>
        <Texto>{props.texto}</Texto>
      </Front>

      <Back>
        <ImgBack src={props.img} />
      </Back>
    </Card>
  );
};

export const CardInspirationDark = (props) => {
  return (
    <Card background_dark box_shadow>
      <Front>
        <Titulo text_color>{props.titulo}</Titulo>
        <SubTitulo>{props.subtitulo}</SubTitulo>
        <Texto text_color>{props.texto}</Texto>
      </Front>
      <Back>
        <ImgBack src={props.img} />
      </Back>
    </Card>
  );
};
