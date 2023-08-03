import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { Input } from "../Input";
import { Button } from '../Button/index';

import Poligono from '../../assets/poligono.svg'
import Pedido from '../../assets/pedido.svg'
import { RiSearchLine, } from "react-icons/ri";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiSignOut } from "react-icons/pi";

export function Header() {
  const { signOut } = useAuth();
  return (
    <Container >
      <div className="left">
        <img src={Poligono} alt="logo" />
        <h1>
          food explorer
        </h1>
      </div>
      <Input className='input' icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
      <div className="right">
        <Button icon={Pedido} title='Pedidos (0)' />
        <div className="sair" onClick={signOut}>
          <FiLogOut />
        </div>
      </div>
    </Container>
  );
}

