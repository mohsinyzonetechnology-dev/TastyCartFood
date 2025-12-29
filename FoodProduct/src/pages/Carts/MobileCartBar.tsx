import { Box, Typography, Button } from "@mui/material";

interface Props {
  total: number;
  itemCount: number;
  onOpen: () => void;
  
}

const MobileCartBar = ({ total, itemCount, onOpen }: Props) => {
  if (itemCount === 0) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "#D70F64",
        color: "white",
        px: 2,
        py: 1.2,
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1200
      }}
    >
      <Typography fontWeight={600}>
        {itemCount} items • Rs. {total.toFixed(2)}
      </Typography>

      <Button
        onClick={onOpen}
        sx={{
          bgcolor: "white",
          color: "#D70F64",
          fontWeight: "bold",
          borderRadius: 2,
          textTransform: "none",
          "&:hover": { bgcolor: "#f2f2f2" }
        }}
      >
        View cart
      </Button>
    </Box>
  );
};

export default MobileCartBar;
 