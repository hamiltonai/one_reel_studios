import React, { useState, useEffect } from 'react';
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
  useMediaQuery,
  CircularProgress
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

// Import background video
const backgroundVideo = "https://d2jy5h4r3efipz.cloudfront.net/background_video.mp4";

// EmailJS configuration - using environment variables with fallbacks
// This approach works with both local .env files and AWS Amplify environment variables
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

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
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  
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

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setIsSubmitting(true);

      // Check if EmailJS credentials are available
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        console.error('EmailJS credentials are missing. Please check your environment variables.');
        setSnackbar({
          open: true,
          severity: 'error',
          message: 'Email service is not properly configured. Please contact us directly at sales@1ReelStudios.com.'
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || 'Not provided',
        service: formData.service ? serviceOptions.find(option => option.value === formData.service)?.label : 'Not selected',
        message: formData.message,
        to_email: 'sales@1ReelStudios.com'
      };

      // Send email using EmailJS
      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )
        .then((response) => {
          console.log('Email sent successfully:', response);
          
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
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          
          // Show error message
          setSnackbar({
            open: true,
            severity: 'error',
            message: 'Failed to send your message. Please try again later or contact us directly.'
          });
        })
        .finally(() => {
          setIsSubmitting(false);
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
          autoPlay={!isMobile}
          muted
          loop
          playsInline
          poster="https://d2jy5h4r3efipz.cloudfront.net/background_video_poster.jpg"
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
                          disabled={isSubmitting}
                          sx={{ 
                            mt: 2,
                            px: 4,
                            py: 1.5
                          }}
                        >
                          {isSubmitting ? (
                            <CircularProgress size={24} color="inherit" />
                          ) : (
                            'Send Message'
                          )}
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
                        sales@1ReelStudios.com
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
                        832-997-5436
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
                        Houston, TX<br />
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221925.5392281988!2d-95.73095806897561!3d29.78499217862969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1647887977452!5m2!1sen!2sus" 
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