import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s ease;

`;

const Container = styled.div`
  min-width: 260px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dff4fa;
  position: relative;
  transition: all .5s ease;
  
  &:hover ${Info}{
    opacity:1;
  }
`;
const Circle = styled.div`
  width: 260px;
  height: 260px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  height: 80%;
  z-index: 2;
  object-fit: none;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
