import styled from "styled-components";
export const Container = styled.div`
  /* background: blue; */
  background: var(--dark-dark-400, #000A0F);
.voltar{
  margin-top: 40px;
  display: flex;
  align-items: center;
  margin-bottom: -16px;
  margin-left: -7px;
}
>h2{
  color: var(--light-light-300, #E1E1E6);
  font-size: 32px;
  font-weight: 500;
  }
input, textarea, select{
  border: none;
}
.tags{
  display: flex;
  flex-wrap: wrap;
  width: 837px;
  border-radius: 8px;
  background: var(--dark-dark-800, #0D161B);
  padding: 6px;
}
.form{
  margin:auto;
  display: flex;
  width: 1120px;
  flex-direction: column;
  gap: 32px;
}
margin:auto;
#name1{
  display: none;
  outline: none;
}
.divFormLine1{
  display: flex;
  gap: 32px;
}
.k{
  width: max-content;
  cursor: pointer;
}
h3{
  margin-bottom: 16px;
  color: var(--light-light-400, #C4C4CC);
  font-weight: 400;
}
.up{
  display: flex;
  padding: 10px 30px;
  border-radius: 8px;
  background: var(--dark-dark-800, #0D161B);
}
.divFormLine2{
  gap: 32px;
  display: flex;
  button{
  display: flex;
  border-radius: 8px;
  color: var(--light-light-100, #FFF);
  font-weight: 400;
  }
}
.button{
  margin-bottom: -66px;
  margin-right: -24px;
  margin-top: -20px;
  padding: 12px 24px;
  gap: 8px;
  border-radius: 5px;
  color: var(--light-light-100, #FFF);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  display: flex;
  justify-content: flex-end;
  >.button2{
  background: var(--tints-tomato-400, #AB4D55);
  font-weight: 400;
  }
  >.button3{
  background: transparent;
  font-weight: 400;
  border-radius: 5px;
background: var(--dark-dark-800, #0D161B);
  }
}
form{
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.divForm2{
  width: 463px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  >input{
    height: 48px;
    padding: 12px 14px;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border-radius: 8px;
    background: var(--dark-dark-800, #0D161B);
    color: var(--light-light-500, #7C7C8A);
    font-weight: 400;
      }
}
.divForm3{
  width: 364px;
  display: flex;
  flex-direction: column;
  justify-content: center;
>input{
  display: flex;
  height: 48px;
  padding: 16px;
  align-items: center;
  gap: 14px;
}
select {
  display: flex;
  height: 48px;
  padding: 14px;
  align-items: center;
  gap: 14px;
  align-self: stretch;
  border-radius: 5px;
  background: var(--dark-dark-800, #0D161B);
  color: var(--light-light-400, #C4C4CC);
  font-size: 14px;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
}
}
.divForm4{
  justify-content: center;
  border:none;
  width: 251px;
  display: flex;
  flex-direction: column;
  >input{
  display: flex;
  height: 48px;
  padding: 12px 14px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--dark-dark-800, #0D161B);
  color: var(--light-light-500, #7C7C8A);
  font-weight: 400;
  }
}
`;