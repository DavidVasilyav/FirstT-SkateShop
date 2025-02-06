"use client";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../lib/redux/reducers/setDarkOrLightMode";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function DarkLightBtn() {
  const dispatch = useDispatch();
  const darkOrLightState = useSelector(
    (state) => state.darkOrLightMode.darkOrLight
  );
  const [mode, setMode] = useState("light");
  const [icon, setIcon] = useState(true);
  const toggleColorMode = () => {
    setIcon((state) => !state)
    dispatch(setTheme());
  };

  useEffect(() => {
    setMode(darkOrLightState);
  }, [darkOrLightState, mode]);
  return (
    <>
      <Box
        sx={{
          position:'sticky',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "text.primary",
          cursor: "pointer",
          zIndex: 1,
          bottom: 25,
          marginLeft: {xs: '90%', sm: '95%'},
          pb: 1,
          
        }}
        onClick={toggleColorMode}
      >
        {icon ? (<>
        <DarkModeIcon sx={{ 
          fontSize: {xs: 30},
          ':hover': {
            color: 'text.secondary'
          }
        }}/>
        
        </>): (<>
          <LightModeIcon sx={{
            ':hover': {
            color: 'text.secondary'
          }
          }}/>
        </>)}
      </Box>
    </>
  );
}
