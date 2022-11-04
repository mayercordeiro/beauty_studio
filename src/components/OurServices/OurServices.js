import { useState, useEffect } from "react";
// CSS
import styled from "styled-components";
// Components
import Titles from "../UI/Titles/Titles";
import SelectCategory from "./SelectCategory";
import SelectService from "./SelectService";
import Item from "./Item";
import ContentService from "./ContentService";

const Container = styled.section`
  position: relative;
  background-color: #fff;
  padding-bottom: 500px;
  z-index: 3;
`;

const Content = styled.section`
  position: relative;

  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 16px 200px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  width: 100%;
  margin-top: 40px;
`;

const OurServices = (props) => {
  // Data
  const { servicesData } = props;
  // Category Selected in "SelectCategory.js"
  const [category, setCategory] = useState("Cilios");
  const updateCategory = (c) => {
    setCategory(c);
    setPosition(0);
  };
  // Index of Array Filtered "servicesData"
  const [position, setPosition] = useState(0);
  // Content of an Service Selected
  const dataFilter = servicesData.filter(function (i) {
    return i.attributes.service === `${category}`;
  });
  const [itemName, setItemName] = useState(
    dataFilter[position].attributes.item_name
  );
  const [itemPrice, setItemPrice] = useState(
    dataFilter[position].attributes.price
  );
  const [itemDescription, setItemDescription] = useState(
    dataFilter[position].attributes.description_text
  );
  const [itemImage, setItemImage] = useState(
    dataFilter[position].attributes.image.data.attributes.url
  );
  useEffect(() => {
    setItemName(dataFilter[position].attributes.item_name);
    setItemPrice(dataFilter[position].attributes.price);
    setItemDescription(dataFilter[position].attributes.description_text);
    setItemImage(dataFilter[position].attributes.image.data.attributes.url);
  }, [category, position]);

  return (
    <Container>
      <Content>
        <Titles
          h2="Nossos Serviços"
          h3="EXPERIÊNCIA"
          color="#505050"
          left="146px"
        />
        <SelectCategory handleCategory={updateCategory} />
        <Table>
          <SelectService>
            {servicesData &&
              servicesData
                .filter(function (i) {
                  return i.attributes.service === `${category}`;
                })
                .map((i, index) => (
                  <Item
                    key={i.id}
                    title={i.attributes.item_name}
                    price={i.attributes.price}
                    click={() => {
                      setPosition(index);
                    }}
                  />
                ))}
          </SelectService>
          <ContentService
            title={itemName}
            price={itemPrice}
            description={itemDescription}
            image={itemImage}
          />
        </Table>
      </Content>
    </Container>
  );
};

export default OurServices;
