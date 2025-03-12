import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions,
  Avatar,
  Rating,
  Divider,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Import background video
import backgroundVideo from '../assets/videos/background_video.mp4';

// Icons
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

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Services data
  const services = [
    {
      title: 'Video Production',
      description: 'Professional video production services for commercials, corporate videos, and social media content.',
      icon: <MovieIcon fontSize="large" color="primary" />,
      link: '/services#video-production'
    },
    {
      title: 'Drone Photography',
      description: 'Stunning aerial photography and videography to showcase your property, event, or location from a unique perspective.',
      icon: <VideoCameraBackIcon fontSize="large" color="primary" />,
      link: '/services#drone-photography'
    },
    {
      title: 'Photography',
      description: 'High-quality photography services for products, events, portraits, and more.',
      icon: <CameraAltIcon fontSize="large" color="primary" />,
      link: '/services#photography'
    },
    {
      title: 'Post-Production',
      description: 'Professional editing, color grading, and visual effects to enhance your video and photo content.',
      icon: <EditIcon fontSize="large" color="primary" />,
      link: '/services#post-production'
    }
  ];

  // Portfolio items
  const portfolioItems = [
    {
      title: 'Corporate Brand Video',
      image: 'https://source.unsplash.com/random/600x400/?corporate',
      description: 'A brand video for a Fortune 500 company showcasing their values and mission.',
      link: '/portfolio/corporate-brand'
    },
    {
      title: 'Real Estate Drone Tour',
      image: 'https://source.unsplash.com/random/600x400/?realestate',
      description: 'Aerial footage of luxury properties for a high-end real estate agency.',
      link: '/portfolio/real-estate-drone'
    },
    {
      title: 'Product Photography',
      image: 'https://source.unsplash.com/random/600x400/?product',
      description: 'Professional product photography for an e-commerce website.',
      link: '/portfolio/product-photography'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Johnson Real Estate',
      avatar: 'https://source.unsplash.com/random/100x100/?woman',
      rating: 5,
      text: 'One Reel Studios delivered exceptional drone footage of our properties. The quality and professionalism exceeded our expectations!'
    },
    {
      name: 'Michael Chen',
      company: 'Chen Enterprises',
      avatar: 'https://source.unsplash.com/random/100x100/?man',
      rating: 5,
      text: 'The corporate video they produced for us perfectly captured our company culture and values. Highly recommended!'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Rodriguez Fashion',
      avatar: 'https://source.unsplash.com/random/100x100/?woman2',
      rating: 5,
      text: 'The product photography for our new clothing line was stunning. The attention to detail and lighting was perfect.'
    }
  ];

  return (
    <Box>
      {/* Hero Section with Video Background */}
      <Box 
        sx={{ 
          position: 'relative',
          height: { xs: '100vh', md: '100vh' },
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
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 2
              }}
            >
              Capture Your Vision
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
              Professional video production and photography services to bring your creative vision to life.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{ 
                  mr: 2,
                  mb: { xs: 2, sm: 0 },
                  px: 4,
                  py: 1.5
                }}
              >
                Get a Quote
              </Button>
              <Button 
                variant="outlined" 
                color="inherit"
                size="large"
                component={RouterLink}
                to="/portfolio"
                sx={{ 
                  px: 4,
                  py: 1.5,
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                View Our Work
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Services
            </Typography>
            <Typography 
              variant="h6" 
              component="p" 
              color="text.secondary"
              sx={{ 
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              We offer a wide range of video production and photography services to meet your creative needs.
            </Typography>
          </Box>

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
                      <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                        <Button 
                          size="small" 
                          component={RouterLink} 
                          to={service.link}
                          color="primary"
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Featured Work
            </Typography>
            <Typography 
              variant="h6" 
              component="p" 
              color="text.secondary"
              sx={{ 
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              Check out some of our recent projects and see how we can help bring your vision to life.
            </Typography>
          </Box>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {portfolioItems.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
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
                      <CardMedia
                        component="img"
                        height="240"
                        image={item.image}
                        alt={item.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button 
                          size="small" 
                          component={RouterLink} 
                          to={item.link}
                          color="primary"
                        >
                          View Project
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="outlined" 
              color="primary"
              size="large"
              component={RouterLink}
              to="/portfolio"
              sx={{ px: 4 }}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Client Testimonials
            </Typography>
            <Typography 
              variant="h6" 
              component="p" 
              color="text.secondary"
              sx={{ 
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </Typography>
          </Box>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={fadeIn}>
                    <Card 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        p: 3,
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', mb: 2 }}>
                        <Avatar 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          sx={{ width: 60, height: 60, mr: 2 }}
                        />
                        <Box>
                          <Typography variant="h6" component="p" sx={{ fontWeight: 600 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.company}
                          </Typography>
                          <Rating value={testimonial.rating} readOnly size="small" sx={{ mt: 0.5 }} />
                        </Box>
                      </Box>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body1" sx={{ flexGrow: 1, fontStyle: 'italic' }}>
                        "{testimonial.text}"
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action Section */}
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

export default HomePage; 