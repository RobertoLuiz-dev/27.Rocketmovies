import { Container } from "./style";

export function Tag({ title, bgColor }) {
    return (
        <Container bgColor={bgColor}>
            {title}
        </Container>
    );
}