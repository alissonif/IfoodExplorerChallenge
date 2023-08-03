import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  border: ${({ theme, isNew }) => isNew ? `1px dashed  ${theme.COLORS.GRAY_500}` : "none"};
  border-radius: 10px;
  > button {
    border: none;
    background: none;
    color:  ${({ theme }) => theme.COLORS.WHITE};
    padding: 10px 16px;
  }
  margin-right: 16px;
  > input {
    height: 32px;
    width: 118px;
    padding: 10px 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    font-size: 16px;
    font-weight: 400;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-weight: 400;
      font-size: 16px;
    }
  }
`;