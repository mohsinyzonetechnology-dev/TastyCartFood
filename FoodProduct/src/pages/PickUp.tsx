// import restaurants from "../data/restaurants.json";
// import RestaurantCard from "../components/RestaurantCard";
// import type { Restaurant } from "../types";
// import { Container, Grid, Typography, Box } from "@mui/material";

// const PickUp = () => {
//   // 1. Data ko sort karne ka logic (A-Z)
//   // Hum original data ko modify nahi kar rahe, balki copy bana kar sort kar rahe hain
//   const sortedRestaurants = [...(restaurants as Restaurant[])].sort((a, b) => 
//     a.name.localeCompare(b.name)
//   );

//   return (
//     <Box bgcolor="#F7F7F7" minHeight="100vh" py={6}>
//       <Container maxWidth="xl">
//         {/* Header */}
//         <Box display="flex" justifyContent="space-between" alignItems="baseline" mb={4}>
//           <Typography variant="h4" fontWeight={600} color="text.primary">
//             Pick-up Restaurants
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {sortedRestaurants.length} Restaurants available
//           </Typography>
//         </Box>

//         {/* Grid Section */}
//         <Grid container spacing={4}>
//           {sortedRestaurants.map((res) => (
//             // Material UI v5/v6 ke mutabiq spacing aur sizing
//             <Grid size={{xs:12, sm:6, md:4, lg:3}} key={res.id}>
//               <RestaurantCard restaurant={res} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default PickUp;



// import { useEffect, useMemo } from "react";
// import RestaurantCard from "../components/RestaurantCard";
// import type { Restaurant } from "../types";
// import { Container, Grid, Typography, Box } from "@mui/material";

// import { useRestaurantStore } from "../store/useRestaurantStore";
// import restaurantsData from "../data/restaurants.json";
// import { useUIStore } from "../store/useUIStore";
// // import { usePageLoader } from "../hook/usePageLoader";



// const PickUp = () => {
//   // 🔄 1 second global loader on page mount
//   // usePageLoader();

//   const { showLoader, hideLoader } = useUIStore();

//   useEffect(() => {
//     showLoader();

//     const timer = setTimeout(() => {
//       hideLoader();
//     }, 200); // ⏱️ 1 second

//     return () => clearTimeout(timer);
//   }, []);


//   // 
//   const { restaurants, setRestaurants } = useRestaurantStore();

//   // JSON → Zustand (sirf ek dafa)
//   useEffect(() => {
//     if (restaurants.length === 0) {
//       setRestaurants(restaurantsData as Restaurant[]);
//     }
//   }, [restaurants.length, setRestaurants]);

//   // A–Z sorting (derived state)
//   const sortedRestaurants = useMemo(() => {
//     return [...restaurants].sort((a, b) =>
//       a.name.localeCompare(b.name)
//     );
//   }, [restaurants]);

//   return (
//     <Box bgcolor="#F7F7F7" minHeight="100vh" py={6}>
//       <Container maxWidth="xl">
//         {/* Header */}
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="baseline"
//           mb={4}
//         >
//           <Typography variant="h4" fontWeight={600} color="text.primary">
//             Pick-up Restaurants
//           </Typography>

//           <Typography variant="body2" color="text.secondary">
//             {sortedRestaurants.length} Restaurants available
//           </Typography>
//         </Box>

//         {/* Grid */}
//         <Grid container spacing={4}>
//           {sortedRestaurants.map((res) => (
//             <Grid
//               size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
//               key={res.id}
//             >
//               <RestaurantCard restaurant={res} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }; 

// export default PickUp;
import { useEffect, useMemo } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import RestaurantCard from "../components/RestaurantCard";
import { useRestaurantStore } from "../store/useRestaurantStore";

const PickUp = () => {
  const { restaurants, init } = useRestaurantStore();

  useEffect(() => {
    init();
  }, [init]);

  // ✅ Alphabetical sort (A–Z) – PickUp ONLY
  const sortedRestaurants = useMemo(() => {
    return [...restaurants].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [restaurants]);

  return (
    <Box bgcolor="#F7F7F7" minHeight="100vh" py={6}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          mb={4}
        >
          <Typography variant="h4" fontWeight={600}>
            Pick-up Restaurants
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {sortedRestaurants.length} Restaurants available
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={4}>
          {sortedRestaurants.map((res) => (
            <Grid key={res.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <RestaurantCard restaurant={res} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PickUp;
