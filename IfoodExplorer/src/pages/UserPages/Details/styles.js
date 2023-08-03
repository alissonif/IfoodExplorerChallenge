import styled from 'styled-components'

export const Container = styled.header`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 104px auto;
grid-template-areas:
'header'
'content'
;

position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`
export const Goback = styled.div`
  margin: 24px 122px 42px  ;
  font-size: 24px;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  >button{
      display: flex;
      flex-direction: row;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`
export const Contente = styled.div`
.voltar{
  margin-top: 40px;
  display: flex;
  align-items: center;
  margin-bottom: -16px;
  margin-left: 122px;
}
`
export const Container2 = styled.div`
  display: flex;
  >img{
    margin-left:122px ;
  }
  .description{
      gap: 24px;
      margin-top: 45px;
      margin-left: 47px;
      h1>{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 40px;
        font-weight: 500;
                  
        line-height: 140%;  
      }
    >p{ 
        padding: 24px 0 24px 0;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 24px;
        font-weight: 400;
        line-height: 140%;
      }
  }
  .addCar{
    align-items: center;
    display: flex;
    padding-top:48px ;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
      /* Número */
      font-family: Roboto;
      font-size: 20px;
      font-weight: 700;
      line-height: 160%; /* 32px */
      span{
        padding: 0 14px ;
      }
      .button{
        width: 162px;
        height: 48px;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 5px;
        margin-left: 33px;
      }
    }
`