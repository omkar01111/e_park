import {
  Box,
  Button,
 
  Card,
  CardContent,
  
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { server } from "../../main";
import { toastErrorMessage } from "../../utils/ErrorHandler";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/reducer/AuthSlice";
import { User } from "lucide-react";

const CustomerSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch=useDispatch();


  const navigate= useNavigate()

  const submitHandler = async (e) => {
    console.log(name, email, password);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/customer/new`,
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
      navigate('/account/Customer/slots')
      dispatch(login(User))
    } catch (error) {
      toastErrorMessage(error);
      dispatch(logout())
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
        <Card
          sx={{
            width: "30vw",
            height: "600px",
            border: "1px solid #9287876b",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent sx={{ justifyContent: "center", display: "flex" }}>
            <Typography
              variant="h5"
              color={"green"}
              sx={{ fontFamily: "'Averia Libre', cursive", margin: "9% auto" }}
            >
              Sign up to get best parking loction.
            </Typography>
          </CardContent>

          

          <form onSubmit={submitHandler}  style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "60%",
            }}>
            <TextField
              id="name"
              value={name}
              label="Name"
              variant="outlined"
              type="text"
              onChange={(e) => setName(e.target.value)}
              color="success"

            />
            <TextField
              id="email"
              type="email"
              value={email}
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              color="success"
            />
            <TextField
              id="password"
              type="password"
              value={password}
              label="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              color="success"
            />
            <CardContent>

            <Button type="submit"variant="contained" disabled={email === "" || password === ""} sx={{
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
            }}>Submit</Button>
            </CardContent>
          </form>
          <CardContent>
          <Typography margin={"20px 0px"}>
            Already have an account? <Link to="/user/login" style={{color:"green"}}>Login</Link>
          </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CustomerSignUp;
