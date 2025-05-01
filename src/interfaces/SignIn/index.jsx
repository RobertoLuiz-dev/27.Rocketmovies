import React from "react";
import { Container, Content, Brand, Form, Title, InputGroup, ActionGroup, StyledLink, BackgroundImage } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Content>
        <Brand>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </Brand>
        <Form>
          <Title>Faça seu login</Title>
          <InputGroup>
            <Input placeholder="E-mail" type="email" icon={FiMail} />
            <Input placeholder="Senha" type="password" icon={FiLock} />
          </InputGroup>
          <ActionGroup>
            <Button title="Entrar" />
            <StyledLink to="/signup">Criar uma conta</StyledLink>
          </ActionGroup>
        </Form>
      </Content>
      <BackgroundImage />
    </Container>
  );
}