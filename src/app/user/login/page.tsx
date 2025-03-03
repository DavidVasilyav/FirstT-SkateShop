"use client";
import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  createTheme,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material";
import { loginUser } from "@/app/api/userRequest";
import { redirect } from "next/navigation";
import { AxiosError } from "axios";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  var person = {
    name: userData,
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [btnText, setBtnText] = useState('התחבר ');

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setError(null);
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(userData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(false);
    if (userData.password == "" && userData.email == "") {
      console.log(123);
      return setTimeout(() => {
        setError("יש להזין איימיל וסיסמה");
        return setLoading(true);
      }, 2500);
    }

    if (userData.email == "") {
      return setTimeout(() => {
        setError("הזן כתובת איימיל");
        return setLoading(true);
      }, 2500);
    }
    if (userData.password == "") {
      return setTimeout(() => {
        setError("סיסמה לא הוזנה");
        setLoading(true);
      }, 2500);
    }

    const response = await loginUser(userData);
    console.log(response);
    if (response == "שם משתמש או סיסמה לא נכונים") {
      setTimeout(() => {
        setError("שם משתמש או סיסמה לא נכונים");
        return setLoading(true);
      }, 2500);
    } if ( response.message == 'Network Error') {
      console.log('err');
      setTimeout(() => {
        setError("תקלה אין אפשרות להתחבר");
        return setLoading(true);
      }, 2500);
    }
     else {
      // setDisableBtn(true)
      setBtnText(`ברוך הבא ${response.message}`)
      setTimeout(() => {
        return redirect('/') 

      }, 1500)
    }
  };
  useEffect(() => {}, []);

  return (

    <Container
      sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
      component="main"
      maxWidth="xs"
    >

      <Paper
      elevation={5}
      variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxHeight: "400px",
          minHeight: "400px",
          bgcolor: "text.background",
          p: 1,
          m: 1,
          borderRadius: 2,
          // display:'flex',
          justifyContent: "center",
        }}
      >
        <Typography sx={{ 
          fontSize: { xs: 25 },
          bottom: 20,
          position:'relative',
          color:'text.primary'

          
          }}>התחבר</Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="איימיל"
            name="email"
            autoComplete="email"
            autoFocus
            value={userData.email}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "text.secondary",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "text.primary",
              },
              "& .MuiOutlinedInput-root": {
                color: "text.primary",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.primary",
                borderWidth: "2px",
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userData.password}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "text.secondary",
                },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "text.primary",
              },
              "& .MuiOutlinedInput-root": {
                color: "text.primary",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.primary",
                borderWidth: "2px",
              },
            }}
          />

          {loading ? (
            <>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={disableBtn}
>
  התחבר
              </Button>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  flexDirection: 'column',
                  mt: 1,
                }}
              >
                  <CircularProgress sx={{ color: "primary.secondary" }} />
                <Box sx={{ pt: 3}}>
                {btnText}

                </Box>

              </Box>
            </>
          )}
          {error ? (
            <>
              <Alert severity="error">{error}</Alert>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Paper>

    </Container>
  );
}
