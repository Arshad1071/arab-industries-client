import React from "react";
import ResponsiveDrawer from "../../components/sidebar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BasicColor from "../../components/graph";
import PieActiveArc from "../../components/PieChart";
import BasicTable from "../../components/table";
import ActionAreaCard from "../../components/card";
import ResponsiveAppBar from "../../components/Appbar";
import StatBoard from "../../assets/img/StatBoard.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Admin = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={2}>
            <ResponsiveDrawer />
          </Grid>
          <Grid item container spacing={6} padding={5} xs={10}>
            <Grid item xs={12}>
              <ResponsiveAppBar />
            </Grid>
            <Grid item xs={8}>
              <BasicColor />
            </Grid>
            <Grid item xs={4}>
              <PieActiveArc />
            </Grid>
            <Grid item xs={9}>
              <BasicTable />
            </Grid>
            <Grid item xs={3}>
              <ActionAreaCard />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Admin;
