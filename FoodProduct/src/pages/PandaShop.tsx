// import { useEffect, useMemo, useState } from "react";
// import { Box, Container, Grid, Typography, TextField, Stack, Chip } from "@mui/material";
 
// import { motion, AnimatePresence } from "framer-motion";
// import { useShopStore } from "../store/ShopStore";
// import ShopCard from "../components/ShopCard/ShopCard";

// const PandaShop = () => {
//   const { shops, init } = useShopStore();
//   const [search, setSearch] = useState("");
//   // Categories state
//   const [selectedCategory, setSelectedCategory] = useState("All Stores");

//   useEffect(() => {
//     init();
//   }, [init]);

//   // ✅ 1. Filter Logic Fix (Category + Search)
//   const filteredShops = useMemo(() => {
//     return shops.filter((shop: any) => {
//       const matchesSearch = shop.name.toLowerCase().includes(search.toLowerCase());
//       const matchesCategory = selectedCategory === "All Stores" || shop.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//     });
//   }, [shops, search, selectedCategory]);

//   return (
//     <Box sx={{ bgcolor: "#FDFDFD", minHeight: "100vh" }}>
//       {/* Hero Section (Keep your existing Hero code here) */}
//       <Box sx={{ background: "linear-gradient(135deg, #D70F64 0%, #B00B52 100%)", pt: 10, pb: 15, borderRadius: "0 0 40px 40px" ,}}>
//          <Container>
//             <Typography variant="h3" color="white" textAlign="center" fontWeight={550}>
//                 Premium Stores
//             </Typography>
//             {/* Search Input */}
//             <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
//                 <TextField 
//                     fullWidth 
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search shops..."
//                     sx={{ bgcolor: "white", borderRadius: "10px" }}
//                 />
//             </Box>
//          </Container>
//       </Box>

//       <Container maxWidth="xl" sx={{ mt: -12, position: "relative", zIndex: 10 }}>
//         {/* ✅ 2. Category Chips Fix */}
//      <Stack 
//     direction="row" 
//     spacing={1.5} 
//     mb={4} 
//     // Scroll logic for small screens
//     sx={{ 
//       overflowX: "auto", 
//       pb: 2, // Scrollbar ke liye thodi space
//       display: "flex",
//       flexWrap: "nowrap", 
//       '&::-webkit-scrollbar': { display: 'none' }, // Scrollbar hide karne ke liye
//       msOverflowStyle: 'none', 
//       scrollbarWidth: 'none', 
//       justifyContent: { xs: "flex-start", md: "center" }, // Mobile pe start, desktop pe center
//       px: { xs: 2, md: 0 }
//     }}
//   >
//     {["All Stores", "Groceries", "Pharmacy", "Pet Supplies", "Vapes", "Electronics"].map((cat) => (
//       <Chip 
//         key={cat} 
//         label={cat} 
//         clickable 
//         onClick={() => setSelectedCategory(cat)} 
//         sx={{ 
//           px: 3, 
//           py: 3,
//           fontSize: "1rem",
//           fontWeight: 500,
//           flexShrink: 0, // Button ko dabne se rokta hai
//           bgcolor: selectedCategory === cat ? "#D70F64" : "white",
//           color: selectedCategory === cat ? "white" : "#333",
//           boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//           border: "none",
//           transition: "all 0.3s ease",
//           "&:hover": { 
//             bgcolor: selectedCategory === cat ? "#D70F64" : "#f8f8f8",
//             transform: "translateY(-2px)" 
//           }
//         }} 
//       />
//     ))}
//   </Stack>

//   {/* ✅ Shop Cards Grid */}
//   <Grid container spacing={4} marginTop={7}>
//     <AnimatePresence mode="popLayout">
//       {filteredShops.map((shop) => (
//         <Grid key={shop.id}  size={{xs:12 ,sm:6 ,md:4 ,lg:3 }}>
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.4 }}
//           >
//             <ShopCard shop={shop} />
//           </motion.div>
//         </Grid>
//       ))}
//     </AnimatePresence>
//   </Grid>
//         {filteredShops.length === 0 && (
//           <Typography textAlign="center" width="100%" mt={10} variant="h6" color="text.secondary">
//             No stores found in "{selectedCategory}"
//           </Typography>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default PandaShop;

import { useEffect, useMemo, useState, useRef } from "react";
import { Box, Container, Grid, Typography, TextField, Stack, Chip, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, AnimatePresence } from "framer-motion";
import { useShopStore } from "../store/ShopStore";
import ShopCard from "../components/ShopCard/ShopCard";

const PandaShop = () => {
  const { shops, init } = useShopStore();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Stores");
  
  // ✅ Fix 1: TypeScript type for useRef (HTMLDivElement)
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    init();
  }, [init]);

  // ✅ Fix 2: Type for 'direction' and removing unused 'clientWidth'
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 300; 
      const newPos = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    }
  };

  const filteredShops = useMemo(() => {
    return shops.filter((shop: any) => {
      const matchesSearch = shop.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All Stores" || shop.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [shops, search, selectedCategory]);

  return (
    <Box sx={{ bgcolor: "#FDFDFD", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{ background: "linear-gradient(135deg, #D70F64 0%, #B00B52 100%)", pt: 10, pb: 18, borderRadius: "0 0 40px 40px" }}>
        <Container>
          <Typography variant="h3" color="white" textAlign="center" fontWeight={550}>
            Premium Stores
          </Typography>
          <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
            <TextField 
              fullWidth 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search shops..."
              sx={{ bgcolor: "white", borderRadius: "10px" }}
            />
          </Box>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="xl" sx={{ mt: -10, position: "relative", zIndex: 10 }}>
        <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
          
          {/* Left Arrow */}
          <IconButton 
            onClick={() => handleScroll("left")}
            sx={{ 
              display: { xs: "flex", md: "none" }, 
              bgcolor: "white", boxShadow: 3, 
              position: "absolute", left: -20, zIndex: 2,
              "&:hover": { bgcolor: "#f5f5f5", transform: "scale(1.1)" } 
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" sx={{ color: "#D70F64" }} />
          </IconButton>

          <Stack 
            ref={scrollRef}
            direction="row" 
            spacing={1.5} 
            sx={{ 
              overflowX: "auto", 
              pb: 2, px: 2,
              display: "flex",
              flexWrap: "nowrap", 
              scrollBehavior: "smooth",
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none', 
              width: "100%",
              justifyContent: { xs: "flex-start", md: "center" }
            }}
          >
            {["All Stores", "Groceries", "Pharmacy", "Pet Supplies", "Vapes", "Electronics"].map((cat) => (
              <Chip 
                key={cat} 
                label={cat} 
                clickable 
                onClick={() => setSelectedCategory(cat)} 
                sx={{ 
                  px: 3, py: 3, fontSize: "1rem", fontWeight: 500, flexShrink: 0,
                  bgcolor: selectedCategory === cat ? "#D70F64" : "white",
                  color: selectedCategory === cat ? "white" : "#333",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  border: "none",
                  transition: "0.3s",
                  "&:hover": { bgcolor: selectedCategory === cat ? "#D70F64" : "#f8f8f8" }
                }} 
              />
            ))}
          </Stack>

          {/* Right Arrow */}
          <IconButton 
            onClick={() => handleScroll("right")}
            sx={{ 
              display: { xs: "flex", md: "none" }, 
              bgcolor: "white", boxShadow: 3, 
              position: "absolute", right: -20, zIndex: 2,
              "&:hover": { bgcolor: "#f5f5f5", transform: "scale(1.1)" } 
            }}
          >
            <ArrowForwardIosIcon fontSize="small" sx={{ color: "#D70F64" }} />
          </IconButton>
        </Box>

        {/* Shop Cards Grid */}
        <Grid container spacing={4} sx={{ mt: 5 }}>
          <AnimatePresence mode="popLayout">
            {filteredShops.map((shop) => (
              <Grid key={shop.id} size={{xs:12 ,sm:6 ,md:4 ,lg:3 }}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ShopCard shop={shop} />
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        {filteredShops.length === 0 && (
          <Typography textAlign="center" width="100%" mt={10} variant="h6" color="text.secondary">
            No stores found in "{selectedCategory}"
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default PandaShop;