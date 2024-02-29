import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

export default function BasicTable({ data, setData }) {
  const changeStatePropertyValue = (index, propertyName, newValue) => {
    setData((prevStates) => {
      // Create a new array to avoid mutating the state directly
      const newStates = [...prevStates];

      // Update the property of the specified state by index
      newStates[index] = {
        ...newStates[index],
        [propertyName]: newValue,
      };

      return newStates;
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Month</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.month}</TableCell>
              <TableCell align="right">
                <TextField
                  onChange={(e) =>
                    changeStatePropertyValue(
                      index,
                      "quantity",
                      parseInt(e.target.value) || 0
                    )
                  }
                  value={row.quantity}
                  size="small"
                ></TextField>
              </TableCell>
              <TableCell align="right">{row.Price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
