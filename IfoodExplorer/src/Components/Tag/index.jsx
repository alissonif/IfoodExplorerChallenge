import { Container } from "./styles";

export function Tag({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest} className="icon">
      {title}
      {Icon && <Icon size={13} />}
    </Container>
  )
}