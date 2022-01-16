import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required!'),
  password: Yup.string()
    .min(6, '6 symbols is a minimum!')
    .max(20, '20 symbols is a maximmum!')
    .required('Required!'),
});

const FormikForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form autoComplete="off">
        <Field type="email" name="email" />
        <ErrorMessage name="email" />
        <br />
        <Field type="password" name="password" />
        <ErrorMessage name="password" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
