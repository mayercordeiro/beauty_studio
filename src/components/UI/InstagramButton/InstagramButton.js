import Link from "next/link";
// CSS
import styled from "styled-components";

const InstagramBtn = styled.div`
  display: block;
  text-align: center;
  margin-top: 60px;

  a {
    position: relative;
    display: inline-block;
    height: 48px;
    padding: 10px 25px;
    border: 1px solid #000;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1;
    font-size: 18px;

    &:hover {
      color: #fff;
    }

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      background: #505050;
      transition: all 0.3s ease;
    }

    &:hover:after {
      left: 0;
      width: 100%;
    }
  }
`;

const InstagramButton = () => {
  return (
    <InstagramBtn>
      <Link href="https://www.instagram.com/pamela.raamos/">
        <a target="_blank">CONHEÇA NOSSO INSTAGRAM</a>
      </Link>
    </InstagramBtn>
  );
};

export default InstagramButton;
