// CSS
import styled from "styled-components";
// Components
import { useState } from "react";

const Items = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow-y: auto;
  color: #505050;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
    background-color: #fff;
    background-image: -webkit-gradient(
      linear,
      40% 0%,
      75% 92%,
      from(#c9ab65),
      to(#cda66d),
      color-stop(0.6, #fce693)
    );
  }

  ul {
    padding: 16px;
    list-style: none;
    position: relative;

    li a {
      transition: all 0.5s ease;

      &:hover {
        color: #c59d5f;
      }
    }
  }

  > span {
    position: absolute;
    top: 46%;
    left: -22px;
    font-size: 32px;
    z-index: 11;
    cursor: pointer;
    transform: rotate(90deg);
    display: ${(props) => props.menu};

    @media screen and (min-width: 1301px) {
      display: none;
    }
  }

  > span:last-child {
    content: "";
    position: absolute;
    display: block;
    text-align: center;
    top: 4px;
    right: -340px;
    transform: rotate(180deg);
    font-size: 24px;
    font-family: monospace;
    z-index: 2000;
    color: #ff8484;
    font-family: Verdana, Tahoma, sans-serif;

    @media screen and (min-width: 1301px) {
      display: none;
    }
  }

  @media screen and (max-width: 1300px) {
    position: absolute;
    width: ${(props) => props.widthMobile};
    overflow-x: hidden;
    left: 16px;
    z-index: 10;
    transition: all 0.5s ease;

    &:after {
      content: "";
      display: ${(props) => props.display};
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${(props) => props.bkgAfter};
      width: 100%;
      height: 100%;
    }
  }
`;

const menuMobile = {
  menuOpen: {
    display: "none",
    width: "350px",
    bkgAfter: "unset",
    menu: "none",
  },
  menuClosed: {
    display: "unset",
    width: "60px",
    bkgAfter: "#C59D5F",
    menu: "unset",
  },
};

const SelectService = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <Items
        widthMobile={`${
          openMenu ? menuMobile.menuOpen.width : menuMobile.menuClosed.width
        }`}
        bkgAfter={`${
          openMenu
            ? menuMobile.menuOpen.bkgAfter
            : menuMobile.menuClosed.bkgAfter
        }`}
        display={`${
          openMenu ? menuMobile.menuOpen.display : menuMobile.menuClosed.display
        }`}
        content={`${
          openMenu ? menuMobile.menuOpen.content : menuMobile.menuClosed.content
        }`}
        menu={`${
          openMenu ? menuMobile.menuOpen.menu : menuMobile.menuClosed.menu
        }`}
      >
        <ul onClick={handleMenu}>{children}</ul>
        <span onClick={handleMenu}>MENU</span>
        <span onClick={handleMenu}>X</span>
      </Items>
    </>
  );
};

export default SelectService;
