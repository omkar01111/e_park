import { FormControl, InputLabel, Input } from "@mui/material";
import React from "react";

const CustomInput = ({ label, type, onChange, value, name }) => {
  return (
    <FormControl variant="standard" sx={{ width: "200px", margin: "10px" }}>
      <InputLabel color="success" htmlFor="component-simple">
        {label}
      </InputLabel>
      <Input
        color="success"
        id="component-simple"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required
        sx={{ color: "black" }}
      />
    </FormControl>
  );
};

export default CustomInput;
