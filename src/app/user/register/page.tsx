"use client";
import { useState, Fragment, ReactNode } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Alert,
  IconButton,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import type { NextApiRequest, NextApiResponse } from "next";
import { registerUser } from "@/app/api/userRequest";
import CloseIcon from "@mui/icons-material/Close";

type ResponseData = {
  message: string;
};
export default function Register() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: {
      city: "",
      street: "",
      houseApsNumber: "",
      floorNumber: "",
      postalCode: "",
    },
  });

  const [errors, setErrors] = useState({
    email: "",
    confirmEmail: "",
  });

  const [globalError, setGlobalError] = useState(false);

  const handleAddress = (e: object) => {
    const { name, value } = e.target;
    setErrors({ email: "", confirmEmail: "" });
    setFormValues((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
    console.log(formValues);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event: object) => {
    const { name, value } = event.target;
    setErrors({ email: "", confirmEmail: "" });
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newErrors = {};
    if (!formValues.firstName) newErrors.firstName = "שם פרטי הוא שדה חובה";
    if (!formValues.lastName) newErrors.lastName = "שם משפחה הוא שדה חובה";
    if (formValues.password != formValues.confirmPassword)
      newErrors.confirmPassword = "סיסמאות לא זהות";
    if (!formValues.email) {
      newErrors.email = "אימייל הוא שדה חובה";
    } else if (!validateEmail(formValues.email)) {
      newErrors.email = "כתובת אימייל לא חוקית";
    }
    if (formValues.email !== formValues.confirmEmail) {
      newErrors.confirmEmail = "האימיילים אינם תואמים";
    }
    if (!formValues.password) newErrors.password = "סיסמה היא שדה חובה";
    if (!formValues.confirmPassword)
      newErrors.confirmPassword = "אישור סיסמה הוא שדה חובה";
    if (!formValues.phoneNumber)
      newErrors.phoneNumber = "מספר פלאפון היא שדה חובה";
    if (!formValues.address.city) newErrors.city = "עיר היא שדה חובה";
    if (!formValues.address.street) newErrors.street = "רחוב הוא שדה חובה";
    if (!formValues.address.houseApsNumber)
      newErrors.houseApsNumber = "מספר בית/בניין הוא שדה חובה";
    if (!formValues.address.postalCode)
      newErrors.postalCode = "מיקוד הוא שדה חובה";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // fetch('http://localhost:6060/user/register', {
      //   method:'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formValues)
      // })
      // console.log('Form Values:', formValues);
      const res = await registerUser(formValues);
      console.log(res);
      if (res.name == "AxiosError") {
        setGlobalError(res.response.data.message);
      }
    }
  };
  const fields = [
    { id: "firstName", label: "שם פרטי", required: true },
    { id: "lastName", label: "שם משפחה", required: true },
    { id: "email", label: "אימייל", required: true, error: errors.email },
    {
      id: "confirmEmail",
      label: "אישור אימייל",
      required: true,
      error: errors.confirmEmail,
    },
    { id: "password", label: "סיסמה", type: "password", required: true },
    {
      id: "confirmPassword",
      label: "אישור סיסמה",
      type: "password",
      required: true,
    },
    { id: "phoneNumber", label: "מספר פלאפון", required: true },
  ];

  const addressFields = [
    { id: "city", index: 0, label: "עיר", required: true },
    { id: "street", index: 1, label: "רחוב", required: true },
    { id: "houseApsNumber", index: 2, label: "מספר בית/בניין", required: true },
    { id: "floorNumber", index: 3, label: "מספר קומה" },
    { id: "postalCode", index: 4, label: "מיקוד", required: true },
  ];

  const steps = [
    "פרטי התחברות",
    "כתובת",
    // "Create an ad",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 0;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    console.log(formValues);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* <Container component="main" maxWidth="xs" sx={{ minHeight: "80vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "500px",
            overflow: "show",
            overflowY: "scroll",
            scrollbarWidth: "20px",
          }}
        >
          <Typography
            sx={{
              borderBottom: "2px solid",
              borderColor: "text.primary",
              color: "text.primary",
            }}
            component="h1"
            variant="h5"
          >
            הרשמה
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ m: 1 }}
          >
            {fields.map((field) => (
              <>
                <TextField
                  key={field.id}
                  margin="normal"
                  fullWidth
                  id={field.id}
                  label={field.label}
                  variant="filled"
                  name={field.id || ""}
                  required={field.required || false}
                  type={field.type || "text"}
                  value={formValues[field.id]}
                  onChange={handleChange}
                  error={!!errors[field.id]}
                  helperText={errors[field.id]}
                  sx={{
                    color: "red",
                    ".MuiInputLabel-root": {
                      color: "text.primary",
                    },
                    ".MuiInputLabel-filled.Mui-focused": {
                      color: "text.secondary",
                    },
                    ".MuiInputBase-input": {
                      color: "text.primary",
                    },
                  }}
                />
              </>
            ))}

            <Typography component="h2" variant="h6" sx={{ mt: 3 }}>
              כתובת
            </Typography>
            {addressFields.map((field) => (
              <TextField
                key={field.index}
                margin="normal"
                fullWidth
                variant="filled"
                label={field.label}
                required={field.required || false}
                name={field.id}
                value={formValues.address[field.index]}
                onChange={handleAddress}
                error={!!errors[field.id]}
                helperText={errors[field.id]}
                sx={{
                  color: "red",
                  ".MuiInputLabel-root": {
                    color: "text.primary",
                  },
                  ".MuiInputLabel-filled.Mui-focused": {
                    color: "text.secondary",
                  },
                  ".MuiInputBase-input": {
                    color: "text.primary",
                  },
                }}
              />
            ))}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "purple" }}
            >
              הירשם
            </Button>
          </Box>
          {globalError ? (
            <>
              <Alert
                severity="error"
                variant="outlined"
                sx={{ mb: 1 }}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setGlobalError(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {globalError}
              </Alert>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Container> */}

      <Box
        sx={{
          width: "80%",
          minHeight: "80vh",
          m: 2,
          bgcolor: "text.background",
          borderRadius: "10px",
        }}
      >
        <Stepper
          sx={{
            m: 1,
            "& .MuiStepConnector-line": { borderColor: "primary.secondary" },
          }}
          activeStep={activeStep}
        >
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: ReactNode;
            } = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography color="red" variant="caption">
            //       Optional
            //     </Typography>
            //   );
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step
                sx={{
                  "& .MuiSvgIcon-root ": {
                    bgcolor: "text.notActive",
                    borderRadius: 3,
                  },
                  "& .Mui-active": {
                    color: "text.primary",
                  },
                  "& .MuiStepIcon-text": {
                    bgcolor: "#c395e8",
                  },
                }}
                key={label}
                {...stepProps}
              >
                <StepLabel
                  sx={{
                    "& .Mui-disabled": {
                      color: "text.notActive",
                    },
                  }}
                  {...labelProps}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto", bgcolor: "red", color: "black" }} />
              <Button sx={{ color: "black" }} onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </Fragment>
        ) : (
          <Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            {activeStep == 0 ? (
              <Box sx={{ minHeight: "600px" }}>
                {fields.map((field) => (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                      key={field.id}
                      margin="normal"
                      fullWidth
                      id={field.id}
                      label={field.label}
                      variant="filled"
                      name={field.id || ""}
                      required={field.required || false}
                      type={field.type || "text"}
                      value={formValues[field.id]}
                      onChange={handleChange}
                      error={!!errors[field.id]}
                      helperText={errors[field.id]}
                      sx={{
                        width: "300px",
                        ".MuiInputLabel-root": {
                          color: "text.primary",
                        },
                        ".MuiInputLabel-filled.Mui-focused": {
                          color: "text.secondary",
                        },
                        ".MuiInputBase-input": {
                          color: "text.primary",
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            ) : (
              <></>
            )}
            {activeStep == 1 ? (
              <Box sx={{ minHeight: "600px" }}>
                {addressFields.map((field) => (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                      key={field.index}
                      margin="normal"
                      fullWidth
                      variant="filled"
                      label={field.label}
                      required={field.required || false}
                      name={field.id}
                      value={formValues.address[field.index]}
                      onChange={handleAddress}
                      error={!!errors[field.id]}
                      helperText={errors[field.id]}
                      sx={{
                        width: "300px",
                        ".MuiInputLabel-root": {
                          color: "text.primary",
                        },
                        ".MuiInputLabel-filled.Mui-focused": {
                          color: "text.secondary",
                        },
                        ".MuiInputBase-input": {
                          color: "text.primary",
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            ) : (
              <></>
            )}
            <Box></Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: "text.primary", borderBottom: "2px solid" }}
              >
                הקודם
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}
              <Button
                sx={[{ color: activeStep === steps.length -1 ? "#ffffffec" : 'text.primary', borderBottom: "2px solid", mr: 1,},
                   
                ]}
                onClick={handleNext}
                // disabled={true}
              >
                {activeStep === steps.length - 1 ? "הירשם" : "הבא"}
              </Button>
            </Box>
          </Fragment>
        )}
      </Box>
    </Box>
  );
}
