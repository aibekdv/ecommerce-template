import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategorieItem from "./CategorieItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.length
        ? categories.map((item) => <CategorieItem key={item.id} item={item} />)
        : "CATEGORIES DOESN`T EXIST"}
    </Container>
  );
};

export default Categories;
