import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsItter from "../components/NewsItter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin-bottom: 10px;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const FilterItem = styled.div`
  display: flex;
  align-items:center;
`;
const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
`;
const Select = styled.select`
  padding: 5px 10px;
  margin-right: 15px;
  outline: none;
  cursor: pointer;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Filter>
        <Title>Dresses</Title>
        <FilterContainer>
          <FilterItem>
            <FilterText>Filter: </FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>Red</Option>
              <Option>Black</Option>
              <Option>Green</Option>
              <Option>Gray</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>X</Option>
              <Option>XLL</Option>
              <Option>XL</Option>
            </Select>
          </FilterItem>
          <FilterItem>
            <FilterText>Sorted: </FilterText>
            <Select>
              <Option disabled selected>
                Price
              </Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </FilterItem>
        </FilterContainer>
      </Filter>

      <Products />
      <NewsItter />
      <Footer />
    </Container>
  );
};

export default ProductList;
