import * as Yup from 'yup'

const validations =Yup.object().shape({
    content:Yup.string().required("Text is a required field").min(3,"Enter a minimum of 3 characters")
});

export default validations;