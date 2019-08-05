import * as Yup from "yup";

export const AddAuditSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Too short. There is a 5 character minimum.")
    .max(40, "Too long. There is a 40 character limit.")
    .required("Required"),
  status: Yup.string().required("Required"),
  genre: Yup.string().required("Required"),
  auditor: Yup.string().required("Required")
});
