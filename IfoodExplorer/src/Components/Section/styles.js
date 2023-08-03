import styled from 'styled-components';
export const Container = styled.section`
margin: 56px 0 28px ;
>h2{
  margin-left: 102px;
  padding-bottom:16px ;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_100} ;
  font-size: 20px;
  font-weight: 400;
}
`
export const Content = styled.section`
>h2{
  margin-left: 102px;
  padding-bottom:16px ;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_100} ;
  font-size: 20px;
  font-weight: 400;
}
  /* Adicionar sombra na lateral esquerda */
  .shadow-section::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 2400px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); /* Gradiente para sombra */
  }
  /* Adicionar sombra na lateral direita */
  .shadow-section::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px; /* Largura da sombra (ajuste conforme desejado) */
    /* height: 100%; */
    width: 500px;
    height: 2400px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); /* Gradiente para sombra */
  }
`;

export const RightArrowButton = styled.button`
  /* filter: blur(4px); */
  /* Adicionar sombras e posicionar sobre os cards ao lado */
  height: 462px;
  width: 185px;
  position: relative; /* Mudar para relative */
  right: 100px; /* Ajustar o valor do right para posicionar sobre os cards ao lado */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1); */
  background-color: rgba(0, 0, 0, 0.7); /* Cor de fundo (se desejar) */
  color: white; /* Mudar a cor das setas para branco */
  /* transition: box-shadow 0.3s ease; */
  z-index: 2; /* Aumentar o z-index para colocar as setas acima dos cards */
  /* Adicionar sombreamento ao botão ao passar o mouse */
/* filter: opacity(0.6); */
  border: none;
  font-size:30px;
`;