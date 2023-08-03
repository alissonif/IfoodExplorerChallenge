import { Link } from 'react-router-dom'

import Um from "../../assets/comida/1.png";
import Dois from "../../assets/comida/2.png";
import Tres from "../../assets/comida/3.png";
import Quatro from "../../assets/comida/4.png";
import Cinco from "../../assets/comida/5.png";
import Seis from "../../assets/comida/6.png";
import Sete from "../../assets/comida/1.png";
import Oito from "../../assets/comida/2.png";

import Menos from '../../assets/menos.svg';
import Mais from '../../assets/mais.svg';
import Favoritos from '../../assets/favoritos.svg';

import { Button } from '../Button';

import { RiHeart3Line } from "react-icons/ri";
import { BiSolidChevronRight } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import { PiPencilSimpleBold } from "react-icons/pi";

import { Container } from "./styles";

export function Card({ data, ...rest }) {

  return (
    <Container>
      <div  >
        <div className="favoritos-1">
          {/* <img src={Favoritos} alt="Salada" className="favoritos" /> */}
          <Link to='/details'>
            <img src={Um} alt="" />
          </Link>
          <span className="favoritos-2"><Link to='/edit'><a href=""><PiPencilSimpleBold size={26} /></a></Link></span>
          <h2>Spaguetti Gambe  <AiOutlineRight size={15} fontWeight={500} /> </h2>
          <p>
            Massa fresca com camarões e pesto.
          </p>
          <h1>R$ 79,97</h1>
          <div className='addCar'>
            <img src={Menos} alt="menos" />
            <span>01</span>
            <img src={Mais} alt="menos" /> <Button className='button' title='incluir' />
          </div>
        </div>
      </div>
      <div className="card">

      </div>
    </Container>
  )
}