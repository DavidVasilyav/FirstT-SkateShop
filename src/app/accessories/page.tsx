"use client";
import { useRef, useState, useEffect } from "react";
import Category from "../../../components/mainPageCategory/Category";
import { Box, Fade, Grid, Grow, Paper, Slide } from "@mui/material";
import Image from "next/image";
import styles from "./categories.module.css";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";
import backgroundShirts from "../../../public/img/backgroundShirts.jpg";
import backgroundPants from "../../../public/img/man/manPants.jpg";
import backgroundShoes from "../../../public/img/man/manShoes.jpg";
import backgroundAccessories from "../../../public/img/man/manAccessories.jpg";
import manUnderwear from '../../../public/img/man/manUnderwear.jpeg'
import GlobalBtn from "../../../components/globalBtn/GlobalBtn";
import Categories from "../../../components/categories/Categories";


export default function page() {
  const ref = useRef(null);
  const [goToCategory, setGoToCategory] = useState(null);
  const handleClick = async (num) => {
    await setGoToCategory(num);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const obj = [1, 2, 3, 4, 5, 6];
  const items = [
    { category: "Accessories", img: backgroundShirts.src, timeout: 2800 },
    { category: "Accessories", img: backgroundPants.src, timeout: 2800 },
    { category: "Accessories", img: backgroundShoes.src, timeout: 2800 },
    { category: "Accessories", img: backgroundAccessories.src, timeout: 2800 },
  ];

  useEffect(() => {}, [goToCategory]);
  return (
    <>
    <Categories category={items}  />
    </>
  
  );
}
