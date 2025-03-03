"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Button, TextField, Alert, CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

// פונקציה לשליחת הנתונים לשרת
const updateUserData = async (userData) => {
  try {
    const response = await fetch("/api/updateUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) throw new Error("שגיאה בעדכון הנתונים. נסה שוב.");
    
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "שגיאה בלתי צפויה.");
  }
};

const UserTab = ({ data }) => {
  const [newData, setNewData] = useState(data || {});
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...newData });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleEditClick = () => setIsEditing(true);

  const handleCancelEdit = () => {
    setEditedData({ ...newData }); // שחזור הנתונים המקוריים
    setErrors({});
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });

    if (e.target.value.trim()) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // הסרת השגיאה
    }
  };

  const handleSaveEdit = async () => {
    setApiError("");
    setLoading(true);

    const requiredFields = ["FirstName", "LastName", "Email", "Phone", "Street", "FloorNumber", "HouseApsNumber", "PostalCode"];
    let newErrors = {};

    requiredFields.forEach((field) => {
      if (!editedData[field]?.trim()) newErrors[field] = "שדה זה הוא חובה";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const updatedUser = await updateUserData(editedData);
      setNewData(updatedUser);
      setIsEditing(false);
    } catch (error) {
      setApiError(error.message);
    }

    setLoading(false);
  };

  return (
    <Card sx={{ marginBottom: 3, padding: 2, boxShadow: 3 }}>
      <CardContent >
        <Box sx={{display:'flex'}}>
        <Typography variant="h6" gutterBottom>
          מידע אישי
        </Typography>
        <Typography sx={{fontSize: 20, ml:0.5}}>
        🪪
        </Typography>
        </Box>

        {apiError && <Alert severity="error" sx={{ mb: 2 }}>{apiError}</Alert>}

        {isEditing ? (
          <Box sx={{ maxWidth: 500, p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { label: "שם פרטי", name: "FirstName" },
              { label: "שם משפחה", name: "LastName" },
              { label: "דוא״ל", name: "Email" },
              { label: "טלפון", name: "Phone" },
              { label: "כתובת", name: "Street" },
              { label: "קומה", name: "FloorNumber" },
              { label: "מספר דירה/בית", name: "HouseApsNumber" },
              { label: "מיקוד", name: "PostalCode" },
            ].map((field) => (
              <TextField
                key={field.name}
                label={field.label}
                name={field.name}
                value={editedData[field.name] || ""}
                onChange={handleInputChange}
                fullWidth
                error={!!errors[field.name]}
                helperText={errors[field.name] || ""}
              />
            ))}

            <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="success"
                onClick={handleSaveEdit}
                startIcon={loading ? <CircularProgress size={20} /> : <SaveIcon />}
                disabled={loading}
              >
                {loading ? "שומר..." : "שמור"}
              </Button>
              <Button variant="contained" color="error" onClick={handleCancelEdit} startIcon={<CancelIcon />}>
                ביטול
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            <Typography variant="body1">שם פרטי: {newData.FirstName || "לא הוזן"}</Typography>
            <Typography variant="body1">שם משפחה: {newData.LastName || "לא הוזן"}</Typography>
            <Typography variant="body1">דוא"ל: {newData.Email || "לא הוזן"}</Typography>
            <Typography variant="body1">טלפון: {newData.Phone || "לא הוזן"}</Typography>
            <Typography variant="body1">
              כתובת: {newData.Street || "לא הוזן"} {newData.City ? `, ${newData.City}` : ""}
            </Typography>
            <Typography variant="body1">קומה: {newData.FloorNumber || "לא הוזן"}</Typography>
            <Typography variant="body1">מספר בית/דירה: {newData.HouseApsNumber || "לא הוזן"}</Typography>
            <Typography variant="body1">מיקוד: {newData.PostalCode || "לא הוזן"}</Typography>

            <Button variant="contained" color="primary" onClick={handleEditClick} sx={{ mt: 2 }} startIcon={<EditIcon />}>
              ערוך
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default UserTab;
