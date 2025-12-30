// import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Stack, 
  //IconButton, 
  Divider 
} from '@mui/material';
import { 
  // Facebook, 
  // Instagram, 
  // Twitter, 
  Language, 
  Apple, 
  PlayArrow 
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box  sx={{ bgcolor: '#fff', borderTop: '1px solid #ebebeb', pt: 8, pb: 4, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* 1. Brand & Copyright Area */}
          <Grid   size={{xs:12 ,md:3 }}>
            <Typography 
              variant="h5" 
              sx={{ color: '#D70F64', fontWeight: 800, mb: 2, cursor: 'pointer' }}
            >
              TastyCart
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              © 2025 TastyCart. <br />
              Food delivery in Islamabad & across Pakistan.
            </Typography>
            {/* <Stack direction="row" z-index={999} spacing={1}>
              <IconButton size="small" sx={{ border: '1px solid #ddd' }}><Facebook fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ border: '1px solid #ddd' }}><Instagram fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ border: '1px solid #ddd' }}><Twitter fontSize="small" /></IconButton>
            </Stack> */}
          </Grid>

          {/* 2. Customer Care */}
          <Grid  size={{xs:6 ,md:3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Customer Care
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="none" variant="body2">Help Center</Link>
              <Link href="#" color="inherit" underline="none" variant="body2">Refund Account</Link>
              <Link href="#" color="inherit" underline="none" variant="body2">TastyCart Rewards</Link>
              <Link href="#" color="inherit" underline="none" variant="body2">Cashback Policy</Link>
            </Stack>
          </Grid>

          {/* 3. Popular Areas (Islamabad Focus) */}
          <Grid   size={{xs:6 ,md:3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Popular Areas
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="none" variant="body2">F-6 & F-7, Islamabad</Link>
              <Link href="#" color="inherit" underline="none" variant="body2">Blue Area, Islamabad</Link>
              <Link href="#" color="inherit" underline="none" variant="body2">G-11 & G-13, Islamabad</Link>
              <Link href="#" color="inherit" underline="none" variant="body2">DHA & Bahria Town</Link>
            </Stack>
          </Grid>

          {/* 4. Partner with Us */}
          <Grid  size={{xs:12 ,md:3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Partner with Us
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="none" variant="body2">Register your shop</Link>
              <Link href="#" color="inherit" underline="none" variant="body2">Become a rider</Link>
              <Link href="#" color="inherit" underline="none" variant="body2">TastyCart for Business</Link>
            </Stack>
            
            {/* App Badges Simulation */}
            <Stack direction="row" spacing={1} mt={3}>
               <Box sx={{ bgcolor: '#000', color: '#fff', p: '4px 12px', borderRadius: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <Apple sx={{ mr: 1 }} />
                  <Box>
                    <Typography sx={{ fontSize: '8px' }}>Download on</Typography>
                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold' }}>App Store</Typography>
                  </Box>
               </Box>
               <Box sx={{ bgcolor: '#000', color: '#fff', p: '4px 12px', borderRadius: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <PlayArrow sx={{ mr: 1 }} />
                  <Box>
                    <Typography sx={{ fontSize: '8px' }}>Get it on</Typography>
                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold' }}>Google Play</Typography>
                  </Box>
               </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Links */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Stack direction="row" spacing={3} flexWrap="wrap">
            <Link href="#" color="text.secondary" underline="none" variant="caption">Privacy Policy</Link>
            <Link href="#" color="text.secondary" underline="none" variant="caption">Terms & Conditions</Link>
            <Link href="#" color="text.secondary" underline="none" variant="caption">Security</Link>
          </Stack>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Language fontSize="small" sx={{ color: 'text.secondary' }} />
            <Typography variant="caption" color="text.secondary">English (EN)</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;