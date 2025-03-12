import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Import background video
const backgroundVideo = "https://d2jy5h4r3efipz.cloudfront.net/background_video.mp4";

// Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MovieIcon from '@mui/icons-material/Movie';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EditIcon from '@mui/icons-material/Edit';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ServicesPage = () => {
  // Services data with detailed information
  const services = [
    {
      id: 'video-production',
      title: 'Video Production',
      description: 'Professional video production services for commercials, corporate videos, and social media content.',
      icon: <MovieIcon fontSize="large" color="primary" />,
      image: 'https://source.unsplash.com/random/800x600/?videoproduction',
      longDescription: 'Our video production services cover everything from concept development to final delivery. We work closely with you to understand your vision and bring it to life with high-quality video content that engages your audience and achieves your goals.',
      features: [
        'Full-service video production from concept to completion',
        'Professional cinematography with state-of-the-art equipment',
        'Creative direction and storyboarding',
        'Professional lighting and sound recording',
        'On-location or studio filming options',
        'Experienced production team'
      ]
    },
    {
      id: 'drone-photography',
      title: 'Drone Photography & Videography',
      description: 'Stunning aerial photography and videography to showcase your property, event, or location from a unique perspective.',
      icon: <VideoCameraBackIcon fontSize="large" color="primary" />,
      image: 'https://source.unsplash.com/random/800x600/?dronephotography',
      longDescription: 'Our FAA-certified drone pilots capture breathtaking aerial footage that provides a unique perspective of your property, event, or location. Drone photography and videography adds a dynamic element to your visual content that traditional ground-based photography cannot achieve.',
      features: [
        'FAA-certified and insured drone pilots',
        'High-resolution 4K and 6K aerial video',
        'High-resolution aerial photography',
        '360° panoramic aerial photos',
        'Real estate property showcases',
        'Event coverage from above',
        'Construction progress documentation'
      ]
    },
    {
      id: 'photography',
      title: 'Photography',
      description: 'High-quality photography services for products, events, portraits, and more.',
      icon: <CameraAltIcon fontSize="large" color="primary" />,
      image: 'https://source.unsplash.com/random/800x600/?photography',
      longDescription: 'Our professional photographers capture stunning images that tell your story and showcase your products, people, or events in the best possible light. We use professional-grade equipment and techniques to deliver exceptional results.',
      features: [
        'Product photography with professional lighting',
        'Corporate headshots and team photos',
        'Event photography',
        'Architectural and interior photography',
        'Lifestyle and brand photography',
        'High-resolution images with professional editing',
        'Quick turnaround times'
      ]
    },
    {
      id: 'post-production',
      title: 'Post-Production',
      description: 'Professional editing, color grading, and visual effects to enhance your video and photo content.',
      icon: <EditIcon fontSize="large" color="primary" />,
      image: 'https://source.unsplash.com/random/800x600/?videoediting',
      longDescription: 'Our post-production services transform raw footage into polished, professional content. Our experienced editors use industry-standard software to edit, color grade, and add visual effects to your video content, ensuring it looks and sounds its best.',
      features: [
        'Professional video editing',
        'Color grading and correction',
        'Sound design and audio mixing',
        'Motion graphics and animation',
        'Visual effects (VFX)',
        'Photo retouching and enhancement',
        'Custom graphics and lower thirds'
      ]
    }
  ];

  return (
    <Box>
      {/* Hero Section with Video Background */}
      <Box 
        sx={{ 
          position: 'relative',
          height: { xs: '60vh', md: '70vh' },
          overflow: 'hidden',
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Video Background */}
        <Box
          component="video"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        />
        
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: -1
          }}
        />
        
        {/* Content */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2
              }}
            >
              Our Services
            </Typography>
            <Typography 
              variant="h5" 
              component="p" 
              sx={{ 
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.9
              }}
            >
              Professional video production and photography services to meet all your creative needs.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Overview */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={fadeIn}>
                    <Card 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, textAlign: 'center', pt: 4 }}>
                        <Box sx={{ mb: 2 }}>
                          {service.icon}
                        </Box>
                        <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                          {service.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <Box 
          key={service.id} 
          id={service.id}
          sx={{ 
            py: 10, 
            backgroundColor: index % 2 === 0 ? 'background.paper' : 'background.default'
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <Grid container spacing={6} alignItems="center" direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
                <Grid item xs={12} md={6}>
                  <Box 
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{ 
                      width: '100%',
                      borderRadius: 2,
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="h3" 
                    component="h2" 
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    color="text.secondary"
                    sx={{ mb: 4 }}
                  >
                    {service.longDescription}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    What We Offer:
                  </Typography>
                  
                  <List>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} disableGutters>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Button 
                    variant="contained" 
                    color="primary"
                    size="large"
                    component={RouterLink}
                    to="/contact"
                    sx={{ mt: 4 }}
                  >
                    Get a Quote
                  </Button>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>
      ))}

      {/* Call to Action */}
      <Box 
        sx={{ 
          py: 10, 
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 3
            }}
          >
            Ready to Start Your Project?
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              mb: 4,
              opacity: 0.9,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Contact us today to discuss your project and get a free quote. We're excited to bring your vision to life!
          </Typography>
          <Button 
            variant="contained" 
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{ 
              px: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage; 