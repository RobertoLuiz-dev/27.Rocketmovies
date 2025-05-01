import { useState } from "react";
import { Container, Section, NotesList, NoteItem } from "./style";
import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Link, useNavigate } from "react-router-dom";
import { movies } from "../../data/movies"; 

export function Home() {
    const navigate = useNavigate(); // Hook para navegação dinâmica
    const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o texto da pesquisa

    // Filtrando os filmes com base no que foi digitado
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Header onSearch={setSearchTerm} />

            <Section>
                <header>
                    <h1>Meus filmes</h1>
                    <Link to="/create-movie"><button>+ Adicionar filme</button></Link>
                </header>

                <NotesList>
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((note) => (
                            <NoteItem key={note.id}>
                                <h2 onClick={() => navigate(`/movie-preview/${note.id}`)} style={{ cursor: "pointer"}}>
                                    {note.title}
                                </h2>
                                <Stars rating={note.stars} />
                                <p>{note.description}</p>
                                <footer>
                                    {note.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </footer>
                            </NoteItem>
                        ))
                    ) : (
                        <p>Filme não encontrado.</p>
                    )}
                </NotesList>
            </Section>
        </Container>
    );
}