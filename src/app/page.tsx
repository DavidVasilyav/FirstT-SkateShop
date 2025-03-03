"use client";
import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Video from "next-video";
import styles from "./page.module.css";
import { Box, Button, Fade, Typography } from "@mui/material";
import GlobalBtn from "../../components/globalBtn/GlobalBtn";
import Link from "next/link";
import LogoImg from "../../public/img/SkateBoard/Logo.png";
import { TypeAnimation } from "react-type-animation";
import ImageGalleryHome from "../../components/homePageImageGallery/ImageGalleryHome";
import homeBigLogo2 from "@/../public/img/homeBigLogo2.png";
import skateVideo from "@/../videos/all_skater.mp4json";
import HomePageCategories from "../../components/homePageCategories/HomePageCategories";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomePageBrands from "../../components/homePageBrands/HomePageBrands";

export default function Home() {
  const [scrolling, setScrolling] = useState(0);
  const [bgAttachment, setAttachment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const dummyData = ['a','b','c','d','e','f']
  const logoImages = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png']
  const itemsPerPage = 2;
  const totalPages = Math.ceil(logoImages.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  console.log(indexOfLastItem);
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = logoImages.slice(indexOfFirstItem, indexOfLastItem);


  const checkIfIphone = () => {
    let isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS) {
      setAttachment("none");
      console.log("iphone");
    } else {
      setAttachment("fixed");
      console.log("none iphone");
    }
  };

  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    // console.log(scrollY);
    if (scrollY > 200) {
    }
    if (scrollY > 840) {
    }
    if (scrollY < 50) {
    }
  }, []);

  useEffect(() => {
    checkIfIphone();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [bgAttachment]);
  const text =
    " ברוכים הבאים לחנות הסקייט החדשה בישראל מביאים לכם את המותגים הכי חמים!\n האתר יעלה בקרוב...";
  return (
    <>
      <Box
        // width={"100vh"}
        bgcolor={"primary.main"}
        className={styles.all_page}
        sx={{
          display: "flex",
          // justifyContent:'center',
          alignItems: "center",
          flexDirection: "column",
          borderColor: "primary.main",
          // borderTop: 'double 3',
          overflowY: "hidden",
          overflowX: 'hidden'
        }}
      >
        <Box
          height={"70vh"}
          className={styles.main_container}
          sx={{
            // bgcolor: "primary.secondary",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundAttachment: bgAttachment,
            width: { xs: "100%", sm: "100%" },
          }}
        >
             <Box sx={{height:300, width:'100%', bgcolor: '#ffffff', borderRadius: 0, mr:{xs:5, sm: 0} }}>
              <Image src={homeBigLogo2} height={400} width={550} alt="first-T SkateBoard shop logo סקייטבורד" />
              </Box>
          <Fade in={true} timeout={2000}>
            <Box
              sx={{
                // bgcolor: "#000000d5",
                color: "#fffffe",
                width: { xs: 400, sm: 550 },
                height: "500px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderColor: "text.primary",
                borderRadius: 2,
                fontSize: 80,
              }}
            >
           
              <Box sx={{ display: "flex" }}>
              </Box>
              <SkateboardingIcon
                sx={{
                  color: "text.primary",
                  borderBottom: "2px solid",
                  borderColor: "primary.secondary",
                  pt: 1
                }}
                fontSize="large"
              />

            
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 25 },
                  color: "text.primary",
                  whiteSpace: "pre-line",
                }}
              >
                {text}
              </Typography>
              <Typography
                variant="overline"
                sx={{
                  fontSize: { xs: 20, sm: 25 },
                  color: "text.secondary",
                }}
              >
                חפשו אותנו באינסטגרם:
              </Typography>
              <Box>
                <Link href="https://www.instagram.com/firstt.sk8/">
                  <InstagramIcon
                    sx={{
                      color: "text.primary",
                      fontSize: { xs: 35, sm: 50 },
                      transition: "0.5s",
                      borderBottom: "2px solid black",
                      ":hover": {
                        fontSize: { xs: 40, sm: 55 },
                        color: "#7b4da1",
                      },
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Fade>
        </Box>
      
        <Box
          sx={{
            // width: { xs: "auto", sm: "80%" },
            height: "auto",
            position: "relative",
            bgcolor: "primary.secondary",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", mt: 9,
            borderRadius: 5,
            width: 600
          }}
        >
          
          {/* <Image
            alt="mainLogos"
            src={"/img/homeGallery/logosForHomePage.png"}
            width={500}
            height={500}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          /> */}
        </Box>
          <HomePageBrands />
            
        {/* <Box sx={{ height: 200, bgcolor:'primary.secondary', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', gap: 10, overflowX:'auto', scrollbarWidth: 50 }}>
        <Button sx={{display:'flex',}} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage == 1}>
        <ArrowForwardIosIcon />
         <SkateboardingIcon />
         </Button>
         {logoImages.map((one, index) => (
          <>
          <Box sx={{  width: 120, height: 50, display:'flex', justifyContent:'center', alignItems:'center', }}>
            <Image alt={index + one} src={`/img/brands/${one}`} width={200} height={150} />
          </Box>
          </>
         ))}
         <Button sx={{display:'flex',}} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == 2}>
         <SkateboardingIcon sx={{transform:'scaleX(-1)', }}  />
         <ArrowBackIosNewIcon />
         </Button>
        </Box> */}
        <Fade in={true} timeout={2000}>
          <Box>
            <ImageGalleryHome />
          </Box>
        </Fade>
      </Box>
    </>
  );
}
