import styled from "styled-components";

const Icon = styled.img`
  position: absolute;
  max-width: 120px;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  z-index: 2400;
  animation-name: ${(props) => props.animation};
  animation-duration: 1s, 1s;
  animation-timing-function: ease-in-out, ease;
  animation-fill-mode: forwards, forwards;
  animation-direction: normal, alternate;
  animation-iteration-count: 1, infinite;
  animation-play-state: ${(props) => props.play};

  @keyframes ciliosOnScroll {
    to {
      transform: translateY(540px) translateX(-420px);
    }
  }

  @keyframes cilios {
    to {
      transform: scale(1.1);
    }
  }

  @keyframes sobrancelhasOnScroll {
    to {
      transform: translateY(139px) translateX(-286px);
    }
  }

  @keyframes maquiagemOnScroll {
    to {
      transform: translateY(572px) translateX(-393px);
    }
  }
`;

const Icons = (props) => {
  return (
    <Icon
      src={props.src}
      top={props.top}
      right={props.right}
      left={props.left}
      bottom={props.bottom}
      animation={props.animation}
      play={props.play}
    />
  );
};

export default Icons;
