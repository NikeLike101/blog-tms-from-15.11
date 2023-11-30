import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {createPostFromTMS, generateImage} from "../../../api/services/blogService/service";
import { AddPostFormValueType } from '../types';
import { useFormik } from 'formik';
import RandomImageSelector from '../../../components/imageSelector/RandomImageSelector';
import { addPostValidationSchema } from './validationSchema';
import ImageSelector from '../../../components/imageSelector';


interface Props {
    open: boolean
    onClose: () => void

}
const AddPostDialog:React.FC<Props> = props => {
    const {open,onClose} = props
    const [isError, setIsError] = useState<string | null>(null);

    const initialFormikValues:AddPostFormValueType = {
        title: '',
        description: '',
        image: null
    }

    const handleSubmit = async (formikValues: AddPostFormValueType) => {
        if(formikValues.image === null) return
        const {isSuccess} = await createPostFromTMS({
            image: formikValues.image ,
            text: formikValues.description,
            title: formikValues.title,
            description: formikValues.description,
            lesson_num: 2020
        })
        if (!isSuccess) {
            setIsError('server error')
            return
        }
        handleClose()
    }

    const formik = useFormik({
        initialValues: initialFormikValues,
        validationSchema: addPostValidationSchema,
        onSubmit: handleSubmit
    })




    const handleImageChange = (newValue: string | null) => {
        formik.setFieldValue('image', newValue)
        formik.setTouched({...formik.touched, 'image': true})
        formik.setErrors({...formik.errors})
    }


    const handleClose = () => {
        formik.resetForm()

        // ...

        onClose()
    }

    const handleDone = () => {
        formik.submitForm()


    }


    useEffect(() => {
        console.log(formik.errors, formik.touched);
    }, [formik.errors, formik.touched]);

    return <Dialog open={open} onClose={onClose}>
        <DialogTitle>Post form</DialogTitle>
        <DialogContent>
            <form onSubmit={formik.handleSubmit}>
                <ImageSelector image={formik.values.image} onChange={handleImageChange}/>
                {/*<ImageSelector value={formik.values.image} onChange={handleImageChange}/>*/}
            <TextField
              name='title'
              value={formik.values.title}
              error={!!formik.errors.title}
              helperText={formik.errors.title}
              onChange={formik.handleChange}/>
            <TextField
              name='description'
              value={formik.values.description}
              error={!!formik.errors.description}
              helperText={formik.errors.description}
              onChange={formik.handleChange}/>
            </form>
        </DialogContent>
        <DialogActions>
<Stack>
    {isError !== null && isError}
            <Box><Button onClick={handleClose}>cancel</Button>
            <Button
              disabled={
                !!Object.values(formik.values).filter(value => !value).length ||
                !!Object.keys(formik.errors).length}
              onClick={handleDone}>done</Button></Box></Stack>
    </DialogActions>
    </Dialog>
}

export default AddPostDialog