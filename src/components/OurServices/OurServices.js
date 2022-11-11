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
  z-index: 3;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/bkg-watercolor-01.svg);
    background-repeat: no-repeat;
    background-position: 50% 30%;
    z-index: -1;
  }
`;

const ContainerTitle = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 16px 0 16px;
`;

const Content = styled.section`
  position: relative;

  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 16px 200px 16px;
  z-index: 2;

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

  @media screen and (max-width: 530px) {
    margin-top: 8px;
  }
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
      <ContainerTitle>
        <Titles
          h2="Agende Seu Horário"
          h3="TRANSFORMAÇÃO"
          color="#505050"
          left="186px"
        />
      </ContainerTitle>
      <Content>
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
