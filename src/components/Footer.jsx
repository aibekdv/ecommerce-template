import styled from "styled-components";
import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Map,
  Phone,
  Twitter,
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: white;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
`;

const Logo = styled.h1`
  margin-bottom: 15px;
`;
const Desc = styled.p`
  margin-bottom: 15px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 15px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Pyment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-Bazar</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          consectetur incidunt accusantium, vero obcaecati perferendis!
        </Desc>
        <SocialContainer>
          <SocialIcon bg="C331A3">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="1877F2">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="1DA1F2">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Map style={{ marginRight: "10px" }} /> 331 Lenin avenue Osh Osh
          region, 723500
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +996 880 120 01 5
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> admin@ebazar.com
        </ContactItem>
        <Pyment src="https://cdn.shopify.com/s/files/1/0271/9426/1622/t/18/assets/Safe_Checkout_Badge.png?v=1627904816" />
      </Right>
    </Container>
  );
};

export default Footer;
