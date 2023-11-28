import React from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';


interface Props {
  onPageChange: (newPage: number) => void;
  activePage: number
  count: number
  rowsPerPage: number
}

const Pagination:React.FC<Props> = props =>  {
  const {
    activePage,
onPageChange,
    count,
    rowsPerPage
  } = props

  const handleBackwardClick = () => {

    onPageChange(activePage-1)
  }

  const handleForwardClick = () => {
    onPageChange(activePage +1)
  }

  const handlePageSelect = (newPage: number) => {
    onPageChange(newPage)
  }



  return <Box sx={{display:'flex'}}>
      <IconButton onClick={handleBackwardClick} disabled={activePage <= 1}>
        <ArrowLeft/>
      </IconButton>
    <Box sx={{display:'flex'}}>
    {Array.from({ length: Math.ceil(count / rowsPerPage)}).map((_, index) =>
      <Box
        sx={{padding: '4px' , borderRadius: '6px', background: index + 1 === activePage ? '#004' : '#ccc'}}
        onClick={() => handlePageSelect(index + 1)}>
        {index+1}
      </Box>)}
    </Box>
    <IconButton  onClick={handleForwardClick}>
      <ArrowRight/>
    </IconButton>
  </Box>

}

export default Pagination