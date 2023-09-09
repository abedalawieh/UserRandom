import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { RecoveryContext } from "../App";
import { useContext, useState, useEffect } from "react";

export default function FirstComponent() {
  const { low, setLow, high, setHigh } = useContext(RecoveryContext);

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography>Sort by date of birth</Typography>
        <DatePicker
          label="From"
          onChange={(date) => {
            if (date) {
              const isoDate = date.toISOString();
              setLow(isoDate);
            } else {
              setLow(null);
            }
          }}
        />
        <DatePicker
          label="To"
          onChange={(date) => {
            if (date) {
              const isoDate = date.toISOString();
              setHigh(isoDate);
            } else {
              setHigh(null);
            }
          }}
        />{" "}
      </LocalizationProvider>
    </Container>
  );
}
