'use client'
import {useState} from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
import ImageGalleryHome from '../../../../components/homePageImageGallery/ImageGalleryHome';
export default function HorizontalLinearStepper() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  
  return (
    <Box>
      <ImageGalleryHome />
    </Box>
    
  )
}
