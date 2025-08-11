import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Drawer,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  TextField
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Member data
const members = [
  { name: 'Kaoru', role: 'Vocal', img: '/images/members/kaoru_vocal.PNG' },
  { name: 'Yui', role: 'Vocal', img: '/images/members/yui_vocal.PNG' },
  { name: 'Charlie', role: 'Guitar', img: '/images/members/charlie_guitar.PNG' },
  { name: 'Yuki', role: 'Base', img: '/images/members/yuki_base.PNG' },
  { name: 'Gordon', role: 'Drum', img: '/images/members/gordon_drum.PNG' },
];

// Album data
const albums = [
    {
        title: "SILLY HIKES",
        releaseDate: "2025/09/01",
        jacket: "/images/jackets/silly_hikes.PNG"
    }
];

const navItems = [
  { text: 'NEWS', href: '#news' },
  { text: 'LIVE', href: '#live' },
  { text: 'BIOGRAPHY', href: '#bio' },
  { text: 'DISCOGRAPHY', href: '#discography' },
  { text: 'CONTACT', href: '#contact' },
];

const sectionStyles = {
  my: 8,
  textAlign: 'center',
  scrollMarginTop: { xs: '56px', sm: '64px' },
};

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        YOKOGAWA FRUIT STORE
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            YOKOGAWA FRUIT STORE
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button key={item.text} color="inherit" href={item.href}>{item.text}</Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Container sx={{ py: 4 }}>
        <main>
          <Box id="news" sx={sectionStyles}>
            <Typography variant="h2" gutterBottom>NEWS</Typography>
            <Typography variant="h5">
              New album "SILLY HIKES" will be released on 2025/09/01!
            </Typography>
          </Box>

          <Box id="live" sx={sectionStyles}>
            <Typography variant="h2" gutterBottom>LIVE</Typography>
            <Typography variant="h5">
              Next live: 2025/12/24 at Higashi-Fushimi Station
            </Typography>
          </Box>

          <Box id="bio" sx={sectionStyles}>
            <Typography variant="h2" gutterBottom>BIOGRAPHY</Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              YOKOGAWA FRUIT STORE is a rock band formed on August 10, 2025.
              We deliver fresh and juicy music from Yokogawa.
            </Typography>
            <Box>
              <Grid container spacing={4} justifyContent="center">
                {members.map((member) => (
                  <Grid item key={member.name} xs={12} sm={4}>
                    <Card sx={{ display: 'flex', alignItems: 'center', width: 350, mx: 'auto', p: 2, height: '100%' }}>
                      <CardMedia
                        component="img"
                        image={member.img}
                        alt={member.name}
                        sx={{ borderRadius: '50%', width: 120, height: 120, flexShrink: 0 }}
                      />
                      <CardContent sx={{ flex: '1 1 auto', textAlign: 'left', pl: 2 }}>
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{member.role}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

          <Box id="discography" sx={sectionStyles}>
            <Typography variant="h2" gutterBottom>DISCOGRAPHY</Typography>
            <Grid container spacing={4} justifyContent="center">
                {albums.map((album) => (
                    <Grid item key={album.title}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={album.jacket}
                                alt={`${album.title} album jacket`}
                            />
                            <CardContent>
                                <Typography variant="h5">{album.title}</Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Release Date: {album.releaseDate}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
          </Box>

          <Box id="contact" sx={sectionStyles}>
            <Typography variant="h2" gutterBottom>CONTACT</Typography>
            <Box component="form" sx={{ maxWidth: '600px', mx: 'auto', mt: 4 }}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                margin="normal"
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </main>
      </Container>

      <Box component="footer" sx={{ py: 3, textAlign: 'center', backgroundColor: 'background.paper', mt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} YOKOGAWA FRUIT STORE. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
