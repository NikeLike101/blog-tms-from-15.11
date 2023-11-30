import React from 'react';
import { Box } from '@mui/material';
import { generateImage } from '../../api/services/blogService/service';

interface Props {
  value: string | null
  onChange: (newValue: string | null) => void
}

const RandomImageSelector:React.FC<Props> = props => {
  const {value,onChange} = props
  const handleChangeImage = async () => {
    const newData = await generateImage()


    onChange(newData ? URL.createObjectURL(newData) : null)
  }


  return  <Box sx={{width: '150px', height:'150px', background: '#c4c4c4'}} onClick={handleChangeImage}>{value && <img
    style={{width: '100%', height: '100%'}} src={value}/>}</Box>
}

export default RandomImageSelector