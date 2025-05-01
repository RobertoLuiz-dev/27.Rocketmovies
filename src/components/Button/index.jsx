import { Container } from "./style";

export function Button({ title, loading = false, variant }) {
    return (
        <Container type="button" disabled={loading} aria-disabled={loading} variant={variant}>
            {loading ? "Carregando..." : title}
        </Container>
    );
}