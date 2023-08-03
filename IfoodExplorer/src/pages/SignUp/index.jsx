import { Container, Form } from './styles'
import Poligono from '../../assets/poligono.svg'
import { ButtonText } from '../../Components/ButtonText'
import { Button } from '../../Components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from "../../../../IfoodApi-main/src/services/api"

export function SignUp() {
  const navigate = useNavigate()
  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }
    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        }
        else {
          alert('Não foi possível cadastrar')
        }
      })
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <div >
        <img className='up' src={Poligono} alt="logo" />
        <h1>
          food explorer
        </h1>
      </div>
      <Form className="login">
        <h2>Crie sua conta</h2>
        <label htmlFor="name">
          Seu nome
        </label>
        <input
          type="text"
          id='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Exemplo: Maria da Silva' />
        <label htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id='email'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          onChange={(e) => setEmail(e.target.value)} />
        <label className="labels" htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          id='password'
          placeholder='No mínimo 6 caracteres'
          onChange={(e) => setPassword(e.target.value)} />
        <Button title='Entrar' onClick={handleSignUp} />
        <Link to='/' className='btText2' >
          <h1>
            Já tenho uma conta
          </h1>
        </Link>
      </Form>
    </Container>
  )
}


