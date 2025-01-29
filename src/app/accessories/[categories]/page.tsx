'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Box, Grid } from '@mui/material';


export default async function page() {
  const params = useParams<{ tag: string; item: string }>()
  return (
    <>
    {/* {params.categories} */}
    <Box height={'80vh'}  sx={{border:'2px solid black'}}>
    <Box
        minHeight={"80vh"}
        sx={{
          border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        //   flexDirection: "column",
        }}
      >
        <Box sx={{
            position:'absolute',
            left: 5
        }}>{params.categories}</Box>


        <Grid container spacing={0} width={'50%'}
        >
          {obj.map((item) => (
              <Grid item xs={6} sm={4}>

              <Box
                sx={{
                    bgcolor: " red",
                    border: "2px solid white",
                    display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        //   width: 100
                }}
                >
                {item}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </>
  )
}
