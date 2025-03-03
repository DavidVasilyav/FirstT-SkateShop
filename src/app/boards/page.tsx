"use client";
import { useRef, useState, useEffect } from "react";
import Category from "../../../components/mainPageCategory/Category";
import { Box, Fade, Grid, Grow, Paper, Slide } from "@mui/material";
import Image from "next/image";
import styles from "./categories.module.css";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";
import Categories from "../../../components/categories/Categories";
import board from "../../../public/img/SkateBoard/skateParts/CategoryBoard.jpg";
import trucks from "../../../public/img/SkateBoard/skateParts/CategoryTrucks.jpg";
import wheels from "../../../public/img/SkateBoard/skateParts/CategoryWheels.jpg";
import BearingsAndHardware from "../../../public/img/SkateBoard/skateParts/CategoryBearingsAndHardware.jpeg";
import Risers from "../../../public/img/SkateBoard/skateParts/CategoryRisers.jpg";


export default function page() {
  const ref = useRef(null);
  const [goToCategory, setGoToCategory] = useState(null);
  const handleClick = async (num) => {
    await setGoToCategory(num);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const obj = [1, 2, 3, 4, 5, 6];
  const AllCategories = [
    { nameHE: "קרשים",name: "Decks", img: board.src, timeout: 2800 },
    { nameHE: "צירים",name: "Trucks", img: trucks.src, timeout: 2800 },
    { nameHE: "גלגלים",name: "Wheels", img: wheels.src, timeout: 2800 },
    // { nameHE: "",name: "Risers", img: Risers.src, timeout: 2800 },
    // { name: "Bushings", img: board.src, timeout: 2800 },
    // { name: "Bearings & Hardware", img: BearingsAndHardware.src, timeout: 2800 },
  ];

  useEffect(() => {}, [goToCategory]);
  return (
    <>
        <Categories category={AllCategories} />
    </>
  );
}
