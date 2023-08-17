import {
  Box,
  Button,
  Card,
  CardContent,
  Radio,
  Typography,
} from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Import useHistory from react-router-dom

const UserType = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const navigate = useNavigate(); // Get the history object

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCardClick = (value) => {
    const registerButton = document.getElementById("createUser");
    const clientCard = document.getElementById("clientCard");
    const customerCard = document.getElementById("customerCard");

    const enableStyle = {
      border: "1px solid green",
      backgroundColor: "#f2f7f2",
      color: "green",
    };
    const disapleStyle = {
      border: "none",
      backgroundColor: "white",
      color: "grey",
    };

    setSelectedValue(value);
    if (value === "a") {
      registerButton.textContent = "Join as a Client";
      Object.assign(clientCard.style, enableStyle);
      Object.assign(customerCard.style, disapleStyle);
    } else if (value === "b") {
      registerButton.textContent = "Join as a Customer";
      Object.assign(clientCard.style, disapleStyle);
      Object.assign(customerCard.style, enableStyle);
    }
  };

  const handleCreateAccount = () => {
    if (selectedValue === "a") {
      navigate("/user/venreg"); // Navigate to vendor signup
    } else if (selectedValue === "b") {
      navigate("/user/custreg"); // Navigate to customer signup
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      height={"70vh"}
    >
      <Card
        sx={{
          width: "45%",
          height: "95%",
          border: "1px solid #9287876b",
          borderRadius: "15px",
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
          <Typography
            variant="h4"
            sx={{
              margin: "20px 0px",
              fontFamily: "'Averia Libre', cursive",
            }}
          >
            Join as a client or Customer.
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            width={"90%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Card
              onClick={() => handleCardClick("a")}
              sx={{
                width: "42%",
                height: "165px",
                margin: "30px 3% 40px 0%",
                padding: "22px",
                cursor: "pointer",
                border: "1px solid #9287876b",
                borderRadius: "5px",
              }}
              id="clientCard"
            >
              <LocationCityIcon
               
                sx={{ color: "gray", fontSize: "43px" }}
              />
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                color="success"
                variant="outlined"
                inputProps={{ "aria-label": "A" }}
                sx={{ position: "relative", left: "70%", bottom: "28%" }}
              />

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontFamily: "'Hind Madurai', sans-serif",
                  fontWeight: "500",
                  letterSpacing: "0",
                  fontSize: "20px",
                }}
              >
                I’m a client, providing Parking slots
              </Typography>
            </Card>

            <Card
              onClick={() => handleCardClick("b")}
              sx={{
                width: "42%",
                height: "165px",
                margin: "30px 0% 40px 3%",
                padding: "22px",
                cursor: "pointer",
                border: "1px solid #9287876b",
                borderRadius: "5px",
              }}
              id="customerCard"
            >
              <PersonPinCircleIcon
                
                sx={{ color: "gray", fontSize: "43px" }}
              />
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                color="success"
                variant="outlined"
                sx={{ position: "relative", left: "70%", bottom: "28%" }}
              />

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontFamily: "'Hind Madurai', sans-serif",
                  fontWeight: "500",
                  letterSpacing: "0",
                  fontSize: "20px",
                }}
              >
                I’m a customer, looking for parking spot
              </Typography>
            </Card>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00ed64",
              border: "0.5px solid #000000",
              borderRadius: "10px",
              minWidth: "330px",
              height: "50px",
              margin: "0px 5px ",

              fontWeight: "500",
              color: "#000000",
              fontFamily: "Montserrat Alternates, sans-serif",

              "&:hover": {
                transition: "1s",
                borderRadius: "50px",
                border: "0.5px solid #000000",
                backgroundColor: "#00ed64",
              },
            }}
            onClick={handleCreateAccount}
            id="createUser"
          >
            Join as a client
          </Button>
          <Typography margin={"20px 0px"}>
            Already have an account? <Link to="/user/login" style={{color:"green"}}>Login</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserType;
