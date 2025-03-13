import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Avatar, 
  Button, 
  Tooltip, 
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useScrollTrigger,
  Slide,
  CssBaseline,
  Link as MuiLink
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../assets/images/logo.svg';

// Navigation items
const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

// Hide AppBar on scroll down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pb: 2 }}>
        <Box component="img" src={logoImage} alt="One Reel Studios" sx={{ height: 80 }} />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton 
              component={RouterLink} 
              to={page.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, mt: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth
          component={RouterLink}
          to="/contact"
          onClick={handleDrawerToggle}
        >
          Get a Quote
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'background.paper' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo */}
              <Box 
                component={RouterLink} 
                to="/"
                sx={{ 
                  display: 'flex', 
                  mr: 2,
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <Box component="img" src={logoImage} alt="One Reel Studios" sx={{ height: 80 }} />
              </Box>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ flexGrow: 1, display: 'flex', ml: 4 }}>
                  {pages.map((page) => (
                    <Button
                      key={page.name}
                      component={RouterLink}
                      to={page.path}
                      sx={{ 
                        my: 2, 
                        color: 'text.primary', 
                        display: 'block',
                        fontWeight: 500,
                        '&:hover': {
                          color: 'primary.main',
                        }
                      }}
                    >
                      {page.name}
                    </Button>
                  ))}
                </Box>
              )}

              {/* Call to Action Button */}
              <Box sx={{ flexGrow: isMobile ? 1 : 0 }}>
                {!isMobile && (
                  <Button 
                    variant="contained" 
                    color="primary"
                    component={RouterLink}
                    to="/contact"
                    sx={{ ml: 2 }}
                  >
                    Get a Quote
                  </Button>
                )}
              </Box>

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box component="main">
        {children}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 6,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) => theme.palette.background.dark,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              mb: 4,
            }}
          >
            <Box sx={{ mb: { xs: 4, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
              <Box 
                component="img" 
                src={logoImage} 
                alt="One Reel Studios" 
                sx={{ 
                  height: 50, 
                  mb: 2,
                  borderRadius: 2,
                }} 
              />
              <Typography variant="body2" color="white" sx={{ maxWidth: 300 }}>
                Professional video production and photography services for businesses and individuals.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Typography variant="h6" color="white" gutterBottom>
                Quick Links
              </Typography>
              {pages.map((page) => (
                <MuiLink
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  color="inherit"
                  underline="hover"
                  sx={{ mb: 1 }}
                >
                  {page.name}
                </MuiLink>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Typography variant="h6" color="white" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="white">
                sales@1ReelStudios.com
              </Typography>
              <Typography variant="body2" color="white">
                832-997-5436
              </Typography>
              <Typography variant="body2" color="white" sx={{ mt: 1 }}>
                456 Media Avenue, Houston, TX 77002
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="white">
              © {new Date().getFullYear()} One Reel Studios. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MainLayout; 