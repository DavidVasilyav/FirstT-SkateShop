"use client";
import React from "react";
import { Box, Button } from "@mui/material";

function ScrollBtn() {
  return (
        <btn onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <Box sx={{ bgcolor: "text.textBg",width: 100, cursor:'pointer', borderRadius: 10, textAlign:'center', border: '2px solid', borderColor:'primary.main'  }}>
      <Box
        sx={{ color: "text.primary", 
    }}
      >

        To Top
      </Box>
    </Box>
        </btn>
  );
}

export default ScrollBtn;
