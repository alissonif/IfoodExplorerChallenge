import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

background: none;
border: none;
color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.GRAY_100 : theme.COLORS.RED};

text-align: center;

font-size: 14px;
font-weight: 500;
line-height: 24px; /* 171.429% */
`;