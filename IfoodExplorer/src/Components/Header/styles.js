import styled from 'styled-components'

export const Container = styled.header`
grid-area: header;
height: 104px;
width: 100%;
display: flex;
padding: 24px 123px;
align-items: center;
gap: 32px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
font-weight: 500;
display: flex;
justify-content: space-between;
.left{
  display: flex;
  gap: 10px;
}
.right{
  display: flex;
  gap: 32px;
}
h1{
  width: max-content;  
}
.sair{
  cursor: pointer;
  >svg{
    width: 32px;
    height: 32px;
  }
  margin: auto;
}
`