// CSS
import styled from "styled-components";

const Service = styled.li`
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: 2px dashed #a7a7a7;
    cursor: pointer;

    h3 {
      font-size: 16px;
      font-weight: 400;
    }

    span {
      width: 80px;
      text-align: center;
    }
  }
`;

const Item = (props) => {
  return (
    <Service>
      <a onClick={props.click}>
        <h3>{props.title}</h3>
        <span>{props.price}</span>
      </a>
    </Service>
  );
};

export default Item;
