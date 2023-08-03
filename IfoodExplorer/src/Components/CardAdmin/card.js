import styled from "styled-components";

export default styled.div`
width: 100%;
margin-right: 27px;
display: flex;
height: 462px;
padding: 24px;
flex-direction: column;
align-items: center;
gap: 24px;
border-radius: 8px;
border: 1px solid var(--dark-dark-300, #000204);
background-color: #00070A;
text-align: center;
img{
  width: 176px;
  height: 176px;
}
h2{
  text-align: center;
  width: 256px;
  color: var(--light-light-300, #E1E1E6);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
}
p{
  color: var(--light-light-400, #C4C4CC);
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
}
img:first-child{
  margin: 13px;
  width: 176px;
  height: 176px;
  flex-shrink: 0;
}
.addCar{
    align-items: center;
    display: flex;
    padding-top:23px ;
    padding-bottom:15px;
    padding-left: 15px;
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
        display: flex;
        width: 92px;
        height: 48px;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 5px;
        margin-left: 33px;
        color: var(--light-light-100, #FFF);
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px; /* 171.429% */
      }
      img{
        width: 24px;
        height: 24px;
      }
    }
h1{
  height: 52px;
  color: var(--tints-cake-200, #82F3FF);
  text-align: center;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 400;
  line-height: 160%; /* 51.2px */
}
.favoritos-1{
  position: relative;
}
.favoritos-2{
  position: absolute;
  top: 0;
  right: 0;
}
`;