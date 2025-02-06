'use client'
import {useState} from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./HomePageCategories.moudle.css"
import home1 from '@/../../public/img/homeGallery/home1.jpg'
import home2 from '@/../../public/img/homeGallery/home2.jpg'
import home3 from '@/../../public/img/homeGallery/home3.jpg'
import home4 from '@/../../public/img/homeGallery/home4.jpg'
// import home5 from '@/../../public/img/homeGallery/home5.jpg'
const animation = { duration: 15000, easing: (t: number) => t }

export default function ImageGalleryHome() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    rtl: true,
    // loop: true,
    renderMode:'performance',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(s) {
      s.moveToIdx(5, true, animation)
      setLoaded(true)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  });

  return (
    <>
    <Box sx={{width: {xs:'320px', sm: '350px'}, pt: 5, borderRadius: '5%',}}>

      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <Image alt='1' src={home1} className="keen-slider__slide number-slide1"></Image>
          <Image alt='2' src={home2} className="keen-slider__slide number-slide2"></Image>
          <Image alt='3' src={home3} className="keen-slider__slide number-slide3"></Image>
          <Image alt='4' src={home4} className="keen-slider__slide number-slide4"></Image>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}

             
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>

)}
</Box>
    </>
  )
}

function Arrow(props: any) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
