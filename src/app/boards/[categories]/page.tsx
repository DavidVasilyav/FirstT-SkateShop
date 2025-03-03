"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import getItemsFromBoard from "@/app/api/getItemsFromBoard";
import Image from "next/image";
import GlobalBtn from "../../../../components/globalBtn/GlobalBtn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MainLogo from "@/../public/img/Logo.png";
import { addToBasket } from "@/app/api/userRequest";
import getCookies from "@/app/api/getCookies";

export default function page() {
  const params = useParams<{ categories: string }>();
  const category = params.categories as string;
  const [sizeOne, setSizeOne] = useState(120);
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showItems, setShowItems] = useState([]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const items = [
    // Example array of items
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    // Add more items as needed
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const setSize = (size1: string, size2: string) => {
    setSizeOne(size1);
    return;
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const obj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const [file, setFile] = useState(null);
  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };
  useEffect(() => {
    async function getData() {
      const catalogData = await getItemsFromBoard(category);
      setData(catalogData.results);
      const userData = await getCookies();
      if (!userData) {
        return console.log(123);
      }
      setUser(userData.UserId);
      console.log(user);
    }
    getData();
  }, [currentPage]);

  return (
    <>
      <Box
        // flexGrow={1}
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2"> ...Coming Soon</Typography>
        <Grid
          key={"products"}
          container
          spacing={1}
          minWidth={"100%"}
          minHeight={"80vh"}
        >
          {currentItems.map((item) => (
            <>
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }} p={1}>
                {/* <Link href={`/boards/${category}/${item.id ? item.id : 'err'}`}> */}
                <Paper elevation={4}>
                  <Box
                    sx={{
                      height: 250,
                      fontSize: 13,
                      color: "text.primary",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 0.5,
                      // border: {sm: '2px solid black'},
                      textAlign: "center",
                      // borderTop: '2px solid black'
                    }}
                  >
                    <Link href={`/product/${category}/${item.id}`}>
                      <Box>
                        <Image
                          width={sizeOne}
                          alt={"404"}
                          height={120}
                          src={
                            "https://i5.walmartimages.com/asr/b927bfb2-114b-4570-9480-0fec0ef220e3.8392a86b577bedc71148089f573f0039.jpeg"
                          }
                        />
                      </Box>
                    </Link>

                    {/* <Box>{item.description} </Box>
                <Box> Brand: {item.Brand ? item.Brand : "Brand"}</Box>
                <Box>Size: {item.Size} </Box>
                <Box> Price: {item.Price}₪</Box> */}
                    <Box sx={{ bgcolor: "", color: "text.primary" }}>
                      <Box fontSize={{ xs: 30, sm: 35 }} fontWeight={'Blood'}>
                        {" "}
                        {item.Brand ? item.Brand : "Brand"}
                      </Box>
                      <Box
                        sx={{
                          fontSize: { xs: 20, sm: 25 },
                          mb: 1,
                          borderBottom: "1px solid",
                          borderColor: "text.primary",
                        }}
                      >
                        {item.description}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          fontSize: { xs: 20, sm: 25 },
                        }}
                      >
                        <Box>גודל: {item.Size} </Box>
                        <Box> מחיר: {item.Price}₪</Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      pb: 1,
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <GlobalBtn name="קנה עכשיו" />
                    <GlobalBtn
                      click={() =>
                        addToBasket({
                          userId: user,
                          productId: item.id,
                          productTable: params.categories,
                          quantity: 1,
                        })
                      }
                      name="הוסף לסל"
                    />
                  </Box>
                </Paper>
              </Grid>
            </>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 2,
            mb: 1,
            bgcolor: "#c395e8",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          <Button onClick={previousPage} disabled={currentPage === 1}>
            <ArrowForwardIosIcon />
          </Button>
          <Box>
            {totalPages}/{currentPage}
          </Box>
          <Button onClick={nextPage} disabled={currentPage === totalPages}>
            <ArrowBackIosIcon sx={{ color: "" }} />
          </Button>
        </Box>
      </Box>
    </>
  );
}
