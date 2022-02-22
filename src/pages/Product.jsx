import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsItter from "../components/NewsItter";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
`;
const Button = styled.button`
  border: 2px solid teal;
  background-color: white;
  font-weight: 500;
  padding: 10px;
  transition: all 0.5s ease;
  border-radius: 4px;
  &:hover {
    background-color: #f8f4f4;
    cursor: pointer;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        {/* IMAGE PRODUCT */}
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1623515814151-5e2b74630b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=472&q=80" />
        </ImgContainer>
        {/* INFO CONTAINER PRODUCT */}
        <InfoContainer>
          <Title>Lorem, ipsum dolor.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            magni, neque ab dolorum ut hic quidem non nemo voluptates ea eum
            assumenda dolorem ex dicta mollitia provident est. Ipsum, quam.
          </Desc>
          <Price>$ 20</Price>
          {/* Filter  */}
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="red" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>X</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>XLL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          {/* ADD TO CART BUTTON */}
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsItter />
      <Footer />
    </Container>
  );
};

export default Product;
