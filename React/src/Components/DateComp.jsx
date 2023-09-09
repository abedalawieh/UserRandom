import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { RecoveryContext } from "../App";
import { useContext, useState, useEffect } from "react";

export default function FirstComponent() {
  const { low, setLow, high, setHigh } = useContext(RecoveryContext);
  const [first, setFirt] = useState(0);
  const [last, setLast] = useState(0);

  const dateLow = new Date(first);
  const dateHigh = new Date(last);
  const from = dateLow.getTime();
  const to = dateHigh.getTime();
  setLow(from);
  setHigh(to);

  useEffect(() => {
    const dateLow = new Date(first);
    const dateHigh = new Date(last);
    const from = dateLow.getTime();
    const to = dateHigh.getTime();
    const isoLow = new Date(from).toISOString();
    const isoHigh = new Date(to).toISOString();
    setLow(isoLow);
    setHigh(isoHigh);
  }, [first, last]);
  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography>Sort by date of birth</Typography>
        <DatePicker label="From" onChange={(e) => setFirt(e)} />

        <DatePicker label="To" onChange={(e) => setLast(e)} />
      </LocalizationProvider>
    </Container>
  );
}
