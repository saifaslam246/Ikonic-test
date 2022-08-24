// third part
import * as React from "react";
import { useState, useContext } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled, Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
// Context Api
import CartContext from "../context/TextFiledContext";
// This project
import FormComponent from "./FormComponent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ItemLeft = styled(Item)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  width: "50%",
  marginLeft: 20,
}));
const ItemRight = styled(Item)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  width: "50%",
  marginLeft: 20,
}));
const TypographyWrapper = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  marginTop: 20,
  marginBottom: 20,
  color: "burlywood",
}));
const InfoPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  borderRadius: 0,
  padding: "10px",
  backgroundColor: "#f7f7f7",
  height: 38,
}));

export default function DirectionStack() {
  const { item, selectValue } = useContext(CartContext);
  const [inputData, setInputData] = useState();

  const formSubmit = () => {
    const formData = new FormData();
    formData.append("question", inputData);
    formData.append("option", item);
    formData.append("answer", selectValue);
    try {
      axios.post("http://localhost:4000/api/v1/questions", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <ItemLeft>
          <TypographyWrapper>Enter yout question</TypographyWrapper>
          <form onSubmit={formSubmit}>
            <Box>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Enter your Question"
                name="question"
                variant="outlined"
                onChange={(e) => setInputData(e.target.value)}
              />
            </Box>
            <FormComponent />
            <br />
            <Button
              sx={{ backgroundColor: "black" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit the Form
            </Button>
          </form>
        </ItemLeft>
        <ItemRight>
          <TypographyWrapper>Preview Mode</TypographyWrapper>
          <InfoPaper>
            {inputData ? `Q: ${inputData}` : "There is no question"}
          </InfoPaper>
          <Box sx={{ display: "flex", gap: 2 }} type="A" row>
            <ol type="A">
              {item?.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ol>
          </Box>
          <InfoPaper>
            {selectValue
              ? `Correct Answer is : ${selectValue}`
              : "No answer select"}
          </InfoPaper>
        </ItemRight>
      </Stack>
    </div>
  );
}
