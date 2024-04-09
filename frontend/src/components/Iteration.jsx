import React from 'react'
import { Box, Typography } from "@mui/material";
import Badge from '@mui/material/Badge';

const Iteration = ({badge, status, completed, completedNo, total, totalNo, percent, percentDone }) => {
  return (
    <Box height='194px' width='310px' p='2rem'
        backgroundColor='#fff' display='flex' flexDirection='column'
        borderRadius={2}
        boxShadow="2px 3px 2px 3px rgba(0,0,0,.1)"
    >
        {badge==='success' ? <Badge color="secondary" variant="dot"  /> :  <Badge color="error" variant="dot"  /> }
        <Typography variant="h5" fontWeight="600">{status}</Typography>
        <Box display='flex' flexDirection='row' justifyContent='space-between' mt='1rem'>
            <Typography>{completed}</Typography>
            <Typography fontWeight='700' >{completedNo}</Typography>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between' mt='0.3rem' >
            <Typography>{total}</Typography>
            <Typography fontWeight='700' >{totalNo}</Typography>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between' mt='0.3rem'>
            <Typography>{percent}</Typography>
            <Typography fontWeight='700' >{percentDone}</Typography>
        </Box>
    </Box>
  )
}

export default Iteration