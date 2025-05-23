import styled from "@emotion/styled";

interface MainButtonStyledProps {
  isDanger?: boolean;
}

export const MainButton = styled.button<MainButtonStyledProps>`
 width: 100%; 
  /* width: 200px; */
  height: fit-content;
  padding: 20px;
  background: ${({ isDanger }) =>
    isDanger ? "rgb(193, 7, 7)" : "rgb(17, 48, 127)"};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  &:disabled {
  background-color: rgb(202, 200, 200);
  }
`;
