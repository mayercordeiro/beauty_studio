import { useState } from "react";
// CSS
import styled from "styled-components";
// Hooks
import useScrollPosition from "../../Hooks/useScrollPosition";
// Components
import Icons from "./Icons";

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
  top: 680px;
  left: -534px;
  z-index: 2400;
  opacity: 0;

  p {
    width: 120px;
    text-align: center;
  }

  animation: textsOnScroll 1.5s ease-in forwards;
  animation-delay: 1s;
  animation-play-state: ${(props) => props.playTexts};

  @keyframes textsOnScroll {
    to {
      opacity: 1;
    }
  }
`;

const IconsAnimated = () => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  const scrollOn = scrollPosition > 0;

  return (
    <IconsContainer>
      <Icons
        src="./images/a-cilios-c.svg"
        top={"20px"}
        animation={"ciliosOnScroll"}
        play={scrollOn ? "play" : "paused"}
      />
      <Icons
        src="./images/a-sobrancelha-c.svg"
        top={"420px"}
        left={"90px"}
        animation={"sobrancelhasOnScroll"}
        play={scrollOn ? "play" : "paused"}
      />
      <Icons
        src="./images/a-maquiagem-c.svg"
        top={"-10px"}
        right={"-50px"}
        animation={"maquiagemOnScroll"}
        play={scrollOn ? "play" : "paused"}
      />
      <Texts playTexts={scrollOn ? "play" : "paused"}>
        <p>Cílios</p>
        <p>Sobrancelhas</p>
        <p>Maquiagem</p>
      </Texts>
    </IconsContainer>
  );
};

export default IconsAnimated;
