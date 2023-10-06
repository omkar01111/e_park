import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { solidButton, center } from "../../../utils/CommonStyles";
import CustomInput from "../../../components/CustomInput";
import axios from "axios";
import { server } from "../../../main";
import { useNavigate } from "react-router-dom";

const AddSlot = () => {

  const nevigate= useNavigate();
  const [slotDetails, setSlotDetails] = useState({
    city: "",
    location: "",
    vehicleType: "",
    totalSpots: "",

    availableSpots: "",
    images: "",
    hourlyPrice: "",
    dailyPrice: "5",
    weeklyPrice: "",
    monthlyPrice: "",
  });
  //handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSlotDetails({
      ...slotDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addSlot = await axios.post(
        `${server}/vender/parking/new`,
        slotDetails,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      
      );
      nevigate("/Vender/slots");
      console.log(slotDetails);
    } catch (error) {
      console.error("Error sending PUT request", error); 
    }
  };
  return (
    <>
      <Box width={"100%"} sx={{ ...center }}>
        <Card
          sx={{
            width: "600px",
            height: "100%",
            position: "relative",
            margin: "5% 0px 0 0",
          }}
        >
          <CardContent
            sx={{
              ...center,
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Hind Madurai', sans-serif",
                fontWeight: "600",
                color: "green",
                marginTop: "10px",
              }}
            >
              ADD Your Slots...
            </Typography>
            <form
              style={{
                ...center,
                flexDirection: "row",
                flexWrap: "wrap",
                columnGap: "50px",
                width: "100%",
              }}
              onSubmit={handleSubmit}
            >
              {/*LOCATION  */}
              <CustomInput
                label="LOCATION"
                type="text"
                onChange={handleInputChange}
                value={slotDetails.location}
                name="location"
              />

              {/* CITY */}
              <CustomInput
                label="CITY"
                type="text"
                onChange={handleInputChange}
                value={slotDetails.city}
                name="city"
              />

              {/* Vehical Type */}
              <CustomInput
                label="Vehical Type"
                type="text"
                onChange={handleInputChange}
                value={slotDetails.vehicleType}
                name="vehicleType"
              />

              {/* Total Spots */}
              <CustomInput
                label="Total Spots"
                type="number"
                onChange={handleInputChange}
                value={slotDetails.totalSpots}
                name="totalSpots"
              />

              {/* Available Spots */}
              <CustomInput
                label="Available Spots"
                type="number"
                onChange={handleInputChange}
                value={slotDetails.availableSpots}
                name="availableSpots"
              />

              {/* Spot Image*/}
              <CustomInput
                label="Spot Image"
                type="text"
                onChange={handleInputChange}
                value={slotDetails.images}
                name="images"
              />

              {/* Hourly Price*/}
              <CustomInput
                label="Hourly Price"
                type="number"
                onChange={handleInputChange}
                value={slotDetails.hourlyPrice}
                name="hourlyPrice"
              />

              {/* Daily Price*/}
              <CustomInput
                label="Daily Price"
                type="number"
                onChange={handleInputChange}
                value={slotDetails.dailyPrice}
                name="dailyPrice"
              />

              {/* Weekly Price*/}
              <CustomInput
                label=" Weekly Price"
                type="number"
                onChange={handleInputChange}
                value={slotDetails.weeklyPrice}
                name="weeklyPrice"
              />

              {/* Monthly Price*/}
              <CustomInput
                label=" Monthly Price"
                type="number"
                onChange={handleInputChange}
                value={slotDetails.monthlyPrice}
                name="monthlyPrice"
              />

              <Button
                type="submit"
                variant="contained"
                sx={{ ...solidButton, width: "200px" }}
              >
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default AddSlot;
