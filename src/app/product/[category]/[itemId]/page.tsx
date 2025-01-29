"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Paper } from "@mui/material";
import Link from "next/link";
import getSpecificItem from "@/app/api/getSpecificItem";
import Image from "next/image";
import { display } from "@mui/system";
import GlobalBtn from "../../../../../components/globalBtn/GlobalBtn";
function page() {
  const params = useParams();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    return await getSpecificItem(params);
  };
  useEffect(() => {
    async function getData() {
      const res = await fetchData();
      setData(res.data);
      console.log(res.data);
    }
    getData();
  }, []);
  return (
    <>
      <Box sx={{ height: "80vh", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: 'space-evenly',
            alignItems: "center",
            flexDirection: "column",
            borderRight: "2px solid white",
            borderLeft: "2px solid white",
            width: "100%",
          }}
        >
          {data.map((item) => (
            <Paper>
              <Box sx={{ fontSize: { xs: 20, sm: 25 },
                  borderBottom: '2px solid',
                  borderColor: "text.background",
                  color: "text.primary",
                  display: "flex",
                  justifyContent: "center",
              }}>
                  {item.description}
                </Box>
              <Image
                width={250}
                height={250}
                alt="123"
                src={
                  "https://i5.walmartimages.com/asr/b927bfb2-114b-4570-9480-0fec0ef220e3.8392a86b577bedc71148089f573f0039.jpeg"
                }
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: 20,
                  color: "text.primary",
                }}
              >
                
                <Box
                  sx={{
                    mb: 1,
                    fontSize: {
                      xs: 16,
                      sm: 18,
                    },
                  }}
                >
                  <Box mt={1}>מותג: {item.Brand} </Box>
                  <Box mt={1}> גודל: {item.Size}</Box>
                  <Box mt={1}> מחיר: ₪{item.Price} </Box>
                </Box>
              </Box>
            </Paper>
          ))}

          <Box sx={{  display: "flex", gap: 1 }}>
            <GlobalBtn name="קנה עכשיו" />
            <GlobalBtn name="הוסף לסל" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default page;
