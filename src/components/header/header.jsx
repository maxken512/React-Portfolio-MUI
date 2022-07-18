import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { Avatar, Button, Typography, Box } from "@material-ui/core";
import img from "C:/Users/Max/learning/src/components/header/IMG_0813-3.JPG";
import { Container } from "@mui/system";

function Header() {
  const [content, setContent] = useState("WELCOME");

  return (
    <header>
      <AppBar position="static" alignItems="right">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              alignItems="left"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
              alt="Max Kennedy"
              src={img}
            />
            <Box>
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
            </Box>
            <Container>
              <Button
                color="inherit"
                onClick={() =>
                  setContent(
                    "My name is Max Kennedy, I am a bootcamp graduate specializing in front-end web development"
                  )
                }
              >
                About Me
              </Button>
              <Button color="inherit">Contact</Button>
              <Button color="inherit">Projects</Button>
            </Container>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
