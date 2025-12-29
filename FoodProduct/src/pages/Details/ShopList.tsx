import React, { useEffect, useMemo, useState } from 'react';
import { useShopStoreMenu } from '../../store/useShopStoreMenu';
import { useNavigate } from 'react-router-dom';
import type { ShopMenu } from '../../types';
import { 
  Box, Typography, Grid, Card, CardMedia, CardContent, 
  Chip, TextField, InputAdornment, Container
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';

const ShopList: React.FC = () => {
  const { shops, init } = useShopStoreMenu();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, [init]);

  const filteredShops = useMemo(() => {
    return shops.filter((shop: ShopMenu) =>
      shop.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [shops, searchQuery]);

  return (
    <Box sx={{ bgcolor: '#fdfdfd', minHeight: '100vh', pb: 10 }}>
      {/* HEADER */}
      <Box sx={{ 
        bgcolor: '#D70F64', 
        pt: 8, pb: 12, 
        px: 3, 
        textAlign: 'center', 
        color: 'white',
        borderRadius: '0 0 40px 40px'
      }}>
        <Typography variant="h3" fontWeight={900} sx={{ mb: 2, letterSpacing: '-1px' }}>
          Explore Our Shops
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
          Discover the best groceries and essentials near you
        </Typography>

        {/* SEARCH BAR */}
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
          <TextField
            fullWidth
            placeholder="Search for shop names..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              bgcolor: 'white',
              borderRadius: '50px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                px: 2,
                boxShadow: '0px 10px 30px rgba(0,0,0,0.1)'
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#D70F64' }} />
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Box>

      {/* SHOPS GRID */}
      <Container maxWidth="xl" sx={{ mt: -6 }}>
        <Grid container spacing={4}>
          {filteredShops.map((shop: ShopMenu) => (
            <Grid size={{xs:12 ,sm:6 ,md:4}} key={shop.id}>
              <Card 
                onClick={() => navigate(`/shop/${shop.id}`)}
                sx={{ 
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid #eee',
                  boxShadow: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0px 20px 40px rgba(0,0,0,0.08)',
                    borderColor: '#D70F64'
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={shop.image}
                    alt={shop.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  {shop.discount && (
                    <Chip 
                      label={shop.discount}
                      sx={{ 
                        position: 'absolute', top: 16, left: 16, 
                        bgcolor: '#D70F64', color: 'white', fontWeight: 'bold' 
                      }} 
                    />
                  )}
                  {shop.isAd && (
                    <Chip 
                      label="AD" 
                      size="small"
                      sx={{ 
                        position: 'absolute', top: 16, right: 16, 
                        bgcolor: 'rgba(0,0,0,0.6)', color: 'white' 
                      }} 
                    />
                  )}
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h5" fontWeight={700} noWrap>
                      {shop.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarIcon sx={{ color: '#FFB400', fontSize: '20px' }} />
                      <Typography variant="body2" fontWeight={700} sx={{ ml: 0.5 }}>
                        4.5
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', color: 'text.secondary' }}>
                    <LocalShippingIcon fontSize="small" />
                    <Typography variant="body2" fontWeight={500}>
                      {shop.deliveryTime} • {shop.isFreeDelivery ? 'Free Delivery' : 'Standard Delivery'}
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ mt: 2, color: '#D70F64', fontWeight: 600 }}>
                    {shop.menu?.length || 0} Products available →
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShopList;
