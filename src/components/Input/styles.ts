import styled from "@emotion/styled";

interface InputComponentProps {
isSearch?: boolean
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 300px;
  height: 50px;
  font-size: 18px;
  padding: 12px;
  outline: none;
  border: ${({ isSearch }) => isSearch? '16px' : 'px' };
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 20px;
`;
