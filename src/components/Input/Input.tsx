import { ErrorMessage, InputComponent, InputContainer, Label } from './styles';
import { InputProps } from './types';

function Input({
  placeholder, 
  name, 
  value, 
  type='text', 
  onChange, 
  label, 
  id,
  search,
  error
}: InputProps)  {
    return (
    <InputContainer>
    <Label htmlFor={id}>{label}</Label>
    <InputComponent 
    name={name}
     className="input-component"
     value={value}
     type={type} 
     onChange={onChange}
    placeholder={placeholder} 
    id={id}
    isSearch = {search}
    /> 
    <ErrorMessage>{error}</ErrorMessage>
    </InputContainer> 
    )
  }
  
  export default Input;





