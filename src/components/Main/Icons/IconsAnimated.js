// CSS
import styled from "styled-components";
// Hooks
import useScrollPosition from "../../Hooks/useScrollPosition";
// Components
import Cilios from "./Cilios";
import Maquiagem from "./Maquiagem";
import Sobrancelha from "./Sobrancelha";

const IconsContainer = styled.div`
  position: absolute;
  top: 140px;
  right: 0;
  width: 500px;
  height: 500px;

  @media screen and (max-width: 1380px) {
    right: 50px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Texts = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 800px;
  top: 718px;
  left: -534px;
  z-index: 2400;
  opacity: 0;

  p {
    width: 120px;
    text-align: center;
  }

  animation: ${(props) => props.animation};
  /* animation-delay: 1s; */
  animation-play-state: ${(props) => props.playTexts};

  @keyframes textsOnScroll {
    to {
      opacity: 1;
    }
  }

  @keyframes textsAni {
    to {
      opacity: 1;
    }
  }

  @keyframes textsAni_ {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const IconsAnimated = () => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  const scrollOn = scrollPosition > 0;

  return (
    <IconsContainer>
      <Cilios />
      <Maquiagem />
      <Sobrancelha />

      <Texts
        animation={`${
          scrollOn
            ? "textsAni 1.5s ease-in forwards"
            : "textsAni_ 1.5s ease-in forwards"
        }`}
      >
        <p>Cílios</p>
        <p>Sobrancelhas</p>
        <p>Maquiagem</p>
      </Texts>
    </IconsContainer>
  );
};

export default IconsAnimated;
