import { 
  Dialog, DialogContent, Typography, Box, TextField, 
  Button, IconButton, CardMedia, Divider 
} from "@mui/material";
import { Add, Remove, Close, DeleteOutline } from "@mui/icons-material"; // Delete icon add kiya
import { useState, useEffect } from "react";
import type { MenuItem } from "../../types";
 
interface Props {
  item: MenuItem | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (item: any) => void; 
  onRemoveFromCart: (id: number) => void; // 👈 HIGHLIGHT: Remove function ka prop
  
}

const ItemModal = ({ item, open, onClose, onAddToCart, onRemoveFromCart }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");

  // Jab bhi naya item khule, quantity ko 1 par reset karein
  useEffect(() => {
    if (open) {
      setQuantity(1);
      setInstructions("");
    }
  }, [open]);

  if (!item) return null;

  const handleConfirmAdd = () => {
    onAddToCart({
      ...item,
      quantity,
      instructions,
      totalPrice: item.price * quantity
    });
    onClose();
  };

  // 👈 HIGHLIGHT: Order Cancel/Remove Logic
  const handleCancelOrder = () => {
    onRemoveFromCart(item.id); // Cart se item nikalne ke liye
    onClose(); // Modal band karne ke liye
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" PaperProps={{ sx: { borderRadius: "1.5rem" } }}>
      
      <IconButton onClick={onClose} sx={{ position: "absolute", right: 12, top: 12, bgcolor: "rgba(255,255,255,0.8)", zIndex: 10, '&:hover': {bgcolor: "white"} }}>
        <Close />
      </IconButton>

      <CardMedia component="img" height="250" image={item.img} alt={item.name} />

      <DialogContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h5" fontWeight={800}>{item.name}</Typography>
          <Typography variant="h6" color="#D70F64" fontWeight={700}>Rs. {item.price}</Typography>
        </Box>
        
        <Typography variant="body2" color="text.secondary" mb={2}>{item.desc}</Typography>
        
        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" fontWeight={700} mb={1}>Special instructions</Typography>
        <TextField 
          fullWidth 
          multiline 
          rows={2} 
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="e.g. No mayo, make it spicy!" 
          variant="outlined"
          sx={{ mb: 2 }}
        />

        {/* Quantity and Actions */}
        <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
          <Box display="flex" alignItems="center" gap={2} bgcolor="#f5f5f5" borderRadius="2rem" px={2} py={0.5}>
            <IconButton onClick={() => quantity > 1 && setQuantity(q => q - 1)}>
              <Remove />
            </IconButton>
            <Typography fontWeight="bold">{quantity}</Typography>
            <IconButton onClick={() => setQuantity(q => q + 1)}>
              <Add />
            </IconButton>
          </Box>

          <Button 
            variant="contained" 
            fullWidth 
            sx={{ 
                bgcolor: "#D70F64", 
                borderRadius: "0.8rem", 
                py: 1.5, 
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { bgcolor: "#b00d52" }
            }}
            onClick={handleConfirmAdd}
          >
            Add to Cart - Rs. {item.price * quantity}
          </Button>
        </Box>

        {/* 👈 HIGHLIGHT: Cancel/Remove Button at the bottom */}
        <Box textAlign="center" mt={2}>
            <Button 
                startIcon={<DeleteOutline />}
                onClick={handleCancelOrder}
                sx={{ 
                    color: "gray", 
                    textTransform: "none", 
                    fontSize: "0.85rem",
                    '&:hover': { color: "#D70F64", bgcolor: "transparent" } 
                }}
            >
                Remove this item
            </Button>
        </Box>

      </DialogContent>
    </Dialog>
  );
};

export default ItemModal; 