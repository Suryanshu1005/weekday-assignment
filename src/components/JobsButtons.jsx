import {Avatar, Button} from "@mui/material";
import React from "react";

const JobsButtons = () => {
  return (
    <div className="btn-apply">
      <Button
        sx={{
          color: "black",
          backgroundColor: "rgb(85, 239, 196);",
          width: "100%",
          fontWeight: "500",
          borderRadius: "8px",
          padding: "10px 18px",
          fontSize: "15px",
          ":hover": {
            backgroundColor: "rgb(85, 239, 196);",
          },
          fontFamily: "Lexend",
          textTransform: "capitalize",
        }}
      >
        ⚡ Easy Apply
      </Button>
      <Button
        sx={{
          color: "white",
          backgroundColor: "rgb(73 67 218);",
          width: "100%",
          fontWeight: "300",
          borderRadius: "8px",
          padding: "10px 18px",
          fontSize: "16px",
          ":hover": {
            backgroundColor: "rgb(73 67 218);",
          },
          fontFamily: "Lexend",
          textTransform: "capitalize",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Avatar
            src="https://cdn.dribbble.com/users/108761/screenshots/1929245/dribbble-avatar-developer.png"
            variant="circular"
            sx={{
              width: "25px",
              height: "25px",
            }}
          />
          <Avatar
            src="https://cdn.dribbble.com/users/108761/screenshots/1929245/dribbble-avatar-developer.png"
            variant="circular"
            sx={{
              width: "25px",
              height: "25px",
              mr: "10px",
            }}
          />
        </div>
        Unlock referral asks
      </Button>
    </div>
  );
};

export default JobsButtons;
