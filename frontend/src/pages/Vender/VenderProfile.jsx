import React, { useEffect, useState } from "react";
import {
  Avatar,
  Chip,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardOverflow,
  CardActions,
  IconButton,
  Typography,
  SvgIcon,
} from "@mui/joy";
import { Instagram, LanguageOutlined } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { FacebookIcon, Twitter } from "lucide-react";
import "../../assets/styles/theme.css";
import { solidButton } from "../../utils/CommonStyles";
import { useNavigate } from "react-router-dom";
import { server } from "../../main";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../../store/reducer/LoadingSlice";
import Loader from "../../components/Loading/Loader";
import Home from "../Home";
import { Link } from "react-router-dom";

const UserInfo = ({ lable, value }) => {
  return (
    <>
      <Box margin={"10px"}>
        <Typography
          display={"flex"}
          level="body-sm"
          justifyContent={"start"}
          alignItems={"center"}
          width={"300px"}
          textTransform={"capitalize"}
          sx={{
            color: "#9a9b9b",
          }}
        >
          {lable}
        </Typography>
        <Typography
          level="title-md"
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          width={"300px"}
          textTransform={"capitalize"}
          sx={{}}
        >
          {value}
        </Typography>
      </Box>
    </>
  );
};
const VenderProfile = () => {
  const loading = useSelector((state) => state.loading.isLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [userDetails, setUserDetails] = useState({
    address: "",
    bio: "",
    companyName: "",
    instagram: "",
    facebook: "",
    mobileNo: "",
    twitter: "",
    website: "",
    gstNumber: "",
    image: "",
  });
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("Default Name");
  const [userType, setUserType] = useState("Default Name");
  const [dateOfJoin, setDateOfJoin] = useState("Default Name");

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(startLoading());
        const response = await axios.get(`${server}/vender/details`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        const data = response.data.user;
        setUserName(user.name);
        setEmail(user.email);
        setUserType(user.user);
        setDateOfJoin(user.dateJoinning);

        setUserDetails({
          ...data,
        });

        dispatch(stopLoading());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const editHandler = () => {
    navigate("/Vender/EditProfile");
  };
  return isAuthenticated ? (
    loading ? (
      <Loader />
    ) : (
      <Box
        display={"flex"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "5%",
          gap: "10px",
        }}
      >
        <Box
          display={"flex"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "25%",
            height: "430px",
          }}
        >
          <Card
            sx={{
              width: 320,
              maxWidth: "100%",
              boxShadow: "lg",
              height: "100%",
            }}
          >
            <CardContent
              sx={{
                alignItems: "center",
                textAlign: "center",
                paddingY: "30px",
              }}
            >
              <Avatar
                alt="profileImage"
                src={userDetails.image}
                sx={{ "--Avatar-size": "4rem" }}
              />
              <Chip
                size="sm"
                variant="soft"
                color="primary"
                sx={{
                  mt: -1,
                  mb: 1,
                  border: "3px solid",
                  borderColor: "background.surface",
                }}
              >
                {userType}
              </Chip>
              <Typography textTransform={"capitalize"} level="title-lg">
                {userName}
              </Typography>
              <Typography
                textTransform={"capitalize"}
                level="body-sm"
                sx={{ maxWidth: "24ch" }}
              >
                {userDetails.bio}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2,
                  paddingY: "20px",
                  "& > button": { borderRadius: "2rem" },
                }}
              >
                <IconButton size="sm" variant="plain" color="neutral">
                  <SvgIcon>
                    <Link  to={userDetails.facebook} target="_blank">
                      <FacebookIcon style={{ color: "darkgreen" }} />
                    </Link>
                  </SvgIcon>
                </IconButton>

                <IconButton size="sm" variant="plain" color="neutral">
                  <SvgIcon>
                    <Link  to={userDetails.instagram} target="_blank">
                      <Instagram sx={{ color: "darkgreen" }} />
                    </Link>
                  </SvgIcon>
                </IconButton>
                <IconButton size="sm" variant="plain" color="neutral">
                  <SvgIcon>
                    <Link to={userDetails.twitter} target="_blank">
                      <Twitter style={{ color: "darkgreen" }} />
                    </Link>
                  </SvgIcon>
                </IconButton>
                <IconButton size="sm" variant="plain" color="neutral">
                  <SvgIcon>
                    <Link  to={userDetails.website} target="_blank">
                      <LanguageOutlined style={{ color: "darkgreen" }} />
                    </Link>
                  </SvgIcon>
                </IconButton>
              </Box>
            </CardContent>
            <CardOverflow
              sx={{ bgcolor: "background.level1", paddingY: "20px" }}
            >
              <CardActions buttonFlex="1">
                <ButtonGroup
                  variant="outlined"
                  sx={{ bgcolor: "background.surface" }}
                >
                  <Button>Message</Button>
                  <Button>Connect</Button>
                </ButtonGroup>
              </CardActions>
            </CardOverflow>
          </Card>
        </Box>
        <Divider orientation="vertical" />

        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
            width: "60%",
            height: "430px",
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: "100%",
              boxShadow: "lg",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography
                variant="soft"
                display={"flex"}
                level="h3"
                justifyContent={"center"}
                alignItems={"center"}
                textTransform={"capitalize"}
                sx={{
                  padding: "20px 0px 10px 0px",
                  fontFamily: "'Averia Libre', cursive",
                  color: "green",
                }}
              >
                {userDetails.companyName}
              </Typography>
              <Typography
                variant="soft"
                display={"flex"}
                level="body-sm"
                justifyContent={"center"}
                alignItems={"center"}
                textTransform={"capitalize"}
                sx={{
                  paddingBottom: "15px",
                  fontFamily: "Montserrat Alternates', sans-serif;",
                  color: "grey",
                }}
              >
                {userDetails.address}
              </Typography>
              <Divider />
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                width={"100%"}
                alignItems={"center"}
                flexWrap={"wrap"}
                flexDirection={"row"}
                paddingY={"30px"}
              >
                <UserInfo lable={"Mobile No"} value={userDetails.mobileNo} />
                <UserInfo lable={"Email id"} value={email} />
                <UserInfo lable={"GST NO"} value={userDetails.gstNumber} />
                <UserInfo lable={"Joing Date"} value={dateOfJoin} />
              </Box>
              <Box display={"flex"} justifyContent={"center"} marginY={"20px"}>
                <Button
                  sx={{ ...solidButton, width: "80%" }}
                  display={"flex"}
                  level="body-sm"
                  onClick={editHandler}
                >
                  EDIT
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    )
  ) : (
    <Home />
  );
};

export default VenderProfile;
