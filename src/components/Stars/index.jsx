import { Container } from "./style";

export function Stars({ rating, totalStars = 5, size = "1.8rem" }) {
  const stars = Array(totalStars)
    .fill(0)
    .map((_, index) => (index < rating ? "★" : "☆"));

  return (
    <Container aria-label={`Avaliação: ${rating} de ${totalStars} estrelas`} size={size}>
      {stars.join(" ")}
    </Container>
  );
}