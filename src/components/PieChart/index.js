import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieActiveArc({ data }) {
  const changeKeyNamesOne = (array, oldKey, newKey) => {
    return array.map((obj) => {
      // Create a new object with updated key names
      const newObj = { ...obj, [newKey]: obj[oldKey] };

      // Remove the old key if you want to
      delete newObj[oldKey];

      return newObj;
    });
  };
  return (
    <PieChart
      series={[
        {
          data: changeKeyNamesOne(
            changeKeyNamesOne(data, "month", "label"),
            "quantity",
            "value"
          ),
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={200}
    />
  );
}
