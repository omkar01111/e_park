import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../main";
import SearchIcon from "@mui/icons-material/Search";
import "../../assets/styles/slotCard.css";
import "../../assets/styles/slot.css";
import img from "../../assets/images/bg2.jpg";
import { center } from "../../utils/CommonStyles";

const Slots = () => {
  const [slots, setSlots] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getSlots() {
      try {
        const response = await axios.get(`${server}/customer/AllSlots`, {
          withCredentials: true,
        });
        setSlots(response.data.parking);
      } catch (error) {
        console.log("error", error);
      }
    }
    getSlots();
  }, []);
  const filteredSlots = slots.filter((slot) =>
    slot.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Box width={"100%"} sx={{ ...center, padding: "50px 25px 0 25px " }}>
        <Box className="search_Box" sx={{ ...center }}>
          <input
            type="text"
            placeholder="Search City..."
            className="searchInput"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <Button className="search_btn" color="success" variant="contained">
            <SearchIcon fontSize="large" />
          </Button>
        </Box>
      </Box>
      <Box sx={{ ...center }}>
        <Box
          sx={{
            ...center,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {filteredSlots.map((slot, index) => (
            <div key={index} className="card">
              <img src={img} alt="Slot" />
              <div className="intro">
                <h1 style={{ ...center }}>Company name</h1>
                <Box className="inner_Info">
                  <Typography variant="span">{slot.city}</Typography>
                  <Typography variant="span">
                    {slot.totalSpots}/{slot.availableSpots}
                  </Typography>
                </Box>

                <Box className="hiden_Info">
                  <Box className="inner_Info">
                    <Typography>Vehicle Type </Typography>
                    <Typography>{slot.vehicleType}</Typography>
                  </Box>

                  <Box className="inner_Info">
                    <Typography>Spot Type</Typography>
                    <Typography>{slot.spotType}</Typography>
                  </Box>
                  <Box className="inner_Info">
                    <Typography>Price</Typography>
                    <Typography>{slot.dailyPrice}</Typography>
                  </Box>

                  <Typography
                    sx={{
                      ...center,
                      paddingTop: "5px",
                      borderTop: "1px solid grey",
                      fontSize: "14px",
                    }}
                  >
                    {slot.location}
                  </Typography>
                </Box>
              </div>
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Slots;
