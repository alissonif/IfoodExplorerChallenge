import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
display: flex;
width: 216px;
padding: 12px 32px;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;

border-radius: 5px;
background-color: ${({ theme }) => theme.COLORS.RED};

color: ${({ theme }) => theme.COLORS.WHITE};
text-align: center;
 font-size: 14px;
 
font-weight: 500;
line-height: 24px;
border: none;

&:disabled {
        opacity: 0.5;
    }
`