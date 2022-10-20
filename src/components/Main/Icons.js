import React from "react";
import styled from "styled-components";
// Hooks
import useScrollPosition from "../Hooks/useScrollPosition";

const ContainerIcons = styled.div`
  position: relative;
  width: 100%;
  top: 150px;
`;

const ImgCilios = styled.img`
  width: 100px;
  position: absolute;
  top: 100px;
  left: 100px;

  animation-name: cilios;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease;

  @keyframes cilios {
    from {
      transform: rotate3d(2, 4, 1, 350deg);
    }
    to {
      transform: rotate3d(2, 4, 1, 317deg) translateY(-18px);
    }
  }
`;

const ImgSobrancelha = styled.img`
  width: 100px;
  position: absolute;
  top: -10px;
  right: -70px;

  animation-name: sobrancelha;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease;

  @keyframes sobrancelha {
    from {
      transform: rotate3d(2, 4, 1, 350deg);
    }
    to {
      transform: rotate3d(-11, 4, 2, 24deg) translateY(24px);
    }
  }
`;

const ImgMaquiagem = styled.img`
  width: 100px;
  position: absolute;
  bottom: 100px;
  left: 200px;
`;

const Icons = () => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  //

  return (
    <ContainerIcons>
      <ImgCilios src="/images/a-cilios.svg" />
      <ImgSobrancelha src="/images/a-sobrancelha.svg" />
      {/* <ImgMaquiagem src="/images/a-maquiagem.svg" /> */}
    </ContainerIcons>
  );
};

export default Icons;
