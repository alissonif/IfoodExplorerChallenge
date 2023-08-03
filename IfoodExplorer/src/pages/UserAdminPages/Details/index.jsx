import { Link } from 'react-router-dom'

import { Container, Container2, Goback, Contente } from './styles'

import { useParams } from "react-router-dom";
import { useState } from "react";
import { PiCaretLeftBold } from 'react-icons/pi'

import { Header } from '../../../Components/HeaderAdmin'
import { Footer } from '../../../Components/Footer'
import { Tag } from '../../../Components/Tag';
import { ButtonText } from '../../../Components/ButtonText';

import Salada from '../../../assets/salada.svg';
import { Button } from '../../../Components/Button';

export function Details() {

  const [data, setData] = useState(null);

  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Contente>
          <div>
            <ButtonText icon={PiCaretLeftBold} title='voltar' className="voltar" iconSize={32} to='/' />
          </div>
          <Container2>
            <img src={Salada} alt="Salada" />
            <div className='description'>
              <h1>Salada Ravanello</h1>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados<br />  com gergelim. O pão naan dá um toque especial.</p>
              <div>
                <Tag title='alface' />
                <Tag title='cebola' />
                <Tag title='pão naan' />
                <Tag title='pepino' />
                <Tag title='rabanete' />
                <Tag title='tomate' />
              </div>
              <div className='addCar'>
                <Button to='/edit' className='button' title='Editar prato' />
              </div>
            </div>
          </Container2>
        </Contente>
      </main>
      <Footer />
    </Container>
  )
}

export default Details


