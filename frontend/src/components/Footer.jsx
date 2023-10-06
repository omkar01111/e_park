import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { center } from "../utils/CommonStyles";

const Footer = () => {


  return (
    <Box sx={{...center,flexDirection:'column',backgroundColor:'black',color:'white',padding:'0 20px'}}>
      <Box sx={{...center,flexDirection:'row',gap:'90px',flexWrap:'wrap',paddingY:'80px'}}>
        <Box width={'300px'} sx={{display:{xs:'none',sm:'flex'} ,flexDirection:'column', gap:'25px'}}>
            <Typography  variant="h4">Easy Park</Typography>
          <Typography variant={'body1'} color={'grey'} fontWeight={'100'} >
            The customer is at the heart of our unique business model, which
            includes design.
          </Typography>
          <Typography>LOgo</Typography>
        </Box>
        <Box sx={{display:'flex' ,flexDirection:'column', gap:'18px'}}>
          <Typography  variant="h6" fontWeight={'600'}>Top Location</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'} >Pune</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Mumbai</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Delhi</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Goa</Typography>
        </Box>
        <Box sx={{display:'flex' ,flexDirection:'column', gap:'18px'}}>
        <Typography variant="h6" fontWeight={'600'} >Up Comming Location</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Bangalore</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Noida</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Hyderabad</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Surat</Typography>
        </Box>
        <Box width={'300px'} sx={{display:'flex' ,flexDirection:'column', gap:'25px'}}>
        <Typography>NEWLETTER</Typography>
          <Typography variant="p">Be the first to know about new offers, , sales & promos!</Typography>
          <Typography>mail</Typography>
        </Box>
      </Box>
      <Divider sx={{color:'red'}} />
      <Box sx={{...center,padding:'30px 0' ,borderTop:'1px solid grey' ,width:'75%',}}>
        <Typography>
          Copyright © 2023 All rights reserved | This template is made with
          by Easy Park
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
