import * as React from "react";
import { Button, Box } from "@mui/material";
import PopupState, { bindTrigger } from "material-ui-popup-state";
import { Link } from "react-router-dom";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Box style={{ backgroundColor: "black" }}>
            <Button
              variant="contained"
              {...bindTrigger(popupState)}
              sx={{ marginBottom: 5, marginTop: 5, marginLeft: 30 }}
            >
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Dashboard
              </Link>
            </Button>
            <Button
              variant="contained"
              {...bindTrigger(popupState)}
              sx={{ marginBottom: 5, marginTop: 5, marginLeft: 30 }}
            >
              <Link
                to="/test"
                style={{ color: "white", textDecoration: "none" }}
              >
                All Question
              </Link>
            </Button>
          </Box>
        </React.Fragment>
      )}
    </PopupState>
  );
}
