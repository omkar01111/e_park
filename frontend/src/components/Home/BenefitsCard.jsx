import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const BenefitsCard = ({icon ,title,description}) => {
  return (
    <Card
      sx={{
        width: "360px",
        height: "190px",
        margin: "20px",
        borderRadius: "20px",
        backgroundColor: "#edf2ec",
        boxShadow: " -3px -1px 32px -7px rgba(0,0,0,0.75)",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            width: "80px",
            borderRadius: "50px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            backgroundColor: "#edf2ec",

            bottom: "-11%",
            transform: "translateY(50%)",
          }}
        >
          {icon}
        </Card>
        <CardContent
          sx={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Montserrat Alternates', sans-serif",
              fontWeight: "600",
            }}
          >
          {title}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "'Hind Madurai', sans-serif",
              color: "grey",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default BenefitsCard;
