import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { server } from "../../main";
import { toastErrorMessage } from "../../utils/ErrorHandler";

const VenderSignUp = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    console.log(name, email, password);
    e.preventDefault();
    try {
     
      const { data } = await axios.post(
        `${server}/Vender/new`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

     
      toast.success(data.message);
    } catch (error) {
      toastErrorMessage(error);
    }
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      width={"100vw"}
      height={"100%"}
    >
      <Box>
        <form onSubmit={submitHandler}>
          <Typography>Sign up to add parking loction.</Typography>

          <TextField
            id="name"
            value={name}
            label="Name"
            variant="standard"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Box>
  );
};

export default VenderSignUp