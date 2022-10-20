import styled from "styled-components";
import Link from "next/link";

const LinkInstagram = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  a {
    position: relative;
    padding: 14px 10px 10px 10px;
    background-color: #fff;
    border: 1px solid #000;
    margin: 10px 0;
    font-size: 18px;
    line-height: 1rem;
    transition: all 1s ease-in-out;

    &:hover {
      color: #c59d5c;
      border: 1px solid #c59d5c;
      transition: color 1s ease-in-out;
    }

    &::after {
      content: "";
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      position: absolute;
      background-color: #faede4bf;
      transition: all 0.5s ease-in-out;
    }

    &:hover::after {
      width: 100%;
      transition: all 0.5s ease-in-out;
    }
  }
`;

const InstagramLink = () => {
  return (
    <LinkInstagram>
      <Link href="https://www.instagram.com/pamela.raamos/">
        <a target="_blank">CONHEÇA NOSSO INSTAGRAM</a>
      </Link>
    </LinkInstagram>
  );
};

export default InstagramLink;
