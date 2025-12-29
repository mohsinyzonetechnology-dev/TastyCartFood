// import {
//   Box,
//   Typography,
//   IconButton,
//   Button,
//   Paper
// } from "@mui/material";
// import { Add, Remove } from "@mui/icons-material";
// import type { CartItem } from "../../hook/useCart";

// interface Props {
//   cart: CartItem[];
//   total: number;
//   onAdd: (id: number) => void;
//   onRemove: (id: number) => void;
//   onCheckout: () => void;
// }

// const CartSidebar = ({ cart, total, onAdd, onRemove, onCheckout }: Props) => {
//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         position: "sticky",
//         top: 20,
//         p: 3,
//         bgcolor: "white",
//         borderRadius: "12px",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
//         height: "fit-content"
//       }}
//     >
//       <Typography
//         variant="h6"
//         fontWeight="bold"
//         mb={2}
//         textAlign="center"
//       >
//         Your cart
//       </Typography>

//       {/* CART ITEMS */}
//       <Box sx={{ maxHeight: "50vh", overflowY: "auto", mb: 2 }}>
//         {cart.length === 0 ? (
//           <Typography
//             color="text.secondary"
//             textAlign="center"
//             py={5}
//           >
//             Cart is empty
//           </Typography>
//         ) : (
//           cart.map(item => (
//             <Box
//               key={item.id}
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 mb: 2,
//                 borderBottom: "1px solid #f5f5f5",
//                 pb: 1
//               }}
//             >
//               {/* LEFT */}
//               <Box sx={{ flex: 1 }}>
//                 <Typography
//                   variant="body2"
//                   fontWeight="bold"
//                   noWrap
//                   sx={{ maxWidth: "140px" }}
//                 >
//                   {item.name}
//                 </Typography>
//                 <Typography variant="caption" color="#D70F64">
//                   Rs. {item.price}
//                 </Typography>
//               </Box>

//               {/* QUANTITY CONTROLS */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                   bgcolor: "#f5f5f5",
//                   borderRadius: "20px",
//                   px: 1
//                 }}
//               >
//                 <IconButton
//                   size="small"
//                   onClick={() => onRemove(item.id)}
//                 >
//                   <Remove fontSize="small" sx={{ color: "#D70F64" }} />
//                 </IconButton>

//                 <Typography
//                   variant="body2"
//                   fontWeight="bold"
//                   minWidth={18}
//                   textAlign="center"
//                 >
//                   {item.quantity}
//                 </Typography>

//                 <IconButton
//                   size="small"
//                   onClick={() => onAdd(item.id)}
//                 >
//                   <Add fontSize="small" sx={{ color: "#D70F64" }} />
//                 </IconButton>
//               </Box>
//             </Box>
//           ))
//         )}
//       </Box>

//       {/* TOTAL + CHECKOUT */}
//       <Box sx={{ borderTop: "2px solid #f5f5f5", pt: 2 }}>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <Typography variant="h6" fontWeight="bold">
//             Total
//           </Typography>
//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             color="#D70F64"
//           >
//             Rs. {total.toFixed(2)}
//           </Typography>
//         </Box>

//         <Button
//           fullWidth
//           variant="contained"
//           disabled={!cart.length}
//           sx={{
//             bgcolor: "#D70F64",
//             "&:hover": { bgcolor: "#b00d52" },
//             py: 1.5,
//             borderRadius: 2,
//             textTransform: "none",
//             fontWeight: "bold"
//           }}
//           onClick={onCheckout}
//         >
//           Go to checkout
//         </Button>
//       </Box>
//     </Paper>
//   );
// };

// export default CartSidebar;



import { Box, Typography, IconButton, Button, Paper } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import type { CartItem } from "../../hook/useCart";
import  { auth } from "../../DataBase/fireBase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface Props {
  cart: CartItem[];
  total: number;
  onAdd: (id: number) => void;
  onRemove: (id: number) => void;
  clearCart: () => void; // New prop to clear cart after order
  
}

const CartSidebar = ({ cart, total, onAdd, onRemove, clearCart }: Props) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    const user = auth.currentUser;

    if (user) {
      // User is logged in
      Swal.fire({
        title: "Order Successful!",
        text: "Thank you for your order.",
        icon: "success",
        confirmButtonColor: "#D70F64"
      });
      clearCart(); // Cart empty kar dein
    } else {
      // User not logged in
      Swal.fire({
        title: "Please Login",
        text: "You need to login to place an order",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Go to Login",
        confirmButtonColor: "#D70F64"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <Paper elevation={3} sx={{ position: "sticky", top: 20, p: 3, borderRadius: "12px" }}>
      <Typography variant="h6" fontWeight="bold" mb={2} textAlign="center">Your cart</Typography>

      <Box sx={{ maxHeight: "50vh", overflowY: "auto", mb: 2 }}>
        {cart.length === 0 ? (
          <Typography color="text.secondary" textAlign="center" py={5}>Cart is empty</Typography>
        ) : (
          cart.map(item => (
            <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Box>
                <Typography variant="body2" fontWeight="bold">{item.name}</Typography>
                <Typography variant="caption" color="#D70F64">Rs. {item.price}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, bgcolor: "#f5f5f5", borderRadius: "20px", px: 1 }}>
                <IconButton size="small" onClick={() => onRemove(item.id)}><Remove fontSize="small" /></IconButton>
                <Typography variant="body2">{item.quantity}</Typography>
                <IconButton size="small" onClick={() => onAdd(item.id)}><Add fontSize="small" /></IconButton>
              </Box>
            </Box>
          ))
        )}
      </Box>

      <Box sx={{ borderTop: "2px solid #f5f5f5", pt: 2 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6" color="#D70F64">Rs. {total.toFixed(2)}</Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          disabled={!cart.length}
          onClick={handleCheckout}
          sx={{ bgcolor: "#D70F64", "&:hover": { bgcolor: "#b00d52" }, py: 1.5, fontWeight: "bold" }}
        >
          Go to checkout
        </Button>
      </Box>
    </Paper>
  );
};

export default CartSidebar;