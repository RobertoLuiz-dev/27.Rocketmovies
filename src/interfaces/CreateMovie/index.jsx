import { 
  Container, MainContent, Form, TagsBar, AddTag, ButtonGroup, PageTitle, InputRow 
} from './style';
import { Header } from '../../components/Header';
import { StyledLink } from '../../components/StyledLink';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <MainContent>
        <StyledLink to="/home">Voltar</StyledLink>
        <PageTitle>Novo Filme</PageTitle>

        <Form>
          <InputRow>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </InputRow>

          <TextArea placeholder="Observações" />

          <h2>Marcadores</h2>

          <TagsBar>
            <Tag title="React" />
            <AddTag>+ Adicionar marcador</AddTag>
          </TagsBar>

          <ButtonGroup>
            <Button title="Excluir filme" variant="delete" />
            <Button title="Salvar alterações" />
          </ButtonGroup>
        </Form>       
      </MainContent>
    </Container>
  );
}