import React from "react";
import ResponsiveDrawer from "../../components/sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BasicColor from "../../components/graph";
import PieActiveArc from "../../components/PieChart";
import BasicTable from "../../components/table";
import ActionAreaCard from "../../components/card";
import ResponsiveAppBar from "../../components/Appbar";


const Admin = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={2}>
            <ResponsiveDrawer />
          </Grid>
          <Grid item container spacing={3} padding={5} xs={10}>
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
