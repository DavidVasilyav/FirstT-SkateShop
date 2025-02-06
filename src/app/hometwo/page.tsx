import { Box } from "@mui/system";
import React from "react";
import home2 from "/";
import Image from "next/image";
export default function page() {
  return (
    <>
      <Box
        minHeight={"80vh"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ height: 500, width: "100%", position: "relative" }}>
          <Image src={"/img/homeGallery/homelogo2.png"} fill={true} />
        </Box>
      </Box>
    </>
  );
}
