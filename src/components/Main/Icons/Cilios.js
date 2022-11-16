import Image from "next/image";
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
    height: 180px;

    transition: all 1s ease;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
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
          ? "ciliosAni 1s ease-in-out forwards"
          : "ciliosAni_ 1s ease-in-out"
      }`}
    >
      <Image
        src="/images/a-cilios-c.svg"
        alt="Cílios"
        width={120}
        height={180}
      />
    </DivCilios>
  );
};

export default Cilios;
