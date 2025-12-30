// import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
// import type { Shop } from "../../types";

// const ShopCard = ({ shop }: { shop: Shop }) => {
//   return (
    // <Card
    //   elevation={0}
    //   sx={{
    //     width: 300, // Image ke size ke mutabiq adjustment
    //     borderRadius: "1rem",
    //     cursor: "pointer",
    //     transition: "transform 0.2s ease-in-out",
    //     border: "1px solid #f2f2f2",
    //     "&:hover": { 
    //       transform: "translateY(-4px)",
    //       boxShadow: "0px 8px 20px rgba(0,0,0,0.08)" 
    //     },
    //   }}
    // >
    //   <Box position="relative">
    //     {/* Main Store Image */}
    //     <CardMedia
    //       component="img"
    //       height="170"
    //       image={shop.image}
    //       alt={shop.name}
    //       sx={{ objectFit: "cover" }}
    //     />

    //     {/* Ad Badge - Bottom Right (White icon style from image) */}
    //     {shop.isAd && (
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           bottom: 8,
    //           right: 8,
    //           bgcolor: "rgba(0,0,0,0.6)",
    //           color: "white",
    //           padding: "2px 8px",
    //           borderRadius: "4px",
    //           fontSize: "0.65rem",
    //           fontWeight: "bold",
    //           textTransform: "uppercase",
    //         }}
    //       >
    //         Ad
    //       </Box>
    //     )}

    //     {/* Discount Badge - Top Left (Pink Ribbon Style) */}
    //     {shop.discount && (
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           top: 15,
    //           left: 0,
    //           bgcolor: "#D70F64",
    //           color: "white",
    //           padding: "4px 12px 4px 8px",
    //           borderRadius: "0 4px 4px 0",
    //           fontSize: "0.75rem",
    //           fontWeight: "bold",
    //           display: "flex",
    //           alignItems: "center",
    //           gap: 0.5,
    //           boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
    //           zIndex: 1
    //         }}
    //       >
    //         <span style={{ fontSize: '10px' }}>⭐</span> {shop.discount}
    //       </Box>
    //     )}
    //   </Box>

    //   <CardContent sx={{ padding: "16px" }}>
    //     {/* Shop Name */}
    //     <Typography
    //       variant="h6"
    //       sx={{
    //         fontWeight: 700,
    //         fontSize: "1.05rem",
    //         color: "#1c1c1c",
    //         mb: 0.5,
    //         overflow: "hidden",
    //         textOverflow: "ellipsis",
    //         whiteSpace: "nowrap",
    //       }}
    //     >
    //       {shop.name}
    //     </Typography>

    //     {/* Delivery Details Row */}
    //     <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
    //       {/* Time Section */}
    //       <Box sx={{ display: "flex", alignItems: "center", color: "#707070" }}>
    //         <AccessTimeIcon sx={{ fontSize: 18, mr: 0.5 }} />
    //         <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
    //           {shop.deliveryTime}
    //         </Typography>
    //       </Box>

    //       <Typography sx={{ mx: 1, color: "#d1d1d1", fontWeight: "bold" }}>•</Typography>

    //       {/* Fee Section */}
    //       <Box sx={{ display: "flex", alignItems: "center" }}>
    //         <DeliveryDiningIcon sx={{ fontSize: 20, mr: 0.5, color: "#D70F64" }} />
    //         <Typography 
    //           variant="body2" 
    //           sx={{ 
    //             fontSize: "0.85rem", 
    //             color: "#D70F64", 
    //             fontWeight: 600 
    //           }}
    //         >
    //           {shop.isFreeDelivery ? "Free" : "Rs. 50"}
    //           <span style={{ color: "#707070", fontWeight: 400, marginLeft: "4px" }}>
    //             delivery
    //           </span>
    //         </Typography>
    //       </Box>
    //     </Box>
    //   </CardContent>
    // </Card>
//   );
// };

// export default React.memo(ShopCard);



// import { memo, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import type { Shop } from "../../types";

// const ShopCard = ({ shop }: { shop: Shop }) => {
//   const navigate = useNavigate();

//   const handleClick = useCallback(() => {
//     navigate(`/shop/${shop.id}`);
//   }, [shop.id, navigate]);

//  console.log(handleClick)

//   return (
//      <Card
//      onClick={handleClick} 
//       elevation={0}
//       sx={{
//         width: 300, // Image ke size ke mutabiq adjustment
//         borderRadius: "1rem",
//         cursor: "pointer",
//         transition: "transform 0.2s ease-in-out",
//         border: "1px solid #f2f2f2",
//         "&:hover": { 
//           transform: "translateY(-4px)",
//           boxShadow: "0px 8px 20px rgba(0,0,0,0.08)" 
//         },
//       }}
//     >
//       <Box position="relative">
//         <p > </p>
//         {/* Main Store Image */}
//         <CardMedia
//           component="img"
//           height="170"
//           image={shop.image}
//           alt={shop.name}
//           sx={{ objectFit: "cover" }}
//         />

//         {/* Ad Badge - Bottom Right (White icon style from image) */}
//         {shop.isAd && (
//           <Box
//             sx={{
//               position: "absolute",
//               bottom: 8,
//               right: 8,
//               bgcolor: "rgba(0,0,0,0.6)",
//               color: "white",
//               padding: "2px 8px",
//               borderRadius: "4px",
//               fontSize: "0.65rem",
//               fontWeight: "bold",
//               textTransform: "uppercase",
//             }}
//           >
//             Ad
//           </Box>
//         )}

//         {/* Discount Badge - Top Left (Pink Ribbon Style) */}
//         {shop.discount && (
//           <Box
//             sx={{
//               position: "absolute",
//               top: 15,
//               left: 0,
//               bgcolor: "#D70F64",
//               color: "white",
//               padding: "4px 12px 4px 8px",
//               borderRadius: "0 4px 4px 0",
//               fontSize: "0.75rem",
//               fontWeight: "bold",
//               display: "flex",
//               alignItems: "center",
//               gap: 0.5,
//               boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
//               zIndex: 1
//             }}
//           >
//             <span style={{ fontSize: '10px' }}>⭐</span> {shop.discount}
//           </Box>
//         )}
//       </Box>

//       <CardContent sx={{ padding: "16px" }}>
//         {/* Shop Name */}
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 700,
//             fontSize: "1.05rem",
//             color: "#1c1c1c",
//             mb: 0.5,
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             whiteSpace: "nowrap",
//           }}
//         >
//           {shop.name}
//         </Typography>

//         {/* Delivery Details Row */}
//         <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
//           {/* Time Section */}
//           <Box sx={{ display: "flex", alignItems: "center", color: "#707070" }}>
//             <AccessTimeIcon sx={{ fontSize: 18, mr: 0.5 }} />
//             <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
//               {shop.deliveryTime}
//             </Typography>
//           </Box>

//           <Typography sx={{ mx: 1, color: "#d1d1d1", fontWeight: "bold" }}>•</Typography>

//           {/* Fee Section */}
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <DeliveryDiningIcon sx={{ fontSize: 20, mr: 0.5, color: "#D70F64" }} />
//             <Typography 
//               variant="body2" 
//               sx={{ 
//                 fontSize: "0.85rem", 
//                 color: "#D70F64", 
//                 fontWeight: 600 
//               }}
//             >
//               {shop.isFreeDelivery ? "Free" : "Rs. 50"}
//               <span style={{ color: "#707070", fontWeight: 400, marginLeft: "4px" }}>
//                 delivery
//               </span>
//             </Typography>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>

//   );
// };

// export default memo(ShopCard);

import { memo } from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
// } from "@mui/material";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import type { Shop } from "../../types";

const ShopCard = ({ shop }: { shop: Shop }) => {
  return (
    <Card
      elevation={0}
      sx={{
        width: 300,
        borderRadius: "1rem",
        border: "1px solid #eee",
      }}
    >
      <CardMedia
        component="img"
        height="170"
        image={shop.image}
        alt={shop.name}
      />

      <CardContent>
        <Typography fontWeight={700}>{shop.name}</Typography>

        <Box display="flex" alignItems="center" mt={1}>
          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body2">{shop.deliveryTime}</Typography>

          <Box mx={1}>•</Box>

          <DeliveryDiningIcon
            sx={{ fontSize: 18, mr: 0.5, color: "#D70F64" }}
          />
          <Typography variant="body2" color="#D70F64">
            {shop.isFreeDelivery ? "Free delivery" : "Paid"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default memo(ShopCard);
