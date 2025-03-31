import styled from "@emotion/styled";

interface MainButtonProps {
  isDanger?: boolean
}

export const MainButton = styled.button<MainButtonProps>`
width: 300px;
  height: fit-content;
  padding: 20px;
  background: ${({isDanger}) => isDanger? 'rgb(193, 7, 7)' : 'rgb(17, 48, 127)'};
  border: none;
  border-radius: 6px;
  font-size: 26px;
  color: white;
  cursor: pointer;
`




  