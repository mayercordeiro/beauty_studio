// Hooks
import useScrollPosition from "../../Hooks/useScrollPosition";
// CSS
import styled from "styled-components";

const DivCilios = styled.div`
  position: absolute;
  z-index: 2;
  top: 20px;
  transition: all 0.4s ease-in-out;

  img {
    width: 120px;
  }

  animation: ${(props) => props.animation};

  @keyframes ciliosAni {
    to {
      transform: translateY(540px) translateX(-420px);
    }
  }

  @keyframes ciliosAni_ {
    from {
      transform: translateY(540px) translateX(-420px);
    }
    to {
      transform: translateY(0px) translateX(0px);
    }
  }
`;

const Cilios = (props) => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  const scrollOn = scrollPosition > 0;

  return (
    <DivCilios
      animation={`${
        scrollOn
          ? "ciliosAni 1.2s ease-in-out 1 forwards"
          : "ciliosAni_ 0.6s ease-in-out 1"
      }`}
    >
      <img src="./images/a-cilios-c.svg" alt="cilios" />
    </DivCilios>
  );
};

export default Cilios;
