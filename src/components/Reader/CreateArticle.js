import { Formik, Form, Field } from 'formik';
import { createPublication } from '../../services/publications-api';

export const CreateArticle = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const data = await createPublication(values);
    console.log(data);
    resetForm();
  };

  return (
    <Formik initialValues={{ title: '', text: ' ' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field name="title" placeholder="enter title" />
          <Field name="text" placeholder="enter text" />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending article...' : 'Add publication'}
          </button>
        </Form>
      )}
    </Formik>
  );
};
