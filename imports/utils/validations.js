import * as yup from "yup";

export const doctorSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(textRequired)
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
  lastName: yup.string().required(textRequired),
  lastNameMother: yup.string().required(textRequired),
  rut: yup
    .string()
    .test("len", "El rut no es válido", (val) => !val || validate(val))
    .required(textRequired),
  specialty: yup.object({
    nombre: yup.string().required(textRequired),
  }),
});
