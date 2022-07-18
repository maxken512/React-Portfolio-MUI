import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function ContactForm() {
  const [status, setStatus] = useState("Send");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("message sent");
    setStatus("Sending..");
    const { name, email, message } = event.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send");
    let result = await response.json();
    alert(status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        <Typography variant="h5">Send me an email</Typography>
        <div>
          <TextField
            fullWidth
            type="text"
            id="name"
            label="name"
            size="small"
            margin="normal"
          />

          <TextField
            fullWidth
            type="email"
            id="email"
            label="email"
            size="small"
          />

          <TextField
            fullWidth
            size="small"
            margin="normal"
            id="message"
            label="message"
            multiline
            rows={4}
          />
        </div>
        <div>
          <Button type="submit" variant="contained">
            {status}
          </Button>
        </div>
      </Box>
    </form>
  );
}

export default ContactForm;
