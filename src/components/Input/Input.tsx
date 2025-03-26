import './styles.css';
import { InputProps } from './types';

function Input({
  placeholder, 
  name, 
  value, 
  type='text', 
  onChange, 
  label, 
  id
}: InputProps)  {
    return (
    <div className='input-container'>
    <label htmlFor={id}>{label}</label>
    <input 
    name={name}
     className="input-component"
     value={value}
     type={type} 
     onChange={onChange}
    placeholder={placeholder} 
    id={id}
    /> 
    </div> 
    )
  }
  
  export default Input;





