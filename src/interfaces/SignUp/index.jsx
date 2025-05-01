import React from "react";
import { Container, Content, Brand, Form, Title, InputGroup, ActionGroup, StyledLink, BackgroundImage } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <Content>
        <Brand>
          <h1>RocketMovies</h1>
          <p>Crie sua conta e comece a acompanhar seus filmes favoritos!</p>
        </Brand>
        <Form>
          <Title>Crie sua conta</Title>
          <InputGroup>
            <Input placeholder="Nome" type="text" icon={FiUser} />
            <Input placeholder="E-mail" type="email" icon={FiMail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />
          </InputGroup>
          <ActionGroup>
            <Button title="Cadastrar" />
            <StyledLink to="/signin">Voltar para login</StyledLink>
          </ActionGroup>
        </Form>
      </Content>
      <BackgroundImage />
    </Container>
  );
}