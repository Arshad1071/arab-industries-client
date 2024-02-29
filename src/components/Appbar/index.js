import { Box } from "@mui/material";
import React from "react";
import StatBoard from "../../assets/img/Sun With Face.svg";
import Rectangle from "../../assets/img/Rectangle 10.svg";

const index = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ width: "150px", marginTop: "35px" }}>Good Morning!</p>
          <img src={StatBoard} alt="Logo" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#EBE7E6",
            borderRadius: 2,
            padding: 1,
          }}
        >
          <p style={{ width: "100px", marginRight: "20px" }}>
            Jhon Deo Jhon@Deo.com
          </p>

          <img src={Rectangle} alt="Logo" />
        </Box>
      </Box>
    </div>
  );
};

export default index;
