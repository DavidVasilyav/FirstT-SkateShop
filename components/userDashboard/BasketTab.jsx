import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, Paper, Button, Divider } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { userBasket, updateQuantityIncrement, removeFromBasket, updateQuantity } from "@/app/api/userRequest";

function BasketTab({ basket, userId }) {
  const [newBasket, setNewBasket] = useState(basket || []);
  const [amount, setAmount] = useState(newBasket.map((item) => item.quantity));
  const [btnDisable, setBtnDisable] = useState(newBasket.map(() => false));
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchData = async () => {
    const res = await userBasket(userId);
    setNewBasket(res);
    setAmount(res.map((item) => item.quantity));
  };

  const handleIncrementFromBasket = async (event, index, userId, productId, category) => {
    event.preventDefault();
    if (amount[index] === 3) return;

    const updatedAmount = [...amount];
    updatedAmount[index] += 1;
    setAmount(updatedAmount);

    if (updatedAmount[index] === 3) {
      const updatedBtnDisable = [...btnDisable];
      updatedBtnDisable[index] = true;
      setBtnDisable(updatedBtnDisable);
    }

    await updateQuantityIncrement({ userId, productId, productTable: category });
    await fetchData();
  };

  const handleDecreesFromBasket = async (event, index, userId, productId, category) => {
    event.preventDefault();
    if (amount[index] === 1) return;

    const updatedAmount = [...amount];
    updatedAmount[index] -= 1;
    setAmount(updatedAmount);

    if (updatedAmount[index] < 3) {
      const updatedBtnDisable = [...btnDisable];
      updatedBtnDisable[index] = false;
      setBtnDisable(updatedBtnDisable);
    }

    await updateQuantity({ userId, productId, productTable: category });
    await fetchData();
  };

  const handleRemoveFromBasket = async (userId, productId, category) => {
    await removeFromBasket({ userId, productId, productTable: category });
    await fetchData();
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = newBasket.reduce((sum, item) => sum + item.Price * item.quantity, 0).toFixed(2);
      setTotalPrice(total);
    };
    calculateTotalPrice();
    const updatedBtnDisable = newBasket.map((item) => item.quantity === 3);
    setBtnDisable(updatedBtnDisable);
  }, [newBasket]);

  return (
    <Card sx={{ height: "80vh", overflowY: "auto", p: 3, borderRadius: 3, boxShadow: 4 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ textAlign: "center", mb: 3 }}>
          🛒 הסל שלי
        </Typography>

        {newBasket.length > 0 ? (
          <>
            {newBasket.map((item, index) => (
              <Paper
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  mb: 2,
                  borderRadius: 3,
                  boxShadow: 2,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="body1"><strong>📜 תיאור:</strong> {item.Description}</Typography>
                  <Typography variant="body1"><strong>🏷️ מותג:</strong> {item.Brand}</Typography>
                  <Typography variant="body1"><strong>💰 מחיר:</strong> ₪{item.Price}</Typography>
                  {item.product_table === "Decks" && (
                    <Typography variant="body1"><strong>📏 גודל:</strong> {item.Size}</Typography>
                  )}
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ minWidth: 36, bgcolor: "#D32F2F", color: "white" }}
                      onClick={(event) => handleDecreesFromBasket(event, index, userId, item.id, item.item_table)}
                    >
                      -
                    </Button>
                    <Typography variant="h6" sx={{ mx: 2 }}>{amount[index]}</Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ minWidth: 36, bgcolor: "#388E3C", color: "white" }}
                      disabled={btnDisable[index]}
                      onClick={(event) => handleIncrementFromBasket(event, index, userId, item.id, item.item_table)}
                    >
                      +
                    </Button>
                  </Box>
                </Box>

                <RemoveCircleOutlineIcon
                  onClick={() => handleRemoveFromBasket(userId, item.id, item.item_table)}
                  sx={{
                    width: 30,
                    height: 30,
                    cursor: "pointer",
                    color: "#D32F2F",
                    ":hover": { color: "red" },
                  }}
                />
              </Paper>
            ))}

            <Divider sx={{ my: 3 }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              <strong>💵 מחיר כולל:</strong>
              <Typography
                sx={{
                  bgcolor: "#4CAF50",
                  color: "white",
                  p: 1.5,
                  borderRadius: 3,
                  ml: 1,
                  fontWeight: "bold",
                }}
              >
                ₪{totalPrice}
              </Typography>
            </Box>
          </>
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center", mt: 3 }}>
            אין פריטים בסל. 🛍️
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default BasketTab;
