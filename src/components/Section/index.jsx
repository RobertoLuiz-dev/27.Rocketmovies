import { Container } from "./style";

export function Section({ title, children, margin, padding }) {
    return (
        <Container margin={margin} padding={padding}>
            <h2 aria-label={title}>{title}</h2>
            {children}
        </Container>
    );
}