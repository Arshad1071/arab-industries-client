import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
};
export default function BasicColor({ data }) {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <LineChart
        {...chartsParams}
        series={[
          {
            data: data.map((obj) => obj.quantity),
            label: "Example",
            color: "#4e79a7",
          },
        ]}
      />
    </Stack>
  );
}
