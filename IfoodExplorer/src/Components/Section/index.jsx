import { Container } from "./styles";

export function Section({ title, children }) {
  return (
    <Container>
      <div ></div>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}