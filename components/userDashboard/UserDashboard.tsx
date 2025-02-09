'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Tabs, Tab } from '@mui/material';

const UserDashboard = ({ data }) => {
  const [newData, setNewData] = useState(data || {});
  const [tabIndex, setTabIndex] = useState(0); // State to handle selected tab

  useEffect(() => {
    if (!data) {
      // Set dummy data if no data is provided
      setNewData({
        Address: "בלפור 10 דירה 40",
        City: "אשקלון",
        FloorNumber: "50",
        HouseApsNumber: "10",
        PostalCode: "7849717",
        Street: "בלפור 10 דירה 40",
        Email: "david12788@gmail.com",
        FirstName: "y",
        LastName: "וסילייב",
        Phone: "0524245371",
        basketItems: [
          { name: "פריט 1", quantity: 2 },
          { name: "פריט 2", quantity: 1 },
          { name: "פריט 3", quantity: 5 },
        ]
      });
    } else {
      setNewData(data);
      console.log(newData);
    }
  }, [data]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar Navigation */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
       textColor="inherit"
        indicatorColor='secondary'
        value={tabIndex}
        onChange={handleTabChange}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="מידע אישי" />
        <Tab label="פריטים בסל" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {tabIndex === 0 && (
          <Card sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                מידע אישי
              </Typography>
              <Typography variant="body1">
                שם פרטי: {newData.FirstName}
              </Typography>
              <Typography variant="body1">
                שם משפחה: {newData.LastName}
              </Typography>
              <Typography variant="body1">
                דוא"ל: {newData.Email}
              </Typography>
              <Typography variant="body1">
                טלפון: {newData.Phone}
              </Typography>
              <Typography variant="body1">
                כתובת: {`${newData.Address.Street}, ${newData.Address.City}`}
              </Typography>
              <Typography variant="body1">
                מספר קומה: {newData.Address.FloorNumber}
              </Typography>
              <Typography variant="body1">
                מספר בית/דירה: {newData.Address.HouseApsNumber}
              </Typography>
              <Typography variant="body1">
                מיקוד: {newData.Address.PostalCode}
              </Typography>
            </CardContent>
          </Card>
        )}

        {tabIndex === 1 && (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                פריטים בסל
              </Typography>
              {newData.basketItems && newData.basketItems.length > 0 ? (
                newData.basketItems.map((item, index) => (
                  <Typography key={index} variant="body1">
                    {item.name} - כמות: {item.quantity}
                  </Typography>
                ))
              ) : (
                <Typography variant="body1">אין פריטים בסל.</Typography>
              )}
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default UserDashboard;
