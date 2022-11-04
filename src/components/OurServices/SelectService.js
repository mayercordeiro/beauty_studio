// CSS
import styled from "styled-components";

const Items = styled.div`
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
  }
`;

const SelectService = ({ children }) => {
  return (
    <Items>
      <ul>{children}</ul>
    </Items>
  );
};

export default SelectService;
