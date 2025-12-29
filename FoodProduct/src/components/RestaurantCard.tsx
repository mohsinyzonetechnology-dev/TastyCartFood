import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import type { Restaurant } from "../types";
import { useRestaurantStore } from "../store/useRestaurantStore";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
} from "@mui/material";

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard = memo(({ restaurant }: Props) => {
  const navigate = useNavigate();
  const setSelectedRestaurantId = useRestaurantStore(
    (s) => s.setSelectedRestaurantId
  );

  const handleClick = useCallback(() => {
    setSelectedRestaurantId(restaurant.id);
    navigate(`/restaurant/${restaurant.id}`);
  }, [restaurant.id, navigate, setSelectedRestaurantId]);

  return (
    <Card
      onClick={handleClick}
      sx={{
        borderRadius: "1.5rem",
        boxShadow: 3,
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
      }}
    >
      <Box position="relative">
        <CardMedia
          component="img"
          height="200"
          image={restaurant.image}
          loading="lazy"
        />

        <Chip
          label={restaurant.deliveryTime}
          size="small"
          sx={{ position: "absolute", bottom: 8, left: 8, bgcolor: "#e7e5e6ff" }}
        />
        <Chip
          label={`⭐ ${restaurant.rating} (${restaurant.reviews})`}
          size="small"
          sx={{ position: "absolute", bottom: 8, right: 8, bgcolor: "#e7e5e6ff" }}
        />
      </Box>

      <CardContent>
        <Typography variant="h6" fontWeight={700} noWrap mb={1}>
          {restaurant.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {restaurant.priceRange} • {restaurant.cuisine}
        </Typography>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={600}>
            Rs. {restaurant.deliveryFee}
          </Typography>
          <Chip label="Saver" size="small" />
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, bgcolor: "#D70F64" }}
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          Order Now
        </Button>
      </CardContent>
    </Card>
  );
});

export default RestaurantCard;
