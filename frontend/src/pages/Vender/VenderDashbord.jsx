import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { server } from "../../main";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../store/reducer/AuthSlice";
import { ghostButton, solidButton } from "../../utils/CommonStyles";
import { startLoading, stopLoading } from "../../store/reducer/LoadingSlice";
import Loader from "../../components/Loading/Loader";

const VenderDashbord = () => {
  const loading = useSelector((state) => state.loading.isLoading);

  const dispatch = useDispatch();

  const info = async () => {
    dispatch(startLoading());
    

    try {
      console.log("Attempting to fetch data...");
      const { data } = await axios.get(`${server}/vender/details`, {
        withCredentials: true,
      });
      console.log("Data received:", data);
      dispatch(login());
      dispatch(stopLoading());
    } catch (error) {
      dispatch(logout());
      console.error("Error fetching data:", error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      VenderDashbord
      <Button sx={solidButton} style={{ width: { md: "500px" } }}>
        ohhh
      </Button>
      <Button onClick={info}>Info</Button>
    </div>
  );
};

export default VenderDashbord;
