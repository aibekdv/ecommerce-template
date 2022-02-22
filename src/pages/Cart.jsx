import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  color: ${(props) => props.type === "filled" && "white"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "white")};
  border: ${(props) => props.type === "filled" && "none"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

const ProductDetail = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
`;

const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all .4s ease;
  &:hover {
    background-color: teal;
  }
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOU BAG</Title>
        <Top>
          <TopButton>COUNTINUE SHOPING</TopButton>
          <TopTexts>
            <TopText>Shoping Bag(2)</TopText>
            <TopText>Your Wishlist(1)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1521330784804-5f69f8a17b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSI SHOES
                  </ProductName>
                  <ProductId>
                    <b>ProductID:</b> 24132421432
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://media.istockphoto.com/photos/attractive-businessmen-on-the-street-picture-id1065840316?b=1&k=20&m=1065840316&s=170667a&w=0&h=tZ50VkTire3B0aDfmUJGPFG5x0s_VO_yyovkd-_WEis=" />
                <Details>
                  <ProductName>
                    <b>Product:</b> DEAD SHOES
                  </ProductName>
                  <ProductId>
                    <b>ProductID:</b> 32414325
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> XS
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 100</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 130</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimeted shiping</SummaryItemText>
              <SummaryItemPrice>$ $ 5.6</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount shiping</SummaryItemText>
              <SummaryItemPrice>$ -5.6</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total price</SummaryItemText>
              <SummaryItemPrice>$ 130</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
