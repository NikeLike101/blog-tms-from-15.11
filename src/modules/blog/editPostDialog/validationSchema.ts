import * as yup from 'yup'

export const editPostValidationSchema = yup.object({
    title:yup.string().min(4, 'too short').max(20, 'too long').required(),
    description:yup.string().min(10, 'too short').max(20, 'too long').required(),
    image:yup.string().required(),
    author: yup.string().required('author is required'),
    date: yup.string().required()
})