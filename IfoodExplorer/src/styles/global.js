import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body{
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  -webkit-font-smoothing: antialiased;
}


body, button {
        font-family: 'Poppins', sans-serif;
    }

    textarea, h1,h2,h3,h4,h5, input,a {
        font-family: 'Roboto', sans-serif;
        outline: none;
    }

a{
  text-decoration: none;
}

button, a{
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover{
  filter:brightness(0.9);
}

`