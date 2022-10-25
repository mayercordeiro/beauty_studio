import Link from "next/link";
// CSS
import styled from "styled-components";

const Button = styled.div`
  display: flex;

  a {
    position: relative;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bkg};

    border: ${(props) => props.border};
    border-radius: 16px;

    padding: 8px 36px;
    margin-top: 28px;

    font-size: 1.125rem;

    overflow: hidden;
    transition: all 0.5s ease;

    &:hover {
      background: ${(props) => props.bkgHover};
      color: ${(props) => props.colorHover};
    }

    &:before {
      position: absolute;
      content: "";
      display: inline-block;
      top: -180px;
      left: 0;
      width: 30px;
      height: 100%;
      background-color: ${(props) => props.bkgAnimation};
      animation: btn 3s ease-in-out infinite;
      border: ${(props) => props.border};
      border-radius: 50%;
    }

    @keyframes btn {
      0% {
        transform: scale(0) rotate(45deg);
        opacity: 0;
      }
      80% {
        transform: scale(0) rotate(45deg);
        opacity: 0.5;
      }
      81% {
        transform: scale(4) rotate(45deg);
        opacity: 1;
      }
      100% {
        transform: scale(50) rotate(45deg);
        opacity: 0;
      }
    }

    &:first-child {
      margin-right: 28px;
    }
  }
`;

const PrimaryButton = (props) => {
  return (
    <Button
      color={props.color}
      colorHover={props.colorHover}
      border={props.border}
      bkg={props.bkg}
      bkgHover={props.bkgHover}
      bkgAnimation={props.bkgAnimation}
    >
      <Link href={props.href}>
        <a>{props.text}</a>
      </Link>
    </Button>
  );
};

export default PrimaryButton;
