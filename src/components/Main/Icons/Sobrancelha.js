import Image from "next/image";
// Hooks
import useScrollPosition from "../../Hooks/useScrollPosition";
// CSS
import styled from "styled-components";

const DivSobrancelha = styled.div`
  position: absolute;
  z-index: 2;
  top: 420px;
  left: 90px;
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

  @keyframes sobrancelhaAni {
    to {
      transform: translateY(139px) translateX(-283px);
    }
  }

  @keyframes sobrancelhaAni_ {
    from {
      transform: translateY(139px) translateX(-283px);
    }
    to {
      transform: translateY(0px) translateX(0px);
    }
  }
`;

const Sobrancelha = (props) => {
  // Scroll Position
  const scrollPosition = useScrollPosition();
  const scrollOn = scrollPosition > 0;

  return (
    <DivSobrancelha
      animation={`${
        scrollOn
          ? "sobrancelhaAni 1s ease-in-out forwards"
          : "sobrancelhaAni_ 1s ease-in-out"
      }`}
    >
      <Image
        src="/images/a-sobrancelha-c.svg"
        alt="Sobrancelha"
        width={120}
        height={180}
      />
    </DivSobrancelha>
  );
};

export default Sobrancelha;
