import React from 'react'
import { Box,Slide,Grid2, Fade } from '@mui/material'
import Link from 'next/link';
import GlobalBtn from '../globalBtn/GlobalBtn';
interface Props {
    category : any;
}

function Categories(props : Props) {
  return (
    <>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // justifyContent: "space-between",

        alignItems: "center",
        flexDirection: "column",
        bgcolor:'primary.main',
        minHeight:"80vh"
      }}
    >
      <Slide in={true} timeout={1500} >
      <Box
        sx={{
          width: "100%",
          height: 50,
          color:'text.primary',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 18
        }}
        >
        Everything for your Skate
      </Box>
        </Slide>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // bgcolor: "primary.secondary",
          // bgcolor:'red'
          // height:'80vh'
        }}
      >
        <Grid2 key={'container'} container spacing={1} sx={{mb: {xs: 1, sm: 0}}}>
          {props.category.map((oneCategory :any) => (
            <>
            <Fade in={true} timeout={oneCategory.timeout} 
                      > 
              <Grid2
                item
                size={{xs: 6, md: 3}}
                key={oneCategory.name}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href={`boards/${oneCategory.name}`}>
                  <Box
                    onTouchStart={() => console.log(123)}
                    width={200}
                    height={160}
                    sx={{
                      border: '3px solid',
                      textAlign:'center',
                      borderColor: 'primary.secondary',
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundImage: `url(${oneCategory.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      transition:'0.5s',
                      borderRadius: '5%',
                      ':hover': {
                        p:0.5
                      }
                    }}
                  >
                    <Box sx={{
                    }}>

                      <GlobalBtn name={oneCategory.nameHE}></GlobalBtn>
                    </Box>
                  </Box>
                </Link>
              </Grid2>
            </Fade>

            </>
          ))}
        </Grid2>
      </Box>

    </Box>
  </>

  )
}

export default Categories