import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  >svg{
  color: white;
  background-color: white;
}
`;

export const Content = styled.div`
position: relative;
width: 100%;
margin: auto;
.logo{
  width: 1120px;
  margin: 164px auto 62px;
  height: 260px;
  border-radius: 8px;
  background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
  gap: 20px;
  justify-content: center;
  display: flex;
  >img{
    width: 632px;
    height:406px;
    opacity: 0.800000011920929;
    margin-top: -146px;
    margin-left: -100px;
  }
.paragrafo{
  text-align: center;
  padding: 88px 100px 92px 0;
  > h2{
    color: var(--light-light-300, #E1E1E6);
    font-size: 40px;
    font-weight: 500;
    line-height: 140%; /* 56px */
}
  > p{
  color: var(--light-light-300, #E1E1E6);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%; /* 16px */
  }
}
}
`
export const RightArrowButton = styled.button`
  /* filter: blur(4px); */
  height: 462px;
  width: 185px;
  position: relative; 
  right: 100px;  
  background-color: rgba(0, 0, 0, 0.7); 
  color: white; 
  z-index: 2; 
  border: none;
  font-size:30px;
`;

export const LeftArrowButton = styled.button`
  /* filter: blur(4px); */
  height: 462px;
  width: 185px;
  position: relative; 
  left: 100px;
  background-color: rgba(0, 0, 0, 0.7); 
  color: white; 
  transition: box-shadow 0.3s ease;
  z-index: 2; 
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  border: none;
  font-size:30px;
`;

