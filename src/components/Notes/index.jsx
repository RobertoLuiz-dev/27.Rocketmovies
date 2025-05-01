import { Container } from "./style";
import { Tag } from "../Tag";

export function Notes({ data = {}, ...rest }) {
  return (
    <Container {...rest}>
      <h1 aria-label={data.title || "Sem título"}>{data.title || "Sem título"}</h1>
      {data.tags?.length && (
        <footer>
          {data.tags.map((tag, index) => (
            <Tag key={index} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}