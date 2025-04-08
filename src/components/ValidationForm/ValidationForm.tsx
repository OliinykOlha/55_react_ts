import { useFormik } from "formik";
import * as Yup from 'yup';
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  Checkbox,
  CheckboxContainer,
  ValidationFormComponent,
  Title,
  CheckboxLabel,
  ErrorMessage,
} from "./styles";
import { ValidationFormValues } from "./types";

function ValidationForm() {
const schema = Yup.object().shape({
    valid_code: Yup.number()
    .required("Field Validation Code is required")
    .typeError('Must be number')
    .test('min length', 'Min 6 symbols', (value) => String(value).length === 6 ),
    agreement: Yup.boolean()
    .oneOf([true], 'Accept agreement')
})

  const formik = useFormik({
    initialValues: {
      valid_code: "",
      agreement: false,
    } as ValidationFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: ValidationFormValues) => {
        console.log("Вы успешно вошли");
       console.table(values);
    },
  });

  return (
    <ValidationFormComponent onSubmit={formik.handleSubmit}>
      <Title>Form</Title>
      <Input
        name="valid_code"
        label="Validation code*"
        id="valid_code_id"
        value={formik.values.valid_code}
        onChange={formik.handleChange}
        error={formik.errors.valid_code}
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
      <Button type="submit" name="Login"  />
    </ValidationFormComponent>
  );
}

export default ValidationForm;
