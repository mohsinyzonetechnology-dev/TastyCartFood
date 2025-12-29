// // import React from 'react';
// import { 
//   Container,  
//   Card, 
//   CardContent, 
//   Typography, 
//   Box, 
//   Stack 
// } from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

// const CateringCard = () => {
//   return (
//     <Container>
//     <Card 
//       sx={{ 
//         maxWidth: 360, 
//         marginTop:3,
//         borderRadius: 4, 
//         boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
//         overflow: 'hidden',
//         fontFamily: 'Roboto, sans-serif'
//       }}
//     >
//       {/* Upper Red Section (Custom Image/Banner Area) */}
//       <Box
//         sx={{
//           height: 180,
//           backgroundColor: '#7D0000', // Deep Maroon
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: '#F3C34D', // Gold color
//           textAlign: 'center',
//           p: 2
//         }}
//       >
//         {/* Logo Placeholder */}
//         <Box sx={{ mb: 1, textAlign: 'center' }}>
//           <Box 
//             sx={{ 
//               width: 40, 
//               height: 40, 
//               bgcolor: '#F3C34D', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center',
//               clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
//               margin: '0 auto'
//             }}
//           >
//             <Typography sx={{ color: '#7D0000', fontWeight: 'bold', fontSize: 12 }}>HG</Typography>
//           </Box>
//           <Typography variant="caption" sx={{ color: 'white', letterSpacing: 2, fontSize: 8, display: 'block', mt: 0.5 }}>
//             THE HOUSE OF TASTE
//           </Typography>
//         </Box>

//         {/* Title */}
//         <Typography 
//           variant="h4" 
//           component="div" 
//           sx={{ 
//             fontFamily: 'serif', 
//             fontWeight: 500,
//             lineHeight: 1.1
//           }}
//         >
//           Muharram <br /> 
//           <span style={{ fontStyle: 'italic', fontSize: '0.9em' }}>Catering Menu</span>
//         </Typography>
//       </Box>

//       {/* Bottom Content Section */}
//       <CardContent sx={{ p: 2.5 }}>
//         <Typography 
//           variant="h6" 
//           sx={{ 
//             fontWeight: 700, 
//             color: '#2D3436',
//             fontSize: '1.25rem'
//           }}
//         >
//           Haleem Ghar Catering
//         </Typography>

//         <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5, mb: 2, color: 'text.secondary' }}>
//           <Typography variant="body2">$$</Typography>
//           <Typography variant="body2">•</Typography>
//           <Typography variant="body2">Pakistani</Typography>
//         </Stack>

//         <Stack direction="row" spacing={2} alignItems="center" sx={{ color: '#5F6368' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//             <AccessTimeIcon sx={{ fontSize: 20, color: '#9AA0A6' }} />
//             <Typography variant="body2" sx={{ fontWeight: 500 }}>13 days</Typography>
//           </Box>
          
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
//             <Typography variant="body2" sx={{ color: '#DADCE0', mx: 0.5 }}>•</Typography>
//             <DeliveryDiningIcon sx={{ fontSize: 22, color: '#9AA0A6' }} />
//             <Typography variant="body2" sx={{ fontWeight: 500 }}>Rs. 99</Typography>
//           </Box>
//         </Stack>
//       </CardContent>
//     </Card>
//     </Container>
    
//   );
// };

// export default CateringCard;

// import React from 'react'; 
import { 
  Container,  
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Stack, 
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StarsIcon from '@mui/icons-material/Stars';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CateringPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 1. SECTION: ALL CATERERS CARD */}
      <Typography variant="h5" fontWeight="bold" mb={3} color="#2D3436">
        All caterers
      </Typography>

      <Card 
        sx={{ 
          maxWidth: 360, 
          borderRadius: 4, 
          boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          transition: '0.3s',
          '&:hover': { transform: 'translateY(-5px)' }
        }}
      >
        {/* Upper Banner (TastyCart Branding) */}
        <Box
          sx={{
            height: 180,
            backgroundColor: '#7D0000', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F3C34D',
            p: 2
          }}
        >
          <Box 
            sx={{ 
              width: 45, height: 45, bgcolor: '#F3C34D', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', mb: 1
            }}
          >
            <Typography sx={{ color: '#7D0000', fontWeight: 'bold', fontSize: 14 }}>TC</Typography>
          </Box>
          <Typography variant="h5" sx={{ fontFamily: 'serif', fontWeight: 600, textAlign: 'center' }}>
            Muharram <br /> 
            <span style={{ fontStyle: 'italic', fontSize: '0.8em' }}>Catering Menu</span>
          </Typography>
        </Box>

        {/* Card Details */}
        <CardContent sx={{ p: 2.5 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight={800} color="#D70F64">TastyCart</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <StarsIcon sx={{ color: '#D70F64', fontSize: 18 }} />
              <Typography variant="body2" fontWeight="bold">4.9</Typography>
            </Box>
          </Stack>

          <Typography variant="body2" color="text.secondary" mt={0.5}>
            $$ • Pakistani • Fast Delivery
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Stack direction="row" spacing={2} alignItems="center" color="#5F6368">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="body2" fontWeight={600}>20-30 min</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <DeliveryDiningIcon fontSize="small" />
              <Typography variant="body2" fontWeight={700} color="#D70F64">Free Delivery</Typography>
            </Box>
          </Stack>
          <Typography variant="caption" display="block" mt={1} color="text.secondary">
            Min. Order: Rs. 200
          </Typography>
        </CardContent>
      </Card>

      {/* 2. SECTION: DETAILED TEXT (SEO CONTENT) */}
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          <Grid  size={{xs:12}}>
            <Typography variant="h4" fontWeight="bold" color="#2D3436" gutterBottom>
              Food delivery in Islamabad has never been easier
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Pakistan's capital and a pulsating, energetic and cosmopolitan city, Islamabad enjoys a multicultural and diverse food scene. 
              Thanks to its rapid urbanisation, you can find numerous international chains as well as incredibly popular local and traditional establishments. 
              With <strong>TastyCart</strong>, food delivery in Islamabad is now made super-easy and convenient.
            </Typography>

            <Typography variant="h5" fontWeight="bold" mt={4} gutterBottom>
              Islamabad food delivery is just what modern fast-paced lifestyles need
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Late to the office? No time to prepare food for lunch? With TastyCart, you never have to forgo your food. 
              Our mobile app allows you to choose from hundreds of restaurants and get delicious food right at your doorstep!
            </Typography>

            <Typography variant="h5" fontWeight="bold" mt={4} gutterBottom>
              Famous restaurants for online food delivery in Islamabad
            </Typography>
            <List>
              {[
                "14th Street Pizza: One of the best places for pizzas In Islamabad",
                "KFC: Classic and beloved fried chicken",
                "The New Yorker Pizza: A favorite for pizza lovers",
                "McDonald's: Offers something for everyone",
                "Char Grill Centre (CGC): Comfort food everyone adores!"
              ].map((text, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#D70F64' }} />
                  </ListItemIcon>
                  <Typography variant="body1" color="text.secondary">{text}</Typography>
                </ListItem>
              ))}
            </List>

            {/* Ramzan Section */}
            <Box sx={{ bgcolor: '#fff5f8', p: 4, borderRadius: 4, mt: 4, borderLeft: '5px solid #D70F64' }}>
              <Typography variant="h5" fontWeight="bold" color="#D70F64" gutterBottom>
                Presenting “no-cook Ramzan” only by TastyCart
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Now order in Islamabad from your favourite restaurants through TastyCart and make your Ramzan flavorful 
                with bestest Sehri and Iftari deals. We fulfill your cravings with free delivery services (Min. order Rs. 200).
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                Top Ramzan Partners:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                KFC, McDonald's, Chaaye Khana, ChikaChino, Tuscany Courtyard, Street 1 Cafe.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CateringPage;