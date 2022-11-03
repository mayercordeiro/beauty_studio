// CSS
import styled from "styled-components";
// Components
import Titles from "../UI/Titles/Titles";
import ServicesTable from "./ServicesTable/ServicesTable";

const Container = styled.section`
  position: relative;
  background-color: #fff;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 0 200px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Services = (props) => {
  const { servicesData } = props;

  return (
    <Container>
      <Content>
        <Titles
          h2="Nossos Serviços"
          h3="EXPERIÊNCIA"
          color="#505050"
          left="144px"
        />
        <ServicesTable servicesData={servicesData} />
      </Content>
    </Container>
  );
};

export default Services;
