import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { Avatar, Box, Typography } from "@material-ui/core";
import img from "C:/Users/Max/learning/src/components/header/IMG_0813-3.JPG";
import { Container } from "@mui/system";

function Header() {
  return (
    <header>
      <AppBar position="static" alignItems="right">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              alt="Max Kennedy"
              src={img}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Maxwell Kennedy
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
