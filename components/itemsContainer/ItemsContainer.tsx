"use client"
import { useState } from "react";
import { Box, Grid, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from "@mui/material";
import getItemByGender from "@/app/api/getDataByGender";
import Image from "next/image";
import styles from './itemsCss.module.css'
import image from "../../public/img/woman/womanShirts2.jpeg";
  
function ItemsContainer({data} : any) {
    const [color ,setColor] = useState('')
  // const data = await getItemByGender("Man");
  const obj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11];
  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };
  console.log(data);
  console.log(123);
  return (
    <Box
      height={"80vh"}
      sx={{
        // display: "flex",
        overflow:'auto',
        justifyContent: "center",
        alignItems: "center",
        //   flexDirection: "column",
      }}
    >
      <Box
      className={styles.filter}
        sx={{
          top: 0,
          width: '100%',
          height:'50px',
          bgcolor: 'primary.secondary'
        }}
      >
        123
      </Box>

      <Grid container spacing={1}  p={1}  >
        {
          data.map((item) => (
            <Grid key={item} item xs={6} sm={4} >
              <Box
                sx={{
                  // border: "2px solid black",
                  borderBottom: '2px solid black',
                  pb:1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box className={styles.item_image} sx={{height: 200,}}>
                  {/* <Image alt="Item Image" src={image} fill={true} /> */}
                </Box>
                <Box className="item_name" sx={{mb: 1}}>{item.name || "name"}</Box>
                <Box>Price : 200</Box>
                  <Box>Add To Bag</Box>
              </Box>
            </Grid>
          ))}
      </Grid>

    </Box>
  );
}

export default ItemsContainer;
