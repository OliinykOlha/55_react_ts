import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import './styles.css'

function HomeWork08 () {

 const [password, setPassword] = useState<string>('');
const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
}

const [showPassword, setShowPassword ] = useState<boolean>(false);
const showPasswordHandler = () => {
    setShowPassword(!showPassword)
}



    return (
        <div className="password-card-container">
            <h2>Change password</h2>
            <label>Password</label>
            <Input 
            name="inputPassword"
            placeholder="Enter your password"
            type= "password"
            value={password}
            onChange={onChangePassword} />
            <Button name="Show Password" onClick={showPasswordHandler}/>
            {showPassword && <div>{password}</div>}
            
        </div>
    )
}


export default HomeWork08;