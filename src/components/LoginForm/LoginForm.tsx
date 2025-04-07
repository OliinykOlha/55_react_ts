import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormComponent, Title } from "./styles";
import { LoginFormValues } from "./types";

function LoginForm() {

    const schema = Yup.object().shape({
     email: Yup.string()
     .required('Field email is required')
     .email('Field has type email( @ )')
     .max(25, 'Max 25 symbols')
     .min(15, 'Min 15 symbols'),
     password: Yup.number()
     .typeError('Password must be a number')
     .required('Field password is required')
     .max(25, 'Max 255')
     .min(15, 'Min 155')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        } as LoginFormValues,
        validationSchema:schema,
        validateOnChange: false,
        // validateOnMount: true,
        onSubmit: (values: LoginFormValues)=>{
            console.table(values);
        }
    })

    console.log(formik);
    

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <Title>Login Form</Title>
      <Input 
      name="email" 
      label="Email" 
      placeholder="Enter your email"
      value={formik.values.email}
      onChange={formik.handleChange} 
      error={formik.errors.email}
      />
      <Input 
      name="password" 
      label="Password" 
      placeholder="Enter your password"
      value={formik.values.password}
      onChange={formik.handleChange} 
      error={formik.errors.password}
      />
      
      <Button name='LOGIN' />
    </LoginFormComponent>
  );
}

export default LoginForm
