import React from "react";
import { Box, Button } from "@mui/material";
interface BtnProps {
  name: string;
  click: any;
}
export default function GlobalBtn(btnProps: BtnProps) {
  return (
    <>
      <Button
        sx={{
          color: "text.primary",
          bgcolor: "text.background",
          // borderRadius: 5,
          fontSize: 18,
          height: '25px',
          border:'2px solid',
          borderColor:'text.background',
          ":hover": {
            bgcolor: "text.primary",
            color: "text.background",
            transition: "1s",

          },
        }}
      >
        {btnProps.name}
        </Button>
    </>
  );
}
