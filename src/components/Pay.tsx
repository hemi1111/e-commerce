import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Button } from "@mui/material";
const Pay = () => {
  const { setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const handlePayment = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm payment!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire("SUCCESS!", "Your payment has been processed.", "success");
          setCartItems([]);
        } else {
          console.log("COULDNT PAY");
        }
      })
      .then(() => navigate("/shop"));
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handlePayment}>
        Make Payment
      </Button>
    </div>
  );
};

export default Pay;
