// third party
import { Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//react
import { useEffect, useState } from "react";
import axios from "axios";

//material ui theme

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Test() {
  const [val, setValue] = useState([]);
  const [questionCount, setQuestionCount] = useState();
  useEffect(() => {
    const getAppointment = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/test");
        setValue(res?.data?.questions);
        setQuestionCount(res?.data?.questionCount);
      } catch (error) {
        console.log(error);
      }
    };
    getAppointment();
  }, [questionCount, val]);

  return (
    <>
      <Typography style={{ marginBottom: 30, marginLeft: 450, marginTop: 40 }}>
        {questionCount
          ? `You have now total :${questionCount} questions`
          : "There is no questions exist"}
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid container item spacing={4} xs={12}>
            {val?.map((question, i) => {
              return (
                <Grid item lg={4} key={i}>
                  {<Item>{`Questoin is : ${question?.question}`}</Item>}
                  <Item sm={12}>
                    {question?.options.map((option) => {
                      return <li>{option}</li>;
                    })}
                  </Item>
                  <Item>
                    <Typography variant="h5">{` Right anser is: ${question?.answer}`}</Typography>
                  </Item>
                  <br />
                  <br />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Test;
