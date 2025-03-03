import React from 'react'
import { Box } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
function Footer() {
  return (
    <>
   <Box
    sx={{
      bgcolor: "primary.main",
      color: "text.secondary",
      borderTop: "2px solid",
      borderColor: "text.primary",
      height: '10vh',
      display:'flex',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
    }}
   >
    <Box sx={{display:'flex', gap: 1, ml: 1}}>
    <Link href={'https://www.instagram.com/firstt.sk8/'}>
    <InstagramIcon fontSize='large'  sx={{color:'#ff0d0d'}} />
    </Link>
    <WhatsAppIcon fontSize='large'  sx={{color:'green'}} />
    </Box>
    <Link href='https://www.linkedin.com/in/david-vasilyav-885245205/'>
    <Box sx={{color:'text.primary', fontSize: {xs: 12, sm: 15}, mt: 8, mr: 1, ':hover':{
      color:'#6921f0'
    }}}>

Ⓒ David_Vasilyav 
</Box>
    </Link>
   </Box>
   
    </>
  )
}

export default Footer