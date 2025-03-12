import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper,
  MenuItem,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Divider,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Import background video
const backgroundVideo = "https://d2jy5h4r3efipz.cloudfront.net/background_video.mp4";

// Icons
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

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

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success',
    message: ''
  });

  // Service options
  const serviceOptions = [
    { value: 'video-production', label: 'Video Production' },
    { value: 'drone-photography', label: 'Drone Photography & Videography' },
    { value: 'photography', label: 'Photography' },
    { value: 'post-production', label: 'Post-Production' },
    { value: 'other', label: 'Other' }
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Validate phone
    if (formData.phone && !/^\+?[\d\s()-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    // Validate service
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send the form data to your backend here
      console.log('Form submitted:', formData);
      
      // Show success message
      setSnackbar({
        open: true,
        severity: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } else {
      // Show error message
      setSnackbar({
        open: true,
        severity: 'error',
        message: 'Please correct the errors in the form.'
      });
    }
  };

  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <Box>
      {/* Hero Section with Video Background */}
      <Box 
        sx={{ 
          position: 'relative',
          height: { xs: '50vh', md: '60vh' },
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
              Contact Us
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
              Have a project in mind? Get in touch with our team today.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Form and Info Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: { xs: 3, md: 5 },
                    borderRadius: 2,
                    backgroundColor: 'background.paper'
                  }}
                >
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 4 }}
                  >
                    Send Us a Message
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          variant="outlined"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          variant="outlined"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          variant="outlined"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          select
                          label="Service Interested In"
                          name="service"
                          variant="outlined"
                          value={formData.service}
                          onChange={handleChange}
                          error={!!errors.service}
                          helperText={errors.service}
                          required
                        >
                          {serviceOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={6}
                          label="Your Message"
                          name="message"
                          variant="outlined"
                          value={formData.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          helperText={errors.message}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          sx={{ 
                            mt: 2,
                            px: 4,
                            py: 1.5
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
            
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: 2
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                    <Typography 
                      variant="h4" 
                      component="h2" 
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 4 }}
                    >
                      Contact Information
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <EmailIcon sx={{ mr: 2 }} />
                        <Typography variant="h6" component="p">
                          Email
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ ml: 5 }}>
                        info@onereelstudios.com
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <PhoneIcon sx={{ mr: 2 }} />
                        <Typography variant="h6" component="p">
                          Phone
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ ml: 5 }}>
                        +1 (555) 123-4567
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <LocationOnIcon sx={{ mr: 2 }} />
                        <Typography variant="h6" component="p">
                          Address
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ ml: 5 }}>
                        123 Film Street<br />
                        Hollywood, CA 90028<br />
                        United States
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
                    
                    <Typography variant="h6" component="p" gutterBottom>
                      Business Hours
                    </Typography>
                    <Typography variant="body1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Google Map */}
      <Box sx={{ height: '500px', width: '100%' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.33842150284417!3d34.09811712519001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1647887977452!5m2!1sen!2sca" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="One Reel Studios Location"
        ></iframe>
      </Box>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage; 