import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box
        width={"100%"}
        minHeight={"300px"}
        backgroundColor={"#061621"}
        marginTop={"50px"}
        color={"white"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h2"> FOOTER</Typography>
      </Box>
    </div>
  );
};

export default Footer;
