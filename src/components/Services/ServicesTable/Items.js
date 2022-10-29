// CSS
import styled from "styled-components";

const List = styled.div`
  width: 350px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow-y: auto;

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

    div {
      display: flex;
      justify-content: space-between;
      padding: 24px 0;
      border-bottom: 2px dashed #a7a7a7;

      &:last-child {
        border-bottom: unset;
      }

      li {
        list-style: none;
      }
    }
  }
`;

const Items = (props) => {
  return (
    <List>
      <ul>
        <div>
          <li>{props.title}</li>
          <span>{props.price}</span>
        </div>
      </ul>
    </List>
  );
};

export default Items;
