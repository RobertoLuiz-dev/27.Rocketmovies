import { 
  Container, Content, TitleContainer, Title, Details, ReviewSection, ReviewText, AuthorInfo, TagsContainer 
} from "./style";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { StyledLink } from "../../components/StyledLink";
import { useParams } from "react-router-dom";
import { movies } from "../../data/movies"; 

export function MoviePreview() {
  const { id } = useParams(); // Captura o ID da URL
  const movie = movies.find(movie => movie.id === Number(id)); // Busca o filme correto na lista compartilhada

  return (
    <Container>
      <Header />

      <Content>
        <StyledLink to="/home">Voltar</StyledLink>

        {movie ? (
          <>
            <TitleContainer>
              <Title>{movie.title}</Title>
              <Stars rating={movie.stars} />
            </TitleContainer>

            <AuthorInfo>
              <strong>Por {movie.author}</strong>
              <span>Postado em {movie.date}</span>
            </AuthorInfo>

            <TagsContainer>
              {movie.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </TagsContainer>

            <Details>
              <ReviewSection>
                {/* ReviewText exibe dinamicamente o mesmo texto do description da Home */}
                <ReviewText>{movie.description}</ReviewText>
              </ReviewSection>
            </Details>
          </>
        ) : (
          <p>Filme não encontrado.</p>
        )}
      </Content>
    </Container>
  );
}