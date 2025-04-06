import { useFormik } from "formik";
import * as Yup from 'yup';
import Input from "../Input/Input";
import { EmployeeFormComponent, Title } from "./styles";
import { EmployeeFormValues } from "./types";
import Button from "../Button/Button";

function EmployeeForm() {

const schema = Yup.object().shape({
  fullName: Yup.string()
  .required('Field Full Name is required')
  .min(5, 'Min 5 symbols')
  .max(50, 'Max 50 symbols'),
  age: Yup.number()
  .required('Field age is required')
  .typeError('Field age must be a number')
  .positive('Age must be positive')
  .min(18, 'Min 18')
  .max(80, 'Max 80')
})

  const formik = useFormik({
    initialValues: {
      fullName: '',
      age: ''
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

  console.log(formik);

  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <Title>Employee Form</Title>
      <Input
        name="fullName"
        label="Full name*"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        error={formik.errors.fullName}
      />
      <Input 
      name="age" 
      label="Age*" 
      value={formik.values.age} 
      onChange={formik.handleChange} 
      error={formik.errors.age}
      />
      <Button name='CREATE' />
    </EmployeeFormComponent>
  );
}
export default EmployeeForm;
