import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./HomePageBrands.moudle.css";
import { Box } from "@mui/system";
import Image from "next/image";

const animation = { duration: 40000, easing: (t) => t }



export default () => {
  const logoImages = ["logo1.png", "logo2.png", "logo3.png", "logo4.png"];
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    renderMode: "performance",
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    slides: {
      perView: 3,
    },
    
  });

  return (
    <Box
      ref={sliderRef}
      className="keen-slider"
      sx={{
        height: { xs: 120, sm: 160, md: 210, xl: 250 },
        bgcolor: "primary.secondary",
        maxWidth: { xs: "100%", sm: "100%", xl: '60%' },
      }}
    >
      {logoImages.map((one, index) => (
        <>
          <Box
            className={`keen-slider__slide number-slide${1}`}
            sx={{ position: "relative", display: "flex" }}
          >
            <Image alt={index + one} src={`/img/brands/${one}`} fill={true} />
          </Box>
        </>
      ))}
      {/* <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
    </Box>
  );
};
