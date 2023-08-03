import Um from "../../assets/comida/1.png";

import Menos from '../../assets/menos.svg';
import Mais from '../../assets/mais.svg';
import { AiOutlineRight } from "react-icons/ai";
import { RiHeart3Line } from "react-icons/ri";

import { Button } from '../../Components/Button';
import { Container } from "./styles";

import { Link } from "react-router-dom";
// import { api } from "../../../IfoodApi-main/src/services/api";
// import { useAuth } from '../../hooks/auth';
// import { useNavigate } from 'react-router-dom';

export function Card({ data, ...rest }) {

  // const imageURl = `${api.defaults.baseURL}/files/${data.img}`
  // const { user } = useAuth();
  // const navigate = useNavigate();

  return (
    <Container {...rest}>
      <div  >
        <div className="favoritos-1">
          <Link to='/details'>
            {/* <img src={imageURl} alt={data.title} /> */}
            <img src={Um} alt="" />
          </Link>
          <span className="favoritos-2"><RiHeart3Line size={26} /></span>

          <h2>Spaguetti Gambe  <AiOutlineRight size={15} fontWeight={500} /> </h2>
          {/* <h2>{data.title}  <AiOutlineRight size={15} fontWeight={500} /> </h2> */}
          <p>
            Massa fresca com camarões e pesto.
            {/* {data.description} */}
          </p>
          <h1> R$ 79,97</h1>
          {/* <h1>{data.price}</h1> */}
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