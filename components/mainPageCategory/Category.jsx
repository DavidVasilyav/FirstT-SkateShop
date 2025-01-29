import React from "react";
import { Box, Button, Slide, Fade } from "@mui/material";
import styles from "./page.module.css";
import Link from "next/link";
export default function Category({
  text,
  className,
  direction,
  showEffect,
  timeout,
  linkWoman,
  linkMan,
}) {
  const [displayManOrWoman, setDisplayManOrWoman] = React.useState(false);
  return (
    <>
      <Box
        onMouseLeave={() => {
          setDisplayManOrWoman(false);
        }}
        onMouseEnter={() => setDisplayManOrWoman(true)}
        m={1}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        
        {displayManOrWoman ? (
          <Box
            sx={{
              bgcolor: "primary.main",
              textAlign: "center",
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              height: "30vh",
              width: "30vh",
            }}
          >
            <Box
            className={'womanBox'}
              sx={{
                position:'relative',
                transition: "2s",
                height: "100%",
                width: "100%",
                transition: 2,
              }}
            >
              <Fade timeout={1000} in={true}>
                <Box
                  className={styles[`${className}_woman`]}
                  sx={{
                    bgcolor: "text.textBg",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    transition: '2s',
                    ':hover':{
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: 30,
                      transition: "2s",
                      bgcolor: "text.textBg",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: '80%',
                      float: 'left',
                      transition: '0.7s',
                      ':hover': {
                        width: '200%',
                      }
                    }}
                  >
                    <Link href={`${linkWoman}`}>
                      <Button
                        sx={{
                          color: "text.primary",
                        }}
                      >
                        woman
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Fade>
            </Box>
            <Box
            className={'manBox'}
              sx={{
                transition: "2s",
                height: "100%",
                width: "100%",
              }}
            >
              <Fade timeout={1000} in={true}>
                <Box
                  className={styles[`${className}_man`]}
                  sx={{
                    bgcolor: "text.textBg",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      height: 30,
                      transition: "2s",
                      bgcolor: "text.textBg",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: '80%',
                      transition: '0.7s',
                      ':hover': {
                        width: '200%',
                      }
                    }}
                  >
                    <Link href={`${linkMan}`}>
                      <Button
                        sx={{
                          color: "text.primary",
                        }}
                      >
                        man
                      </Button>
                    </Link>
                  </Box>
                </Box>
</Fade>

            </Box>
          </Box>
        ) : (
          <>
          <Fade timeout={timeout} in={showEffect}>

            <Box
              className={styles[`${className}_main_container`]}
              sx={{
                bgcolor: "primary.main",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "30vh",
                width: "30vh",
                gap: 1,
                transition: "2s",
              }}
            >
              <Box
                sx={{
                  bgcolor: "text.textBg",
                  borderRadius: 8,
                  maxWidth: 120,
                  maxHeight: 90,
                  height: 55,
                  width: 100,
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: " linear 1.5s",
                }}
              >
                <Button
                  onClick={() => setDisplayManOrWoman(true)}
                  sx={{
                    color: "text.primary",
                  }}
                >
                  {text}
                </Button>
              </Box>
            </Box>
          </Fade>

          </>
        )}
      </Box>
    </>
  );
}
{
  /* <Slide in={showEffect} direction={direction} timeout={1200}>
      <Box
        onMouseLeave={() => {setDisplayManOrWoman(false)}}
        onMouseEnter={() => setDisplayManOrWoman(true)}
        className={styles[`${className}_main_container`]}
        sx={{
          display: "flex",
          height: "50vh",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "main.secondary",
          mt: 1,
          transform: "2s",
          transition: "2s",
          
        }}
      >
        {displayManOrWoman ? (
          <>
            <Fade timeout={1200} in={true}>
              <Box
                className={styles[`${className}_woman`]}
                sx={{
                  bgcolor: "primary.main",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  height: "100%",
                  transform: "2s",
                  transition: "2s",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "text.textBg",
                    width: 200,
                    height: 50,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    woman
                  </Button>
                </Box>
              </Box>
            </Fade>
            <Fade in={true} timeout={1200}>
              <Box
                className={styles[`${className}_man`]}
                sx={{
                  bgcolor: "primary.main",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "text.textBg",
                    width: 200,
                    height: 50,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    man
                  </Button>
                </Box>
              </Box>
            </Fade>
          </>
        ) : (
          <>
            <Box
              sx={{
                bgcolor: "text.textBg",
                width: 200,
                height: 50,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "2s",
                transition: "2s",
              }}
            >
              <Button
                onClick={() => setDisplayManOrWoman(true)}
                sx={{
                  color: "text.primary",
                }}
              >
                {text}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Slide> */
}
