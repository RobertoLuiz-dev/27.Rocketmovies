import { Container, StyledLink, Content, ProfileImage, InputContainer, StyledInput, SaveButton } from "./style";
import { FiCamera } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
        
      <StyledLink to="/home">Voltar</StyledLink>
      
      <Content>
      
        <ProfileImage>
          <img src="https://github.com/RobertoLuiz-dev.png" alt="imagem do usuario"/>
          <button className="camera-icon"><FiCamera size={24} /></button>
        </ProfileImage>

        <InputContainer>
          <StyledInput type="text" placeholder="Nome" defaultValue="Roberto Luiz" />
          <StyledInput type="email" placeholder="E-mail" defaultValue="123456789" />
          <StyledInput type="password" placeholder="Senha atual" />
          <StyledInput type="password" placeholder="Nova senha" />
        </InputContainer>

        <SaveButton>Salvar</SaveButton>
      </Content>
    </Container>
  );
}