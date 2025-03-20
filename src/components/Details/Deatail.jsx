import React from "react";

import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";

import useStyles from "./styles";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);
const Deatail = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <div>
      <Card className={title === "Income" ? classes.Income : classes.Expense}>
        <CardHeader title={title} />
        <CardContent style={{ width: "70%", height: "70%" }}>
          <Typography variant="h5">${total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Deatail;
