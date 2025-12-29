// import { Link, useNavigate, useLocation } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
//   InputBase,
//   Badge,
//   Button,
//   Tabs,
//   Tab
// } from "@mui/material";
// import {
//   ShoppingCart,
//   LocationOn,
//   Search,
//   TwoWheeler,
//   DirectionsRun,
//   LocalMall,
//   Storefront,
//   Restaurant,
//   PersonOutline // Login icon for mobile
// } from "@mui/icons-material"; 



// const Navbar = () => { 
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const paths = ["/home", "/pickup", "/pandamart", "/shops", "/caterers"];
//     const index = paths.indexOf(location.pathname);
//     if (index !== -1) setValue(index);
//   }, [location.pathname]);

//   const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//     const paths = ["/home", "/pickup", "/pandamart", "/shops", "/caterers"];
//     navigate(paths[newValue]);
//   };




//   return (
//     <AppBar position="sticky" elevation={1} sx={{ backgroundColor: "#ffffff", color: "#000", width: "100%" }}>
//       <Toolbar sx={{ 
//         display: "flex", 
//         justifyContent: "space-between", 
//         gap: { xs: 1, md: 2 },
//         px: { xs: 1, sm: 2 } 
//       }}>
        
//         {/* 1. Logo: Mobile par chota size */}
//         <Typography 
//           component={Link} 
//           to="/home" 
//           sx={{ 
//             textDecoration: "none", 
//             fontWeight: 700, 
//             fontSize: { xs: "18px", md: "24px" }, 
//             color: "#D70F64",
//             flexShrink: 0 // Logo ko dabne se bachata hai
//           }}
//         >
//           foodpanda
//         </Typography>

//         {/* 2. Search Bar: Mobile par hide kar diya taake login button ki jagah banay */}
//         <Box sx={{ 
//           display: { xs: "none", md: "flex" }, 
//           alignItems: "center", 
//           backgroundColor: "#f5f5f5", 
//           borderRadius: "999px", 
//           px: 2, py: 0.5, 
//           flex: 1, 
//           maxWidth: "500px" 
//         }}>
//           <LocationOn sx={{ color: "#D70F64", mr: 1 }} />
//           <InputBase placeholder="Enter your location" sx={{ flex: 1, fontSize: "14px" }} />
//           <Search sx={{ color: "#777" }} />
//         </Box>

//         {/* 3. Actions Area: Isse wrap hone se roka gaya hai */}
//         <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
//           <IconButton component={Link} to="/cart">
//             <Badge badgeContent={2} color="error">
//               <ShoppingCart />
//             </Badge>
//           </IconButton>

//           {/* Login Button: Mobile par Button gayab hokar Icon ban jayega */}
//           <Button 
//             component={Link} 
//             to="/login" 
//             variant="outlined"
//             startIcon={<PersonOutline sx={{ display: { xs: "inline-flex", sm: "none" } }} />}
//             sx={{ 
//               textTransform: "none", 
//               fontWeight: 600, 
//               color: "#333", 
//               borderColor: "#ddd",
//               ml: { xs: 0.5, sm: 2 },
//               minWidth: "auto",
//               px: { xs: 1, sm: 2 },
//               "& .MuiButton-startIcon": { margin: 0 } // Mobile icon centering
//             }}
//           >
//             <Box component="span" sx={{ display: { xs: "none", sm: "block" } }}>Log in</Box>
//           </Button>
//         </Box>
//       </Toolbar>

//       {/* 4. Tabs: Image wala carousel style */}
//       <Box sx={{ borderTop: "1px solid #f0f0f0", backgroundColor: "#fff" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           variant="scrollable" // Ye sabse important hai slider ke liye
//           scrollButtons="auto" 
//           allowScrollButtonsMobile
//           sx={{
//             "& .MuiTabs-indicator": { backgroundColor: "#D70F64", height: "3px" },
//             "& .MuiTab-root": { 
//               textTransform: "none", 
//               minWidth: { xs: "80px", sm: "120px" }, 
//               fontWeight: 600, 
//               color: "#707070" 
//             },
//             "& .Mui-selected": { color: "#D70F64 !important" }
//           }}
//         >
//           <Tab icon={<TwoWheeler sx={{ fontSize: 18 }} />} iconPosition="start" label="Delivery" />
//           <Tab icon={<DirectionsRun sx={{ fontSize: 18 }} />} iconPosition="start" label="Pick-up" />
//           <Tab icon={<LocalMall sx={{ fontSize: 18 }} />} iconPosition="start" label="pandamart" />
//           <Tab icon={<Storefront sx={{ fontSize: 18 }} />} iconPosition="start" label="Shops" />
//           <Tab icon={<Restaurant sx={{ fontSize: 18 }} />} iconPosition="start" label="Caterers" />
//         </Tabs>
//       </Box>
//     </AppBar>
//   );
// };

// export default Navbar;
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Badge,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import {
  ShoppingCart,
  TwoWheeler,
  DirectionsRun,
  LocalMall,
  Storefront,
  Restaurant,
  Logout as LogoutIcon,
  PersonOutline,
} from "@mui/icons-material";
import { auth } from "../DataBase/fireBase";
import { useCart } from "../context/CartContext"; // Aapka Global Context
import Swal from "sweetalert2";

const Navbar = () => {
  const { totalItems1, clearCart } = useCart(); // Global items count aur cart empty karne ke liye
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(0);
  const [user, setUser] = useState<any>(null);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Sync tabs with URL
  useEffect(() => {
    const paths = ["/home", "/pickup", "/pandamart", "/shops", "/caterers"];
    const index = paths.indexOf(location.pathname);
    if (index !== -1) setValue(index);
  }, [location.pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const paths = ["/home", "/pickup", "/pandamart", "/shops", "/caterers"];
    navigate(paths[newValue]);
  };

  // --- LOGOUT WITH WARNING MESSAGE ---
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D70F64",
      cancelButtonColor: "#6e7881",
      confirmButtonText: "Yes, Logout!",
      cancelButtonText: "Cancel",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await auth.signOut();
          clearCart(); // Logout par cart empty karna better hai
          Swal.fire({
            title: "Logged Out!",
            text: "See you again soon!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          });
          navigate("/home");
        } catch (error) {
          Swal.fire("Error", "Logout failed. Try again.", "error");
        }
      }
    });
  };

  return (
    <AppBar position="sticky" elevation={1} sx={{ backgroundColor: "#fff", color: "#000", width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: { xs: 1, sm: 2 } }}>
        
        {/* Logo */}
        <Typography 
          component={Link} 
          to="/home" 
          sx={{ textDecoration: "none", fontWeight: 700, fontSize: { xs: 20, md: 24 }, color: "#D70F64" }}
        >
          TastyCart
        </Typography>

        {/* Right Side Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, sm: 2 } }}>
          
          {/* Cart Icon with Badge */}
          <IconButton component={Link} to="/cart">
            <Badge badgeContent={totalItems1} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* Conditional Login/Logout Button */}
          {user ? (
            <Button 
              variant="outlined" 
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
              sx={{ 
                textTransform: "none", 
                borderColor: "#ddd", 
                color: "#333",
                fontWeight: 600,
                "&:hover": { borderColor: "#D70F64", color: "#D70F64" }
              }}
            >
              <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>Logout</Box>
            </Button>
          ) : (
            <Button 
              variant="outlined" 
              onClick={() => navigate("/login")}
              startIcon={<PersonOutline />}
              sx={{ 
                textTransform: "none", 
                borderColor: "#D70F64", 
                color: "#D70F64",
                fontWeight: 600,
                "&:hover": { bgcolor: "#D70F64", color: "#fff" }
              }}
            >
              <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>Login</Box>
            </Button>
          )}
        </Box>
      </Toolbar>

      {/* Tabs Menu */}
      <Box sx={{ borderTop: "1px solid #f0f0f0", backgroundColor: "#fff" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#D70F64", height: 3 },
            "& .MuiTab-root": { textTransform: "none", minWidth: { xs: 80, sm: 100 }, fontWeight: 600, color: "#707070" },
            "& .Mui-selected": { color: "#D70F64 !important" },
          }}
        >
          <Tab icon={<TwoWheeler sx={{ fontSize: 20 }} />} iconPosition="start" label="Delivery" />
          <Tab icon={<DirectionsRun sx={{ fontSize: 20 }} />} iconPosition="start" label="Pick-up" />
          <Tab icon={<LocalMall sx={{ fontSize: 20 }} />} iconPosition="start" label="pandamart" />
          <Tab icon={<Storefront sx={{ fontSize: 20 }} />} iconPosition="start" label="Shops" />
          <Tab icon={<Restaurant sx={{ fontSize: 20 }} />} iconPosition="start" label="Caterers" />
        </Tabs>
      </Box>
    </AppBar>
  );
};

export default Navbar;