import React from 'react'
// import '../../assets/styles/loading.css'
import { Box } from '@mui/material'
import  loader  from "../../assets/images/loader.svg";

const Loader = () => {
  return (
    <Box sx={{ height:"100vh" , width:"100%" ,display:"flex", justifyContent:"center" ,alignItems:"center"}}>
      <img src={loader}/>
    </Box>
  )
}

export default Loader