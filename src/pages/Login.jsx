import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.9)
    ),
    url("./bg.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  background-color: teal;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: underline;
  font-size: 12px;
  text-transform: uppercase;
  margin: 3px 0px;
  cursor: pointer;
  color: black;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="User name" type="text" />
          <Input placeholder="Password" type="password" />
          <Button>LOGIN</Button>
          <Link href="/">Do not you remember the password?</Link>
          <Link href="/">Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
