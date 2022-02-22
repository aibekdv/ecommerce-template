import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 10px;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.length
        ? popularProducts.map((item) => <Product key={item.id} item={item} />)
        : "PRODUCT DOESN`N EXIST"}
    </Container>
  );
};

export default Products;
