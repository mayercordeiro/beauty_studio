import { useState } from "react";
// CSS
import styled from "styled-components";
// Components
import CiliosContent from "./Content/CiliosContent";

const Services = styled.div`
  width: 100%;
  height: 100px;
  color: #fff;
  margin: 80px 0 40px 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    font-size: 24px;
    color: #505050;
    cursor: pointer;
  }

  .active {
    color: #c59d5f;
    border-bottom: 2px solid #c59d5f;
    padding-bottom: 2px;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const ServicesTable = () => {
  const [activeTab, setActiveTab] = useState("cilios");

  const handleTabCilios = () => {
    setActiveTab("cilios");
  };

  const handleTabSobrancelhas = () => {
    setActiveTab("sobrancelhas");
  };

  const handleTabMaquiagem = () => {
    setActiveTab("maquiagem");
  };

  return (
    <>
      <Services>
        <span
          className={activeTab === "cilios" ? "active" : ""}
          onClick={handleTabCilios}
        >
          CÍLIOS
        </span>
        <span
          className={activeTab === "sobrancelhas" ? "active" : ""}
          onClick={handleTabSobrancelhas}
        >
          SOBRANCELHAS
        </span>
        <span
          className={activeTab === "maquiagem" ? "active" : ""}
          onClick={handleTabMaquiagem}
        >
          MAQUIAGEM
        </span>
      </Services>

      <Content>
        {activeTab === "cilios" && <CiliosContent service="Cilios" />}
        {activeTab === "sobrancelhas" && (
          <CiliosContent service="Sobrancelhas" />
        )}
        {activeTab === "maquiagem" && <h1>###</h1>}
      </Content>
    </>
  );
};

export default ServicesTable;
