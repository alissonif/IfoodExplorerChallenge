import { Container } from "./styles";

export function ButtonText({ title, isactive = false, icon: Icon, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
      $isactive={isactive.toString()}>
      {Icon && <Icon size={32} />}
      <h2>{title}</h2>
    </Container>
  );
}  