import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions,
  Button,
  Tabs,
  Tab,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// Import background video
const backgroundVideo = "https://d2jy5h4r3efipz.cloudfront.net/background_video.mp4";

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
      staggerChildren: 0.1
    }
  }
};

const PortfolioPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // State for filtering
  const [activeTab, setActiveTab] = useState('all');
  
  // State for modal
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: 'Corporate Brand Video',
      category: 'video',
      tags: ['Corporate', 'Branding'],
      image: 'https://source.unsplash.com/random/800x600/?corporate',
      description: 'A brand video for a Fortune 500 company showcasing their values and mission.',
      client: 'Global Tech Inc.',
      date: 'January 2023',
      videoUrl: 'http://d2jy5h4r3efipz.cloudfront.net/drone1.mp4',
      isDirectVideo: true
    },
    {
      id: 2,
      title: 'Real Estate Drone Tour',
      category: 'drone',
      tags: ['Real Estate', 'Aerial'],
      image: 'https://source.unsplash.com/random/800x600/?realestate',
      description: 'Aerial footage of luxury properties for a high-end real estate agency.',
      client: 'Luxury Homes Realty',
      date: 'March 2023',
      videoUrl: 'http://d2jy5h4r3efipz.cloudfront.net/real_estate.mp4',
      isDirectVideo: true
    },
    {
      id: 3,
      title: 'Product Photography',
      category: 'photography',
      tags: ['Product', 'E-commerce'],
      image: 'https://source.unsplash.com/random/800x600/?product',
      description: 'Professional product photography for an e-commerce website.',
      client: 'Fashion Forward',
      date: 'April 2023',
      videoUrl: 'http://d2jy5h4r3efipz.cloudfront.net/wedding.mp4',
      isDirectVideo: true,
      gallery: [
        'https://source.unsplash.com/random/800x600/?product1',
        'https://source.unsplash.com/random/800x600/?product2',
        'https://source.unsplash.com/random/800x600/?product3',
        'https://source.unsplash.com/random/800x600/?product4'
      ]
    },
    {
      id: 4,
      title: 'Wedding Videography',
      category: 'video',
      tags: ['Wedding', 'Event'],
      image: 'https://source.unsplash.com/random/800x600/?wedding',
      description: 'Cinematic wedding video capturing the special moments of the couple\'s big day.',
      client: 'Johnson & Smith Wedding',
      date: 'June 2023',
      videoUrl: 'http://d2jy5h4r3efipz.cloudfront.net/wedding.mp4',
      isDirectVideo: true
    },
    {
      id: 5,
      title: 'Construction Progress',
      category: 'drone',
      tags: ['Construction', 'Aerial'],
      image: 'https://source.unsplash.com/random/800x600/?construction',
      description: 'Monthly aerial documentation of a major construction project.',
      client: 'Metro Development Corp',
      date: 'Ongoing',
      gallery: [
        'https://source.unsplash.com/random/800x600/?construction1',
        'https://source.unsplash.com/random/800x600/?construction2',
        'https://source.unsplash.com/random/800x600/?construction3'
      ]
    },
    {
      id: 6,
      title: 'Corporate Headshots',
      category: 'photography',
      tags: ['Corporate', 'Portrait'],
      image: 'https://source.unsplash.com/random/800x600/?headshot',
      description: 'Professional headshots for a law firm\'s website and marketing materials.',
      client: 'Johnson & Associates Law',
      date: 'July 2023',
      gallery: [
        'https://source.unsplash.com/random/800x600/?headshot1',
        'https://source.unsplash.com/random/800x600/?headshot2',
        'https://source.unsplash.com/random/800x600/?headshot3',
        'https://source.unsplash.com/random/800x600/?headshot4'
      ]
    },
    {
      id: 7,
      title: 'Music Video Production',
      category: 'video',
      tags: ['Music', 'Entertainment'],
      image: 'https://source.unsplash.com/random/800x600/?music',
      description: 'Music video production for an up-and-coming artist\'s debut single.',
      client: 'Stellar Records',
      date: 'August 2023',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 8,
      title: 'Cityscape Aerial Tour',
      category: 'drone',
      tags: ['City', 'Aerial', 'Tourism'],
      image: 'https://source.unsplash.com/random/800x600/?cityscape',
      description: 'Breathtaking aerial footage of the city skyline for a tourism campaign.',
      client: 'City Tourism Board',
      date: 'September 2023',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 9,
      title: 'Restaurant Menu Photography',
      category: 'photography',
      tags: ['Food', 'Restaurant'],
      image: 'https://source.unsplash.com/random/800x600/?food',
      description: 'Mouth-watering food photography for a high-end restaurant\'s menu and website.',
      client: 'Gourmet Bistro',
      date: 'October 2023',
      gallery: [
        'https://source.unsplash.com/random/800x600/?food1',
        'https://source.unsplash.com/random/800x600/?food2',
        'https://source.unsplash.com/random/800x600/?food3',
        'https://source.unsplash.com/random/800x600/?food4'
      ]
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setModalOpen(false);
  };

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
              Our Portfolio
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
              Explore our diverse collection of creative projects and visual stories.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Filter Tabs */}
          <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
              sx={{
                '& .MuiTab-root': {
                  fontSize: '1rem',
                  fontWeight: 500,
                  px: 3,
                  py: 1.5
                }
              }}
            >
              <Tab value="all" label="All Projects" />
              <Tab value="video" label="Video Production" />
              <Tab value="drone" label="Drone Photography" />
              <Tab value="photography" label="Photography" />
            </Tabs>
          </Box>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <Grid container spacing={4}>
              {filteredProjects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
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
                        },
                        cursor: 'pointer'
                      }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <Box sx={{ position: 'relative' }}>
                        {project.isDirectVideo ? (
                          <>
                            <Box
                              component="video"
                              src={project.videoUrl}
                              autoPlay={!isMobile}
                              muted
                              loop
                              playsInline
                              poster={project.image}
                              sx={{
                                width: '100%',
                                height: '240px',
                                objectFit: 'cover'
                              }}
                            />
                            {isMobile && (
                              <Box 
                                sx={{ 
                                  position: 'absolute', 
                                  top: '50%', 
                                  left: '50%', 
                                  transform: 'translate(-50%, -50%)',
                                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                  borderRadius: '50%',
                                  width: 60,
                                  height: 60,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}
                              >
                                <PlayArrowIcon sx={{ color: 'white', fontSize: 40 }} />
                              </Box>
                            )}
                          </>
                        ) : (
                          <CardMedia
                            component="img"
                            height="240"
                            image={project.image}
                            alt={project.title}
                          />
                        )}
                      </Box>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.tags.map((tag, index) => (
                            <Chip 
                              key={index} 
                              label={tag} 
                              size="small" 
                              color={index % 2 === 0 ? 'primary' : 'secondary'}
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Button 
                          size="small" 
                          color="primary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(project);
                          }}
                        >
                          View Details
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

      {/* Project Detail Modal */}
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: { xs: 2, md: 3 }
          }
        }}
      >
        {selectedProject && (
          <DialogContent sx={{ p: 0 }}>
            <IconButton
              aria-label="close"
              onClick={handleModalClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'grey.500',
                bgcolor: 'background.paper',
                zIndex: 1,
                '&:hover': {
                  bgcolor: 'background.paper',
                  color: 'primary.main'
                }
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedProject.videoUrl ? (
              <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 4 }}>
                {selectedProject.isDirectVideo ? (
                  <Box
                    component="video"
                    src={selectedProject.videoUrl}
                    controls
                    autoPlay={!isMobile}
                    muted
                    playsInline
                    poster={selectedProject.image}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <iframe
                    src={selectedProject.videoUrl}
                    title={selectedProject.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0
                    }}
                    allowFullScreen
                  />
                )}
              </Box>
            ) : selectedProject.gallery ? (
              <Box sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                  {selectedProject.gallery.map((image, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        component="img"
                        src={image}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: 1
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ) : (
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1,
                  mb: 4
                }}
              />
            )}

            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              {selectedProject.title}
            </Typography>

            <Typography variant="body1" paragraph>
              {selectedProject.description}
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Client:
                </Typography>
                <Typography variant="body1" paragraph>
                  {selectedProject.client}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Date:
                </Typography>
                <Typography variant="body1" paragraph>
                  {selectedProject.date}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Categories:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {selectedProject.tags.map((tag, index) => (
                    <Chip 
                      key={index} 
                      label={tag} 
                      size="small" 
                      color={index % 2 === 0 ? 'primary' : 'secondary'}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default PortfolioPage; 