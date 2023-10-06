import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Card,
  CardContent,
  Box,
  Input,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import { server } from "../../main";
import { startLoading, stopLoading } from "../../store/reducer/LoadingSlice";
import { solidButton, center } from "../../utils/CommonStyles";
import Loader from "../../components/Loading/Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const VenderEditProfile = () => {
  const nevigate = useNavigate();
  const loading = useSelector((state) => state.loading.isLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
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

  //Featching User data
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(startLoading());
        const response = await axios.get(`${server}/vender/details`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        const data = response.data.user;
        setUserDetails({
          ...data,
        });
        dispatch(stopLoading());
      } catch (error) {
        dispatch(stopLoading());
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Handling Input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${server}/vender/details`,
        userDetails,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      nevigate("/Vender/account");
      const message = response.data.message;

      toast.success(message);
    } catch (error) {
      toast.error(message);
      console.error("Error sending PUT request", error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
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
              Edit Details
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
              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">Company Name</InputLabel>
                <Input
                  id="component-simple"
                  name="companyName"
                  value={userDetails.companyName}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">Address</InputLabel>
                <Input
                  id="component-simple"
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">Bio</InputLabel>
                <Input
                  id="component-simple"
                  name="bio"
                  value={userDetails.bio}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">Mobile No</InputLabel>
                <Input
                  id="component-simple"
                  name="mobileNo"
                  value={userDetails.mobileNo}
                  onChange={handleInputChange}
                  type="number"
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">Website URL</InputLabel>
                <Input
                  id="component-simple"
                  name="website"
                  value={userDetails.website}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">Twitter URL</InputLabel>
                <Input
                  id="component-simple"
                  name="twitter"
                  value={userDetails.twitter}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">Facebook URL</InputLabel>
                <Input
                  id="component-simple"
                  name="facebook"
                  value={userDetails.facebook}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">
                  Instagram URL
                </InputLabel>
                <Input
                  id="component-simple"
                  name="instagram"
                  value={userDetails.instagram}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">
                  Profile Image URL
                </InputLabel>
                <Input
                  id="component-simple"
                  name="image"
                  value={userDetails.image}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormControl>

              <FormControl
                variant="standard"
                sx={{ width: "200px", margin: "10px" }}
              >
                <InputLabel htmlFor="component-simple">GST No</InputLabel>
                <Input
                  id="component-simple"
                  name="gstNumber"
                  value={userDetails.gstNumber}
                  onChange={handleInputChange}
                  type="text"
                />
              </FormControl>

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

export default VenderEditProfile;
