export const solidButton={
    backgroundColor: "#00ed64",
    border: "0.5px solid #000000",
    borderRadius: "10px",
    paddingY: "3% ",
    margin: "0px 5px ",fontWeight: "500",
    color: "#000000",
    fontFamily: "Montserrat Alternates, sans-serif",

    "&:hover": {
      transition: "1s",
      borderRadius: "50px",
      border: "0.5px solid #000000",
      backgroundColor: "#00ed64",
    },
}

export const ghostButton={
  
    backgroundColor: "transparent",
    margin: "0px 5px ",
    fontWeight: "600",
    color: "white",
    fontFamily: "Montserrat Alternates, sans-serif",

    "&:hover": {
      transition: "1s",
      borderRadius: "50px",
      backgroundColor: "transparent",
      color: "#00ed64",
    },
  
}
export const center={
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
  
}