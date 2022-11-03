// CSS
import styled from "styled-components";

const Description = styled.div`
  min-width: 800px;
  display: flex;
  flex-direction: column;
`;

const ItemImg = styled.img`
  max-width: 800px;
  height: 300px;
  border: 1px solid #c59d5f;
  background-image: url(./images/item01.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2);
`;

const Infos = styled.div`
  max-width: 800px;

  h3 {
    font-size: 24px;
    margin-top: 16px;
  }

  span {
    font-size: 18px;
    margin-top: 8px;
    color: #c59d5f;
  }
  //
  p {
    margin-top: 16px;
  }
`;

const Item = (props) => {
  return (
    <Description>
      <ItemImg />
      <Infos>
        <h3>{props.item_name}</h3>
        <span>{props.price}</span>
        <p>{props.description}</p>
      </Infos>
    </Description>
  );
};

export default Item;
