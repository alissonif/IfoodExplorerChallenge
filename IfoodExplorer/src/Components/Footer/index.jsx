import { Container } from './styles';
import PoligonoFooter from '../../assets/poligonoFooter.svg'
export function Footer() {
  return (
    <Container>
      <div >
        <img src={PoligonoFooter} alt="poligonoFooter" />
        <h1>food explorer</h1>
      </div>
      <span>© 2022 - Todos os direitos reservados.</span>
    </Container>
  )
}