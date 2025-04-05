import styled from "@emotion/styled";

interface InputComponentProps {
isSearch?: boolean
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 250px;
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 60px;
  font-size: 18px;
  padding: 12px;
  outline: none;
  border: ${({ isSearch }) => isSearch? '16px' : 'px' };
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
height:20px;
font-size: 18px;
color: red;
`
