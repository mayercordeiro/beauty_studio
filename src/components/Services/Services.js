import Titles from "../UI/Titles/Titles";
// CSS
import styled from "styled-components";
// Components
import ServicesTable from "./ServicesTable/ServicesTable";

const Container = styled.section`
  position: relative;
  background-color: #fff;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 80px;

  padding-bottom: 500px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Services = () => {
  return (
    <Container>
      <Content>
        <Titles
          h2="Nossos Serviços"
          h3="EXPERIÊNCIA"
          color="#505050"
          left="144px"
        />

        <ServicesTable />
      </Content>
    </Container>
  );
};

export default Services;
