'use client'
import {useState} from 'react'
import { Box } from '@mui/system'
import Link from 'next/link';
import styles from "./HomePageCategories.module.css";

function HomePageCategories() {
  const [sizeOne, setSizeOne] = useState("50%");
  const [sizeTwo, setSizeTwo] = useState("50%");

  const setSize = (size1: string, size2: string) => {
    setSizeOne(size1);
    setSizeTwo(size2);
    return;
  };

  return (
    <Box
    sx={{
      mb: { xs: 0, sm: 1 },
      display: "flex",
      width: { xs: "50vh", sm: "100%" },
      height: { xs: 500, sm: "40vh" },
      flexDirection: { xs: "column", sm: "row" },
    }}
  >
    <Box
      onMouseEnter={() => setSize("55%", "45%")}
      onTouchStart={() => setSize("80%", "20%")}
      onMouseLeave={() => setSize("50%", "50%")}
      onTouchEnd={() => setSize("50%", "50%")}
      className={styles.woman_box}
      bgcolor={"red"}
      height={"100%"}
      sx={{
        borderRight: "5px solid",
        borderColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: sizeOne },
      }}
    >
      <Link href={"/boards"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          width={"30vw"}
          height={"30vw"}
        >
          <Box
            sx={{
              color: "text.primary",
              bgcolor: "text.background",
              transition: "ease-in-out 0.5s",
              width: { xs: "10vh" },
              ":hover": {
                bgcolor: "text.primary",
                color: "text.background",
                width: "12vh",
              },
            }}
            textAlign={"center"}
            borderRadius={1}
            p={0.5}
            bgcolor={"primary.third"}
            color={"primary.main"}
          >
            {/* Boards */}
            סקייטבורד
          </Box>{" "}
        </Box>
      </Link>
    </Box>
    <Box
      onMouseEnter={() => setSize("45%", "55%")}
      onTouchStart={() => setSize("20%", "80%")}
      onMouseLeave={() => setSize("50%", "50%")}
      onTouchEnd={() => setSize("50%", "50%")}
      className={styles.man_box}
      bgcolor={"blue"}
      height={"100%"}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: { xs: "100%", sm: sizeTwo },
        alignItems: "center",
        mb: { xs: 1, sm: 0 },
        mt: { xs: 1, sm: 0 },
      }}
    >
      <Link href={"/accessories"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          width={"30vw"}
          height={"30vw"}
        >
          <Box
            sx={{
              color: "text.primary",
              bgcolor: "text.background",
              width: { xs: "10vh" },
              transition: "ease-in-out 0.5s",
              ":hover": {
                bgcolor: "text.primary",
                color: "text.background",
                width: "12vh",
              },
            }}
            textAlign={"center"}
            borderRadius={1}
            p={0.5}
            bgcolor={"primary.third"}
            color={"primary.main"}
          >
            {/* Accessories */}
            אביזרים
          </Box>
        </Box>
      </Link>
    </Box>
  </Box>
  )
}

export default HomePageCategories