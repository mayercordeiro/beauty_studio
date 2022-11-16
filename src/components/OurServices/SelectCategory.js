import { useEffect, useState } from "react";
// CSS
import styled from "styled-components";

const Services = styled.div`
  width: 100%;
  height: 100px;
  color: #fff;
  margin-top: 40px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-evenly;

  span {
    position: relative;
    font-size: 24px;
    color: #505050;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #c59d5f;
    }

    &::after {
      content: "";
      background: #c59d5f;
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }

    @media screen and (max-width: 530px) {
      font-size: 16px;
    }
  }

  .active {
    color: #c59d5f;
    border-bottom: 2px solid #c59d5f;
    padding-bottom: 2px;
  }
`;

const SelectCategory = (props) => {
  const [activeTab, setActiveTab] = useState("Cilios");

  const handleTabCilios = () => {
    setActiveTab("Cilios");
  };

  const handleTabSobrancelhas = () => {
    setActiveTab("Sobrancelhas");
  };

  const handleTabMaquiagem = () => {
    setActiveTab("Maquiagem");
  };

  useEffect(() => {
    props.handleCategory(activeTab);
  }, [activeTab]);

  return (
    <Services>
      <span
        className={activeTab === "Cilios" ? "active" : ""}
        onClick={handleTabCilios}
      >
        CÍLIOS
      </span>
      <span
        className={activeTab === "Sobrancelhas" ? "active" : ""}
        onClick={handleTabSobrancelhas}
      >
        SOBRANCELHAS
      </span>
      <span
        className={activeTab === "Maquiagem" ? "active" : ""}
        onClick={handleTabMaquiagem}
      >
        MAQUIAGEM
      </span>
    </Services>
  );
};

export default SelectCategory;
