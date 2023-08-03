import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { Input } from "../Input";
import { Button } from '../Button/index';

import Poligono from '../../assets/poligono.svg'
import { FiSearch, FiLogOut } from "react-icons/fi";

export function Header() {
  const { signOut } = useAuth();
  return (
    <Container >
      <div className="left" >
        <img src={Poligono} alt="logo" />
        <h1>
          food explorer
        </h1>
        <p className="paragrafo">admin</p>
      </div>
      <Input className='input' icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
      <div className="right">
        <Button title='Novo prato' to='/new' />
        {/* <img src={Logout} alt="logo" /> */}
        <div className="sair" onClick={signOut}>
          <FiLogOut />
        </div>
      </div>
    </Container>
  );
}

