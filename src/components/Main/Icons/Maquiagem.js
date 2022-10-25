// Hooks
import useScrollPosition from "../../Hooks/useScrollPosition";
// CSS
import styled from "styled-components";

const DivMaquiagem = styled.div`
  position: absolute;
  z-index: 2;
  top: -10px;
  right: -50px;
  transition: all 0.4s ease-in-out;

  img {
    width: 120px;
    height: 180px;

    transition: all 1s ease;

    &:hover {
      transform: scale(1.2) rotate(-10deg);
    }
  }

  animation: ${(props) => props.animation};

  @keyframes maquiagemAni {
    to {
      transform: translateY(570px) translateX(-391px);
    }
  }

  @keyframes maquiagemAni_ {
    from {
      transform: translateY(570px) translateX(-391px);
    }
    to {
      transform: translateY(0px) translateX(0px);
    }
  }
`;

const Maquiagem = (props) => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  const scrollOn = scrollPosition > 0;

  return (
    <DivMaquiagem
      animation={`${
        scrollOn
          ? "maquiagemAni 1s ease-in-out forwards"
          : "maquiagemAni_ 1s ease-in-out"
      }`}
    >
      <img src="./images/a-maquiagem-c.svg" alt="cilios" />
    </DivMaquiagem>
  );
};

export default Maquiagem;
