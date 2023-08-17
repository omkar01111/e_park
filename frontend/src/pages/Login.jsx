import React, { useState } from "react";
import { server } from "../main";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { toastErrorMessage } from "../utils/ErrorHandler";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        navigate("/user");
        toast.success(data.message);

       
      } else if (user === "Customer") {
        navigate("/");
        toast.success(data.message);
        
      } else {
        toast.error("An error occurred during login.");
      }
    } catch (error) {
      toastErrorMessage(error);
    }
  };
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100vw"}
        height={"100%"}
      >
        <Box>
          <form onSubmit={submitHandler} action="/">
            <Typography>Login up to get best parking loction.</Typography>

            <TextField
              id="email"
              type="email"
              value={email}
              label="Email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              type="password"
              value={password}
              label="password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" disabled={email === "" || password === ""}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
