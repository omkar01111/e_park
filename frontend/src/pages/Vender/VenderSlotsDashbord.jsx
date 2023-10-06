import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import { center } from "../../utils/CommonStyles";
import img from "../../assets/images/bg1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../../store/reducer/LoadingSlice";
import Loader from "../../components/Loading/Loader";
import "../../assets/styles/card.css"
const VenderSlotsDashbord = () => {
  const loading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [parking, setParking] = useState([]);

  useEffect(() => {
    async function fetchData() {
      dispatch(startLoading);
      const { data } = await axios.get(`${server}/vender/parking/new`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setParking(data.parking);

    }
    fetchData();
    dispatch(stopLoading);
  }, []);

  console.log(parking);
  const addSlotHandler = () => {
    navigate("/Vender/Addslot");
  };
  const edit = () => {
    console.log("click");
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <Box sx={{ ...center }} flexWrap={"wrap"} gap={"40px"} padding={"80px"}>
        <Card sx={{ width: "250px", height: "350px" }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              gap: "10px",
            }}
          >
            <IconButton
              aria-label="Example"
              color={"success"}
              onClick={addSlotHandler}
            >
              <AddCircleOutlineIcon sx={{ fontSize: "100px" }} />
            </IconButton>

            <Typography color={"green"}> ADD SLOTS</Typography>
          </CardContent>
        </Card>

        {parking.map((slots) => (
          <Card key={slots.id} sx={{ width: "250px", height: "350px", padding: "0%", }}>
            <CardContent
            className="main_Container"
              sx={{
               
                width: "100%",
                height: "100%",
                position: "relative",
                padding: "0%",
                
               
               
              }}
            >
              <img src={img} className="image"/>
              {/* <CardMedia
                component="img"
                alt="green iguana"
                width="100%"
                height="100%"
               
                image={img}
              /> */}
              <Box className="overlay" >
                <Typography variant="body1">
                  TotalSpots :{slots.totalSpots}
                </Typography>

                <Typography variant="body1">
                  AvailableSpots : {slots.availableSpots}
                </Typography>


                <Typography className="text-child" >{slots.city}</Typography>
                <Typography className="text-child" >{slots.location}</Typography>
                <Typography className="text-child" >{slots.vehicleType}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default VenderSlotsDashbord;
