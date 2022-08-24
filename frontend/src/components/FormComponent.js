// third party
import React from "react";
import { Checkbox, Button, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/joy";

//Context Api
import { useContext } from "react";
import CartContext from "../context/TextFiledContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FormComponent() {
  const { InputValue } = useContext(CartContext);
  const { SelectedValue } = useContext(CartContext);
  const [checkBox, setCheckBox] = useState([]);
  const [value, setValue] = useState([]);
  SelectedValue(checkBox);

  const handleChange = (onChangeValue, i) => {
    const inputData = [...value];
    inputData[i] = onChangeValue.target.value;
    setValue(inputData);
    InputValue(value);
    setCheckBox(value[i]);
  };

  const newCheckBox = () => {
    setValue([...value, []]);
  };
  const handleDelete = (i) => {
    const deleteVal = [...value];
    deleteVal.splice(i, 1);
    setValue(deleteVal);
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2 }} type="A" row>
        <ol>
          {value?.map((check, i) => {
            return (
              <Box key={i}>
                <Checkbox {...label} onClick={(e) => handleChange(e, i)} />
                <TextField
                  sx={{ width: "60%", marginBottom: 2 }}
                  id="outlined-basic"
                  label="Enter your Option"
                  variant="outlined"
                  onChange={(e) => handleChange(e, i)}
                />
                <Button onClick={(e) => handleDelete(e, i)}>
                  <DeleteIcon />
                </Button>
              </Box>
            );
          })}
        </ol>
      </Box>

      <Button onClick={newCheckBox}>
        <h3>
          Add new Checkbox <AddCircleIcon />
        </h3>
      </Button>
    </>
  );
}
export default FormComponent;
