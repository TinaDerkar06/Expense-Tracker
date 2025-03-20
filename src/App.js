import "./App.css";
import React from "react";
import Main from "./components/Details/Main/Main";
import Deatail from "./components/Details/Deatail";
import { Box, Grid } from "@mui/material";
import useStyles from "./styles";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const App = () => {
  const theme = createTheme;
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid
          classname={classes.grid}
          container
          spacing={2}
          alignItems="center"
          justify="center"
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} sm={4} mx={2} className={classes.mobile}>
            <Deatail title="Income" />
          </Grid>

          <Grid item xs={12} sm={3.5} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} mx={2} className={classes.desktop}>
            <Deatail title="Income" />
          </Grid>
          <Grid item xs={12} sm={4} mx={1} className={classes.last}>
            <Deatail title="Expense" />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
