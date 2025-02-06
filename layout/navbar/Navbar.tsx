"use client";
import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileNavMenu from "./MobileNavMenu";
import Box from "@mui/material/Box";
import DarkLightBtn from "../../components/darkLightBtn";
import Link from "next/link";
import Image from "next/image";
import mainLogo from "@/../public/img/Logo.jpg";
// const pages = ["Boards", "Accessories", "Info"];
const pages = [
  { name: "סקייטבורד", link: "boards" },
  { name: "אביזרים", link: "accessories" },
];
const user = [
  { name: "הירשם", link: "register" },
  { name: "התחבר", link: "login" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const router = useRouter();
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
    if (scrollY > 60) {
      setShowBorder("100%");
    }
    if (scrollY < 50) {
      setShowBorder("0");
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <Box
      sx={{
        position: "sticky",
        top: "0px",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: "12vh",
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
            flexDirection: { xs: "row", sm: "row" },
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            123
            {/* {MobileNavMenu('block')} */}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <>
                <Link href={`/${page.link}`}>
                  <Box
                    key={page.name}
                    sx={{
                      color: "text.primary",
                      transition: "0.5s",
                      ":hover": {
                        color: "text.secondary",
                      },
                    }}
                  >
                    {page.name}
                  </Box>
                </Link>
              </>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: 20,
            color: "text.primary",
            display: "flex",
          }}
        >
          {/* Profile */}
          <Link href={"/"}>
            <Box
              sx={{
                position: "relative",
                width: 80,
                height: 70,
                bgcolor: "primary.main",
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
              display: "flex",
              gap: "10px",
            }}
          >
            {/* {user.map((use) => (
            <Box sx={{
              color: "text.primary",
              ':hover':{
                color:'text.secondary'
              }
            }}>
            <Link href={`/user/${use.link}`}>
            {use.name}
            </Link>
            </Box>
          ))} */}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: "solid",
          borderWidth: 3,
          width: showBorder,
          borderColor: "text.primary",
          transition: "width 0.5s",
          transitionTimingFunction: "ease-in-out",
        }}
      ></Box>
      <Box>
            {/* {MobileNavMenu('block')}  */}

      </Box>
    </Box>
  );
}
export default Navbar;
{
  /* <Box
      sx={{
        color: "text.secondary",
        borderBottom:'2px solid',
        borderColor: "primary.main",
        bgcolor:'primary.main',
        position:'fixed',
        width: '100%',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1,  }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
              <DarkLightBtn />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href='./'>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          </Link>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </Box> */
}
