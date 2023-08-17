import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Box width={'100%'} display={'flex'} justifyContent={'start'} >
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "Montserrat Alternates, sans-serif",
          fontWeight: 700,

          textDecoration: "none",
        }}
      >
        <Link
          to="/"
          style={{
            color: "rgb(17, 97, 73)",
            margin:"25px"
          }}
        >
          EasyPark
        </Link>
      </Typography>
    </Box>
  );
};

export default HeaderLogo;
