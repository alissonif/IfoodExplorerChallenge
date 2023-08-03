import styled from 'styled-components'

export const Container = styled.header`
/* position: fixed; */
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
p{
  margin-top: 30px;
  margin-left: -40px;
  width: 34px;
  height: 20px;
  color: var(--tints-cake-200, #82F3FF);

  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  background-color: transparent;
  border: none;
}
img{
  margin-top: -10px;
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