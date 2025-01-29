"use client";
import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Video from "next-video";
import styles from "./page.module.css";
import { Box, Button, Fade } from "@mui/material";
import GlobalBtn from "../../components/globalBtn/GlobalBtn";
import Link from "next/link";
import LogoImg from "../../public/img/SkateBoard/Logo.png";
import { TypeAnimation } from "react-type-animation";
import ImageGalleryHome from "../../components/homePageImageGallery/ImageGalleryHome";
import logosForHomePage from "@/../public/img/homeGallery/logosForHomePage.png";
import skateVideo from "@/../videos/all_skater.mp4json";
import HomePageCategories from "../../components/homePageCategories/HomePageCategories";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
export default function Home() {
  const [scrolling, setScrolling] = useState(0);
  const [showPants, setShowPants] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  const [bgAttachment, setAttachment] = useState("");

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

  const onScroll = useCallback(
    (event: any) => {
      const { pageYOffset, scrollY } = window;
      console.log(scrollY);
      if (scrollY > 200) {
        setShowPants(true);
      }
      if (scrollY > 840) {
        setShowAccessories(true);
      }
      if (scrollY < 50) {
        setShowPants(false);
      }
    },
    [showPants, showAccessories]
  );

  useEffect(() => {
    checkIfIphone();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [bgAttachment]);
  return (
    <>
      <Box
        // width={"100vh"}
        bgcolor={"primary.secondary"}
        className={styles.all_page}
        sx={{
          display: "flex",
          // justifyContent:'center',
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          height={"78vh"}
          className={styles.main_container}
          sx={{
            bgcolor: "primary.secondary",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundAttachment: bgAttachment,
            width: { xs: "100%", sm: "100%" },
          }}
        >
          <Fade in={true} timeout={2000}>
            <Box
              sx={{
                bgcolor: "#000000d5",
                color: "#fffffe",
                width: { xs: "auto", sm: 550 },
                height: "auto",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderColor: "text.primary",
                borderRadius: 2,
                fontSize: 50,
                m: 1,
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                {/* <Box>Skate Shop</Box> */}
                <Box sx={{ color: "#c395e8" }}>T</Box>
                <Box>First</Box>
              </Box>
              <SkateboardingIcon fontSize="large" />

              {/* <TypeAnimation
              // sequence={[1000, "Time to build new Skateboard."]}
              sequence={[1000, " ברוכים הבאים לחנות הסקייט החדשה בישראל עם כול החברות הכי שוחטות שיש האתר יעלה בקרוב... בזמן הזה תוכלו להתעדכן איתנו במלאי ולהזמין באינסטגרם"]}
              repeat={Infinity}
              style={{
                fontSize: "20px",
                width: 500,
                color: "#fffffe",
              }}
              cursor={false}
            /> */}
              <Box
                sx={{ fontSize: { xs: 20, sm: 25 }, color: "text.secondary" }}
              >
                ברוכים הבאים לחנות הסקייט החדשה בישראל מביאים לכם את החברות הכי
                שוחטות שיש האתר יעלה בקרוב!
              </Box>
              <Box
                              sx={{ mt:1 ,fontSize: { xs: 20, sm: 25 }, color: "#fffe" }}

              >בזמן הזה תוכלו להתעדכן איתנו במלאי ולהזמין באינסטגרם:</Box>
              <Box>
                <Link href="https://www.instagram.com/firstt.sk8/">
                  <InstagramIcon
                    sx={{
                      color: "white",
                      fontSize: { xs: 35, sm: 50 },
                      transition: "0.5s",
                      ":hover": {
                        fontSize: { xs: 40, sm: 55 },
                        color: "#c395e8",
                      },
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Fade>
          <Box></Box>

          {/* <Box
          sx={{
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          Scroll down
        </Box> */}
          <Box sx={{ bgcolor: "#000000b9" }}>
            {/* <Image src={logosForHomePage} width={500} /> */}
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "auto", sm: "80%" },
            height: "auto",
            position: "relative",
            bgcolor: "primary.secondary",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            alt="mainLogos"
            src={"/img/homeGallery/logosForHomePage.png"}
            width={500}
            height={500}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <ImageGalleryHome />
        </Box>

        {/* <Box sx={{ fontSize: 28 }}>Time to Skate</Box> */}
        {/* <Box
          sx={{
            color: "text.primary",
            height: 100,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ fontSize: 28 }}>בנה את הסקייט שלך</Box>
        </Box> */}

        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
        <HomePageCategories />
        
        </Box> */}
      </Box>
    </>
  );
}
