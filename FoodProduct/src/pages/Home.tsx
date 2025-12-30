 import { useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import RestaurantCard from "../components/RestaurantCard";
import { useRestaurantStore } from "../store/useRestaurantStore";

const Home = () => {
  const { restaurants, init } = useRestaurantStore();

  useEffect(() => {
    init();
  }, [init]);

  return (
    <Box bgcolor="#F7F7F7" minHeight="100vh" py={6}>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Typography variant="h4" fontWeight={600}>
            Popular Restaurants
          </Typography> 

          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              "&:hover": { color: "#D70F64" },
            }}
          >
            View All
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {restaurants.map((restaurant) => (
            <Grid key={restaurant.id}  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <RestaurantCard restaurant={restaurant} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
