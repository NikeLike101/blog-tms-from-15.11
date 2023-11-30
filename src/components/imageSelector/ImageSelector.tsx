import React, { BaseSyntheticEvent, ChangeEventHandler, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';


interface Props {
  onChange: (newImage: string) => void;
  image: string | null;
}

const ImageSelector:React.FC<Props> = props => {

  const {image, onChange} = props

  const inputRef = useRef<HTMLInputElement>(null)
  const handleInput = (e:BaseSyntheticEvent) => {
    console.log(e);
  }
  const handleChange = (e: any) => {
    console.log(e.target.files);
    if (e.target.files.length === 0) return;
    const reader= new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (readerEvent) => {

      onChange(readerEvent.target?.result as string)
    }

  }

  const handleClick = () => {
    console.log(inputRef.current && inputRef.current.click);
    inputRef.current && inputRef.current.click()
  }

  return<>

    <Box sx={{width: '150px', height:'150px', background: '#c4c4c4'}} onClick={handleClick}>{image && <img
      style={{width: '100%', height: '100%'}} src={image}/>}</Box>

    <input style={{display: 'none'}} ref={inputRef} type={'file'} onChange={handleChange} onInput={handleInput} />
    {/*<input type={'file'} onChange={handleChange} onInput={handleInput}/>*/}
  </>
}


export default ImageSelector