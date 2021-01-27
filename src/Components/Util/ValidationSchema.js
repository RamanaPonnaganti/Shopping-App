import * as yup from "yup";

const ValidationSchema = yup.object({
  firstName: yup
    .string("Enter your FirstName")
    .required("FirstName is required"),
  lastName: yup.string("Enter your LastName").required("LastName is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default ValidationSchema;
