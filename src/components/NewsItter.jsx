import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 20px;
  text-transform: uppercase;
  ${mobile({ textAlign: "center" })}
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "90%" })}
`;
const Input = styled.input`
  flex: 8;
  height: 90%;
  outline: none;
  border: none;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: teal;
  color: white;
`;

const NewsItter = () => {
  return (
    <Container>
      <Title>NEWS IN THE NEWS</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </Description>
      <InputContainer>
        <Input placeholder="Your email..." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsItter;
