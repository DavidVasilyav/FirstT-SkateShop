"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Paper,
  Button,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  removeFromBasket,
  updateQuantity,
  updateQuantityIncrement,
  userBasket,
} from "@/app/api/userRequest";
import BasketTab from './BasketTab'
import UserTab from './UserTab'

const UserDashboard = ({ data, basket }) => {
  const [newBasket, setNewBasket] = useState(basket || []);
  const [user, setUser] = useState(data);
  const [tabIndex, setTabIndex] = useState(0); // Tab state
  
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  
  useEffect(() => {
  }, [newBasket]);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Navigation */}
      <Tabs
      TabIndicatorProps={{
        style: {
          backgroundColor: "#935FB2"
        }
      }}
        orientation="vertical"
        value={tabIndex}
        onChange={handleTabChange}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          color: "primary.main",
          "& .MuiTab-root.Mui-selected": {
            color: "text.primary", 
            fontWeight: "bold",
            
          },
        }}
      >
        <Tab label="מידע אישי" />
        <Tab label="פריטים בסל" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {tabIndex === 3 && (
          <Card sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                מידע אישי
              </Typography>
              <Typography variant="body1">
                <strong>שם פרטי:</strong> {data.FirstName}
              </Typography>
              <Typography variant="body1">
                <strong>שם משפחה:</strong> {data.LastName}
              </Typography>
              <Typography variant="body1">
                <strong>דוא"ל:</strong> {data.Email}
              </Typography>
              <Typography variant="body1">
                <strong>טלפון:</strong> {data.Phone}
              </Typography>
              <Typography variant="body1">
                <strong>כתובת:</strong> {`${data.Street}, ${data.City}`}
              </Typography>
              <Typography variant="body1">
                <strong>מספר קומה:</strong> {data.FloorNumber}
              </Typography>
              <Typography variant="body1">
                <strong>מספר בית/דירה:</strong> {data.HouseApsNumber}
              </Typography>
              <Typography variant="body1">
                <strong>מיקוד:</strong> {data.PostalCode}
              </Typography>
            </CardContent>
          </Card>
        )}
        {tabIndex === 0 && (
          <>
          <UserTab data={data} /> 
          </>
        )}

        {tabIndex === 1 && (
         <>
         <BasketTab basket={basket} userId={user.UserId}/>
         </>
        )}
      </Box>
    </Box>
  );
};

export default UserDashboard;
