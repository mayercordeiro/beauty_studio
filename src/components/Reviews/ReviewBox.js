import styled from "styled-components";

const BoxReview = styled.div`
  position: relative;
  min-width: 510px;
  height: 282px;
  display: inline-block;
  margin: 16px 32px 16px 0;
  transition: all 0.5s ease;

  @media screen and (max-width: 650px) {
    min-width: 368px;
  }

  &:last-child {
    margin-right: 0px;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      transform: scale(105%);
    }
  }
`;

const GoldSquare = styled.div`
  width: 186px;
  height: 159px;
  position: absolute;
  left: 0;
  top: 76px;
  border: 5px solid #c59d5f;

  @media screen and (max-width: 650px) {
    width: 134px;
    height: 115px;
    top: 52px;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 350px;
  height: 282px;
  right: 0;
  top: 0;

  background: #fff;
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.2);

  padding: 44px 8px 8px 50px;

  > p {
    font-size: 16px;

    @media screen and (max-width: 650px) {
      font-size: 14px;
    }
  }

  > p:last-child {
    margin-top: 8px;
    font-size: 14px;
  }

  @media screen and (max-width: 650px) {
    width: 253px;
    height: 203px;
    padding: 16px 8px 8px 46px;
  }
`;

const PhotoFrame = styled.div`
  width: 156px;
  height: 156px;

  @media screen and (max-width: 650px) {
    width: 112px;
    height: 112px;
    top: 34px;
  }

  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 13px 8px rgb(0 0 0 / 20%);

  position: absolute;
  top: 50px;
  left: 30px;
`;

const ReviewBox = (props) => {
  return (
    <BoxReview>
      <GoldSquare />
      <Content>
        <p>{props.text}</p>
        <p>{props.author}</p>
      </Content>
      <PhotoFrame image={props.image} />
    </BoxReview>
  );
};

export default ReviewBox;
