import { useFormik } from "formik";
import * as Yup from 'yup';

import Input from "../Input/Input";
import { Checkbox, CheckboxContainer, CheckboxLabel, EmployeeFormComponent, Title , ErrorMessage} from "./styles";
import { EmployeeFormValues } from "./types";
import Button from "../Button/Button";

function EmployeeForm() {

const schema = Yup.object().shape({
  full_name: Yup.string()
  .required('Field Full Name is required')
  .min(5, 'Min 5 symbols')
  .max(50, 'Max 50 symbols'),
  age: Yup.number()
  .required('Field age is required')
  .typeError('Field age must be a number')
  .positive('Age must be positive')
  .min(18, 'Min age must be 18')
  .max(80, 'Max age must be 80'),
  agreement: Yup.boolean().oneOf([true], "Accept agreement"),
  password: Yup.string()
  .required('Field Password Name is required')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)'
  ),
  code: Yup.number().typeError("Field Code must be a number")
  .test('min length', 'Min 3 symbols', (value) => String(value).length >= 3  )
  .test('max length', 'Max 3 symbols', (value) => String(value).length <= 8  )
})

  const formik = useFormik({
    initialValues: {
      full_name: '',
      age: '',
      agreement: false,
      password: '',
      code: '',
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
        name="full_name"
        label="Full name*"
        id="full_name_id"
        value={formik.values.full_name}
        type = "text"
        onChange={formik.handleChange}
        error={formik.errors.full_name}
      />
      <Input 
      name="age" 
      label="Age*" 
      id="age_id"
      value={formik.values.age} 
      type="number"
      onChange={formik.handleChange} 
      error={formik.errors.age}
      />
      <Input
        name='password'
        label='Password *'
        id='password_id'
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Input
        name='code'
        label='Code'
        id='password_id'
        placeholder="Enter emloyee code"
        value={formik.values.code}
        onChange={formik.handleChange}
        error={formik.errors.code}
      />
      <CheckboxContainer>
        <Checkbox 
        name="agreement"
        type="checkbox"
        id="agree_id"
        checked={formik.values.agreement}
        onChange={formik.handleChange}
        />
        <CheckboxLabel htmlFor="agree_id">
          I agree privacy and policy
        </CheckboxLabel>
      </CheckboxContainer>
      <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
      <Button name='CREATE' />
    </EmployeeFormComponent>
  );
}
export default EmployeeForm;
