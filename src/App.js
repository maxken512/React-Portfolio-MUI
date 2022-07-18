import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Footer from "./components/footer/footer";
import Button from "@mui/material/Button";
import Header from "./components/header/header";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import ContactForm from "./components/contact form/contactForm";
import "./style.css";

function App() {
  const [content, setContent] = useState("WELCOME");

  return (
    <Typography>
      <Header />
      <Box component="span" sx={{ margin: "120px", p: 2 }}>
        <Grid
          container
          columnSpacing={2}
          direction="column"
          alignItems="center"
        >
          <Card sx={{ width: 500, height: 650 }}>
            <CardContent>
              <Typography variant="h6">
                <p1>{content}</p1>
              </Typography>
            </CardContent>
            <Box textAlign="center">
              <CardActions textAlign="center">
                <buttons>
                  <Button
                    onClick={() =>
                      setContent(
                        "My name is Max Kennedy, I am a bootcamp graduate specializing in front-end web development"
                      )
                    }
                    variant="text"
                  >
                    About Me
                  </Button>
                  <Button
                    onClick={() => setContent(<ContactForm />)}
                    variant="text"
                  >
                    Contact
                  </Button>
                  <Button
                    onClick={() => setContent("Here are some things I've made")}
                    variant="text"
                  >
                    Projects
                  </Button>
                </buttons>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      </Box>

      <Box component="content" sx={{ border: "3px grey" }}>
        <Footer />
      </Box>
    </Typography>
  );
}

export default App;
