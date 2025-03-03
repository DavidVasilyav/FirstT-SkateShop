"use client";
import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import MenuIconButton from "./MenuIconButton";
import Box from "@mui/material/Box";
import DarkLightBtn from "../../components/darkLightBtn";
import Link from "next/link";
import Image from "next/image";
import mainLogo from "@/../public/img/Logo.jpg";
import { FaRegUser } from "react-icons/fa";
import { Typography } from "@mui/material";

// const pages = ["Boards", "Accessories", "Info"];
const menuItems = [
  { Id: 1, Title: "סקייטבורד", link: "boards" },
  { Id: 2, Title: "ביגוד", link: "clothes" },
];
const menuUser = [
  { Title: "התחבר", link: "login" },
  { Title: "הירשם", link: "register" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [hoverColor, setHoverColor] = useState("");
  const [showBorder, setShowBorder] = useState("0");
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    // console.log(scrollY);
    if (pathname == "/") {
      if (scrollY > 1) {
        setShowBorder("100%");
      }
      if (scrollY < 30) {
        setShowBorder("0");
      }
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    if (pathname == "/") {
      setShowBorder("0");
    } else setShowBorder("100%");
  }, [showBorder, pathname]);

  return (
    <Box
      sx={{
        position: "sticky",
        top: "0px",
        zIndex: 1,
        bgcolor: "primary.main",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="menu_box"
          sx={{
            color: "text.primary",
            position: "absolute",
            right: 20,
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            gap: 2,
          }}
        >
          <Box sx={{display:{xs: 'none', md: 'block'}}}>
          <Box sx={{ fontSize: 25 }}>
              <Link href={"/user/profile"}>
                <FaRegUser />
              </Link>
            </Box>

          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: 3,
              alignItems: "center",
            }}
          >
            <Box sx={{ fontSize: 25 }}>
              <Link href={"/user/profile"}>
                <FaRegUser />
              </Link>
            </Box>
            <MenuIconButton menuItems={menuItems} menuUser={menuUser} />
          </Box>
        </Box>

        <Box
          className="logo_box"
          sx={{
            position: "absolute",
            left: 20,
            color: "text.primary",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Link href={"/"}>
            <Box
              sx={{
                position: "relative",
                width: 80,
                height: 70,
              }}
            >
              <Image
                alt="Logo"
                src={mainLogo}
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Link>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            {menuItems.map((menuItems) => (
              <>
                <Link href={`/${menuItems.link}`}>
                  <Box
                    key={menuItems.Title}
                    sx={{
                      color: "text.primary",
                      transition: "0.5s",
                      ":hover": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    <Typography variant="button" sx={{fontSize: 20}}>

                    {menuItems.Title}
                    </Typography>
                  </Box>
                </Link>
              </>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: "solid",
          // borderWidth: 3,
          borderColor: "primary.secondary",
          width: showBorder,
          transition: "width 0.5s",
          transitionTimingFunction: "ease-in-out",
        }}
      />
    </Box>
  );
}
export default Navbar;
