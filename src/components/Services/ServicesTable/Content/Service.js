import { useState, useEffect } from "react";
// CSS
import styled from "styled-components";
// Components
import Item from "./Item";

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;
//
const Items = styled.div`
  min-width: 350px;
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
    list-style: none;

    a {
      display: flex;
      justify-content: space-between;
      padding: 24px 0;
      border-bottom: 2px dashed #a7a7a7;
      cursor: pointer;

      &:last-child {
        border-bottom: unset;
      }

      li {
        list-style: none;
      }
    }
  }
`;

const Service = (props) => {
  const { servicesData } = props;

  const [position, setPosition] = useState(0);
  const [itemName, setItemName] = useState(
    servicesData[position].attributes.item_name
  );
  const [itemPrice, setItemPrice] = useState(
    servicesData[position].attributes.price
  );
  const [itemDescription, setItemDescription] = useState(
    servicesData[position].attributes.description_text
  );

  const handlePosition = useEffect(() => {
    setItemName(servicesData[position].attributes.item_name);
    setItemPrice(servicesData[position].attributes.price);
    setItemDescription(servicesData[position].attributes.description_text);
  }, [position]);

  const ItemsList = (
    <ul>
      {servicesData &&
        servicesData
          .filter(function (i) {
            return i.attributes.service === `${props.service}`;
          })
          .map((i, index) => (
            <a
              key={i.id}
              onClick={() => {
                setPosition(index);
                handlePosition;
              }}
            >
              <li>{i.attributes.item_name}</li>
              <span>{i.attributes.price}</span>
            </a>
          ))}
    </ul>
  );

  return (
    <Container>
      <Items>{ItemsList}</Items>

      <Item
        item_name={itemName}
        price={itemPrice}
        description={itemDescription}
      />
    </Container>
  );
};

export default Service;
