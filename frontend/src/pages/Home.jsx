import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import heroImage from "../assets/images/bg1.jpg";
import "../assets/styles/home.css";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import signUp from "../assets/images/signup.svg";
import listing from "../assets/images/create-listing.svg";
import paid from "../assets/images/get-paid.svg";
import renter from "../assets/images/get-renter.svg";
import {solidButton} from "../components/style/style"

const Home = () => {
  return (
    <div>
      <Box className="heroSection" width={"100%"} height={"75vh"}>
        <img className="heroImage" src={heroImage} />
        <Box
          color={"white"}
          zIndex={5}
          position={"absolute"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"start"}
          height={"75vh"}
          flexDirection={"column"}
          marginLeft={"8%"}
          gap={"2%"}
        >
          <Typography
            variant="h4"
            fontFamily={"'Averia Libre', cursive"}
            color={"#00ed64"}
          >
            RENT YOUR
          </Typography>
          <Typography variant="h4" fontFamily={"'Averia Libre', cursive"}>
            SPOT TODAY
          </Typography>
          <Typography width={"400px"}>
            Discover the easy parking renting platform,where you can both earn
            from your slots and book spots near by you. Experience the happiness
            of sharing and the opportunity to make money!
          </Typography>
          <Box marginY={"5%"} marginLeft={"-1%"}>
            <Button
              variant="contained"
              sx=
               {solidButton}
              
            >
              Start Adding Spot
            </Button>
            <Button
              variant="ghost"
              sx={{
                backgroundColor: "transparent",
                // border: "0.5px solid #000000",
                // borderRadius: "10px",

                // height: "50px",
                margin: "0px 5px ",

                fontWeight: "600",
                color: "white",
                fontFamily: "Montserrat Alternates, sans-serif",

                "&:hover": {
                  transition: "1s",
                  borderRadius: "50px",
                  // border: "0.5px solid #000000",
                  backgroundColor: "transparent",
                  color: "#00ed64",
                },
              }}
            >
              Find Spots
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        className="benefits"
        width={"100%"}
        minHeight={"60vh"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexDirection={"column"}
        backgroundColor={"#ececec"}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Montserrat Alternates', sans-serif",
            fontWeight: "600",
            color: "green",
          }}
        >
          Benefits
          <Typography
            variant="span"
            sx={{
              fontFamily: "'Montserrat Alternates', sans-serif",
              fontWeight: "600",
              color: "black",
            }}
          >
            {" "}
            Of Account On EasyPark
          </Typography>
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
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
                <TouchAppIcon fontSize="large" sx={{ color: "green" }} />
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
                  Convenience
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "'Hind Madurai', sans-serif",
                    color: "grey",
                  }}
                >
                  Easy sign up process so you can start listing your bike in no
                  time.
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
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
                <VerifiedUserIcon fontSize="large" sx={{ color: "green" }} />
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
                  Protection
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "'Hind Madurai', sans-serif",
                    color: "grey",
                  }}
                >
                  Enjoy peace of mind with $5,000 protection against theft and
                  unexpected damage.
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
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
                <DataSaverOnIcon fontSize="large" sx={{ color: "green" }} />
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
                  Safety
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "'Hind Madurai', sans-serif",
                    color: "grey",
                  }}
                >
                  Our verification system checks details such as name, address,
                  government ID to confirm the identity of guests.
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box
        className="guideSection"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        paddingY={"20px"}
        gap={"60px"}
        width={"100%"}
        padding={"50px 0px"}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Montserrat Alternates', sans-serif",
            fontWeight: "600",
            color: "black",
          }}
        >
          How Does
          <Typography
            variant="span"
            sx={{
              fontFamily: "'Montserrat Alternates', sans-serif",
              fontWeight: "600",
              color: "green",
            }}
          >
            {" "}
            EasyPark
          </Typography>{" "}
          Work?
        </Typography>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            gap:{xs:"50px",md:"0px"}
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
           
            flexDirection="column"
            paddingLeft={{ xs: "10%", md: "20%" }}
            gap={"15px"}
            sx={{width:{xs:"100%",md:"50%"}}}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: "600",
                color: "Black",
              }}
            >
              1. Sign Up
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: "400",
                color: "grey",
              }}
            >
              Signing up is lightning fast with Google single sign-on and ID
              verification can be done right from your phone or computer.
            </Typography>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#00ed64",
                border: "0.5px solid #000000",
                borderRadius: "10px",
                padding: "10px 20px",

                margin: "0px -5px ",

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
            >
              SignUp
            </Button>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            width={"50%"}
            paddingLeft={"10%"}
          >
            <img src={signUp} />
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row-reverse"}
          width={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            width={"50%"}
            flexDirection="column"
            paddingRight={"15%"}
            marginLeft={"80px"}
            gap={"15px"}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: "600",
                color: "Black",
              }}
            >
              2. Create your listing
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: "400",
                color: "grey",
              }}
            >
              Creating a listing is a breeze with our simple and straightforward
              process - just snap a few pics, tell us about your bike and name
              your rental rates.
            </Typography>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#00ed64",
                border: "0.5px solid #000000",
                borderRadius: "10px",
                padding: "10px 20px",

                margin: "0px -5px ",

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
            >
              Add Slots
            </Button>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            width={"50%"}
            paddingLeft={"18%"}
          >
            <img src={listing} />
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            width={"50%"}
            flexDirection="column"
            paddingLeft={"20%"}
            gap={"15px"}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: "600",
                color: "Black",
              }}
            >
              3. Get Renters
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: "400",
                color: "grey",
              }}
            >
              Upcycle publishes your listing and distributes it to targeted
              local audiences, connecting it with ideal renters. When renters
              express interest in your bike, simply confirm the dates – it's
              that easy!
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            width={"50%"}
            paddingLeft={"10%"}
          >
            <img src={renter} />
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row-reverse"}
          width={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            width={"50%"}
            flexDirection="column"
            paddingRight={"15%"}
            marginLeft={"80px"}
            gap={"15px"}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: "600",
                color: "Black",
              }}
            >
              4. Get Paid
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Montserrat Alternates', sans-serif",
                fontWeight: "400",
                color: "grey",
              }}
            >
              Once your rental is complete, we send you a link to get paid by
              ACH straight to your bank account or send a check depending on
              your preference.
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            width={"50%"}
            paddingLeft={"18%"}
          >
            <img src={paid} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
