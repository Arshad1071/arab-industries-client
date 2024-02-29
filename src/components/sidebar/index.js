import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Briefcase from "../../assets/img/Briefcase.svg";
import StatBoard from "../../assets/img/StatBoard.png";

const drawerWidth = 200;

function ResponsiveDrawer() {
  const drawer = (
    <div
      style={{
        backgroundColor: "#808080",
        height: "900px",
      }}
    >
      <Box sx={{ marginLeft: "50px" }}>
        <img src={Briefcase} alt="Logo" />
      </Box>
      <Box sx={{ marginLeft: "45px" }}>
        <img src={StatBoard} alt="Logo" />
      </Box>

      <Divider />
      <List>
        {["Dashboard", "Support", "Plugins", "Help"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          height: "100%",
        }}
        aria-label="mailbox folders"
      >
        {drawer}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
