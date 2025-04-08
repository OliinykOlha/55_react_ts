import styled from "@emotion/styled";

export const ValidationFormComponent = styled.form`
display: flex;
flex-direction: column;
gap: 30px;
width: 500px;
padding: 30px;
background-color: rgb(204, 227, 250);
border: 3px solid white ;
border-radius: 6px;
`

export const Title = styled.div`
font-size: 25px;
font-weight: bold;
align-self: center;
`

export const CheckboxContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const Checkbox = styled.input`
height: 25px;
width: 25p;
`
export const CheckboxLabel = styled.label`
font-size: 20px;
`;

export const ErrorMessage = styled.div`
color: red;
font-weight: bold;
font-size: 15px;
`