import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Import background video
const backgroundVideo = "https://d2jy5h4r3efipz.cloudfront.net/background_video.mp4";

// Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MovieIcon from '@mui/icons-material/Movie';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import StarIcon from '@mui/icons-material/Star';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

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

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Team members data
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & Creative Director',
      image: 'https://source.unsplash.com/random/300x300/?man',
      bio: 'John has over 15 years of experience in film and video production. He founded One Reel Studios with a vision to create compelling visual content that tells powerful stories.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Cinematographer',
      image: 'https://source.unsplash.com/random/300x300/?woman',
      bio: 'With a background in documentary filmmaking, Sarah brings a unique perspective to every project. Her eye for composition and lighting creates stunning visuals that captivate audiences.'
    },
    {
      name: 'Michael Chen',
      role: 'Drone Specialist',
      image: 'https://source.unsplash.com/random/300x300/?man2',
      bio: 'Michael is an FAA-certified drone pilot with expertise in aerial cinematography. He specializes in capturing breathtaking aerial footage for real estate, events, and commercial projects.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Photographer',
      image: 'https://source.unsplash.com/random/300x300/?woman2',
      bio: 'Emily\'s passion for photography shines through in her work. She specializes in product photography, portraits, and event coverage, always delivering exceptional results.'
    }
  ];

  // Company values
  const values = [
    {
      title: 'Quality',
      description: 'We are committed to delivering the highest quality visual content that exceeds our clients\' expectations.',
      icon: <StarIcon fontSize="large" color="primary" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to understand their vision and bring it to life.',
      icon: <GroupsIcon fontSize="large" color="primary" />
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and respect in all our business relationships.',
      icon: <HandshakeIcon fontSize="large" color="primary" />
    },
    {
      title: 'Innovation',
      description: 'We continuously explore new technologies and techniques to push the boundaries of visual storytelling.',
      icon: <EmojiObjectsIcon fontSize="large" color="primary" />
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
              About Us
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
              We are a team of passionate visual storytellers dedicated to bringing your creative vision to life.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Typography 
                  variant="h2" 
                  component="h2" 
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  Our Story
                </Typography>
                <Typography variant="body1" paragraph>
                  One Reel Studios was founded in 2015 with a simple mission: to create compelling visual content that tells powerful stories. What started as a small team of passionate filmmakers has grown into a full-service video production and photography studio.
                </Typography>
                <Typography variant="body1" paragraph>
                  Over the years, we've had the privilege of working with a diverse range of clients, from small businesses to Fortune 500 companies. Our commitment to quality and client satisfaction has earned us a reputation as a trusted partner for all visual content needs.
                </Typography>
                <Typography variant="body1" paragraph>
                  Today, we continue to push the boundaries of visual storytelling, embracing new technologies and techniques to deliver exceptional results for our clients.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Box 
                  component="img"
                  src="https://source.unsplash.com/random/600x400/?filmmaking"
                  alt="Our team at work"
                  sx={{ 
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Our Values
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
              These core principles guide everything we do at One Reel Studios.
            </Typography>
          </Box>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {values.map((value, index) => (
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
                          {value.icon}
                        </Box>
                        <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                          {value.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.description}
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

      {/* Our Team Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Meet Our Team
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
              Our talented team of professionals is passionate about creating exceptional visual content.
            </Typography>
          </Box>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {teamMembers.map((member, index) => (
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
                      <CardMedia
                        component="img"
                        height="300"
                        image={member.image}
                        alt={member.name}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                          {member.name}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" gutterBottom>
                          {member.role}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {member.bio}
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

      {/* Why Choose Us Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Typography 
                  variant="h2" 
                  component="h2" 
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  Why Choose Us
                </Typography>
                <Typography variant="body1" paragraph>
                  At One Reel Studios, we're committed to delivering exceptional visual content that meets your specific needs and exceeds your expectations. Here's what sets us apart:
                </Typography>
                
                <List>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Experienced Team" 
                      secondary="Our team of professionals has years of experience in video production and photography."
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Cutting-Edge Equipment" 
                      secondary="We use the latest cameras, drones, and production equipment to deliver high-quality results."
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Client-Focused Approach" 
                      secondary="We work closely with you to understand your vision and bring it to life."
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Attention to Detail" 
                      secondary="We pay meticulous attention to every aspect of your project, from pre-production to final delivery."
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Timely Delivery" 
                      secondary="We understand the importance of deadlines and always deliver projects on time."
                    />
                  </ListItem>
                </List>
                
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 4 }}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Box 
                  component="img"
                  src="https://source.unsplash.com/random/600x400/?camera"
                  alt="Professional camera equipment"
                  sx={{ 
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

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

export default AboutPage; 