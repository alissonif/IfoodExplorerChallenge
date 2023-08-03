import { Container, Form } from './styles'
import Poligono from '../../assets/poligono.svg'
import { Button } from '../../Components/Button'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }
  return (
    <Container>
      <div >
        <img className='up' src={Poligono} alt="logo" />
        <h1>
          food explorer
        </h1>
      </div>
      <Form className="login">
        <h2>Faça login</h2>
        <label htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id='email'
          placeholder='Exemplo: exemplo@exemplo.com.br' onChange={e => setEmail(e.target.value)} />
        <label className="labels" htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          id='password'
          placeholder='No mínimo 6 caracteres'
          onChange={e => setPassword(e.target.value)} />

        <Button title='Entrar' onClick={handleSignIn} />

        <Link to='/register' className='btText2' >
          <h1>
            Criar uma conta
          </h1>
        </Link>
      </Form>
    </Container>
  )

}


