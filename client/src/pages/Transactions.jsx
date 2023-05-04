import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/transactions/Transactions.css";
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import formatDate from "./../utils/formatDate";
import formatTime from "./../utils/formatTime";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Transactions = () => {
  // To add data into "txns"
  const [txns, setTxns] = useState([]);

  // To fetch data from database to display into table
  useEffect(() => {
    const fetchTxnsData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/data");
        setTxns(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTxnsData();
  }, []);

  return (
    <>
      <div className="txns">
        <ThemeProvider theme={darkTheme}>
          <h1 className="txns_title">Past Transactions</h1>
          <div className="txns_table">
            <TableContainer component={Paper} elevation={5}>
              <Table>
                <TableHead className="txns_table_header">
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Sub-Category</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {txns.map((val) => (
                    <TableRow key={val.ID}>
                      <TableCell>{formatDate(val.expenses_date)}</TableCell>
                      <TableCell>{formatTime(val.expenses_time)}</TableCell>
                      <TableCell>{val.category}</TableCell>
                      <TableCell>{val.sub_category}</TableCell>
                      <TableCell>{"RM " + val.amount.toFixed(2)}</TableCell>
                      <TableCell>{val.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Transactions;
