import React, {BaseSyntheticEvent, useState} from "react";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {createPostFromTMS, generateImage} from "../../api/services/blogService/service";


interface Props {
    open: boolean
    onClose: () => void

}
const AddPostDialog:React.FC<Props> = props => {
    const {open,onClose} = props

    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [image, setImage] = useState<string | null>(null);

    const handleChangeTitle = (e: BaseSyntheticEvent) => {
        setTitle(e.target.value)
    }

    const handleChangeText = (e: BaseSyntheticEvent) => {
        setText(e.target.value)
    }

    const handleChangeImage = async () => {
        const newData:Blob = await generateImage()
        console.log(newData,newData.text())

        setImage(URL.createObjectURL(newData))
    }

    const handleClose = () => {


        // ...

        onClose()
    }

    const handleDone = () => {
        if (image === null ) return
        // onClose()
        createPostFromTMS({
            image ,
            text,
            title,
            description: text,
            lesson_num: -1
        })
    }

    return <Dialog open={open} onClose={onClose}>
        <DialogTitle>Post form</DialogTitle>
        <DialogContent>
            <Box sx={{width: '150px', height:'150px', background: '#c4c4c4'}} onClick={handleChangeImage}>{image && <img
                style={{width: '100%', height: '100%'}} src={image}/>}</Box>

            <TextField value={title} onChange={handleChangeTitle}/>
            <TextField value={text} onChange={handleChangeText}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>cancel</Button>
            <Button onClick={handleDone}>done</Button>
        </DialogActions>
    </Dialog>
}

export default AddPostDialog