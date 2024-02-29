import React, { useState } from "react";
import ResponsiveDrawer from "../../components/sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BasicColor from "../../components/graph";
import PieActiveArc from "../../components/PieChart";
import BasicTable from "../../components/table";
import ActionAreaCard from "../../components/card";
import ResponsiveAppBar from "../../components/Appbar";

const Admin = () => {
  const [data, setData] = useState([
    { id: 1, month: "JAN", quantity: 10, Price: 10 },
    { id: 2, month: "FEB", quantity: 10, Price: 20 },
    { id: 3, month: "MAR", quantity: 30, Price: 20 },
    { id: 4, month: "APR", quantity: 40, Price: 20 },
    { id: 5, month: "MAY", quantity: 10, Price: 20 },
    { id: 6, month: "JUN", quantity: 10, Price: 10 },
    { id: 7, month: "JLY", quantity: 40, Price: 20 },
    { id: 8, month: "AUG", quantity: 60, Price: 20 },
    { id: 9, month: "SEP", quantity: 10, Price: 10 },
    { id: 10, month: "OCT", quantity: 10, Price: 20 },
    { id: 11, month: "NOV", quantity: 63, Price: 10 },
    { id: 12, month: "DEC", quantity: 10, Price: 20 },
  ]);

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
              <BasicColor data={data} />
            </Grid>
            <Grid item xs={4}>
              <PieActiveArc data={data} />
            </Grid>
            <Grid item xs={9}>
              <BasicTable data={data} setData={setData} />
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
