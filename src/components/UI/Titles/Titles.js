import styled from "styled-components";

const Title = styled.div`
  z-index: 2;

  h2 {
    font-size: 48px;
    margin-top: -4px;
    color: ${(props) => props.color};

    @media screen and (max-width: 648px) {
      font-size: 2.6rem;
    }

    @media screen and (max-width: 648px) {
      line-height: 115%;
      margin-top: 10px;
    }
  }

  span {
    position: relative;
    font-size: 16px;
    padding-left: 32px;
    color: ${(props) => props.color};

    &::before {
      content: "";
      width: 25px;
      height: 1px;
      background-color: ${(props) => props.color};
      position: absolute;
      top: 45%;
      left: 1px;
    }

    &::after {
      content: "";
      width: 25px;
      height: 1px;
      background-color: ${(props) => props.color};
      position: absolute;
      top: 45%;
      left: ${(props) => props.left};
    }
  }
`;

const Titles = (props) => {
  return (
    <Title color={props.color} left={props.left}>
      <span>{props.h3}</span>
      <h2>{props.h2}</h2>
    </Title>
  );
};

export default Titles;
