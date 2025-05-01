import { useState } from "react";
import { Container } from "./style";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";

export function Header({ onSearch }) {
    const [search, setSearch] = useState(""); // Estado do input de busca
    const navigate = useNavigate(); // Hook para navegação dinâmica

    const handleChange = (event) => {
        setSearch(event.target.value);
        onSearch(event.target.value); // Passando o texto digitado para a Home
    };

    return (
        <Container>
            <div className="logo">
                {/* O RocketMovies redirecionando para a Home */}
                <h1 onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
                    RocketMovies
                </h1>
            </div>

            <div className="search">
                <Input 
                    placeholder="Pesquisar pelo título" 
                    value={search}
                    onChange={handleChange}
                />
            </div>

            <div className="user">
                <div className="info">
                    <strong>Roberto Luiz</strong>
                    <button>Sair</button>
                </div>

                {/* A imagem do usuário redirecionando para Profile */}
                <img
                    src="https://github.com/RobertoLuiz-dev.png"
                    alt="Imagem do usuário"
                    onClick={() => navigate("/profile")} 
                    style={{ cursor: "pointer" }}
                />
            </div>    
        </Container>
    );
}