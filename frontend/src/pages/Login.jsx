import React, { useState } from "react";
import { server } from "../main";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { toastErrorMessage } from "../utils/ErrorHandler";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/reducer/AuthSlice";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/user/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const user = data.user.user;

      if (user === "Vender") {
        navigate("/user/Vender/Dashbord");
        dispatch(login(data.user))
        toast.success(data.message);
      } else if (user === "Customer") {
        navigate("/account/Customer/slots");
        dispatch(login(data.user))
        toast.success(data.message);
      } else {
        toast.error("An error occurred during login.");
        dispatch(logout())
      }
     
    } catch (error) {
      toastErrorMessage(error);
      dispatch(logout())
    }
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100vw"}
        height={"80vh"}
      >
        <Card
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
          sx={{
            width: "450px",
            border: "1px solid #9287876b",
          }}
        >
          <CardContent
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
            
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
              
                position: "relative",
                margin: "9% auto",
                left: "25%",
              }}
            >
              Login in to <Typography variant="span" color={"green"} sx={{fontFamily:"'Averia Libre', cursive",}}>EasyPark</Typography>
            </Typography>
            <form
              onSubmit={submitHandler}
              style={{
                display: "flex",
                flexDirection: "column",

                justifyContent: "space-evenly",
                height: "60%",
              }}
              action="/"
            >
              <TextField
              color="success"
                id="email"
                type="email"
                value={email}
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
              
              color="success"
                id="password"
                type="password"
                value={password}
                label="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="contained" disabled={email === "" || password === ""} sx={{
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
            }}>
                Submit
              </Button>
            </form>

            <Typography sx={{
                position: "relative",
                position: "relative",
                margin: "9% auto",
                left: "15%",
              }}>
            Don't have an ePark account? <Link to="/user" style={{color:"green"}}>Register</Link>
          </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Login;
