import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './SitemarkIcon';
import {pink} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 280,
    backgroundColor: theme.palette.background.default,
    backdropFilter: 'blur(24px)',
  },
}));

export function HomeAppBar({refs}) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const routeToInteract = () => {
    let path = `interact`;
    navigate(path);
  };

  const scrollToComponent = (sectionName) => {
    if (refs[sectionName].current) {
      const offset = 100;
      refs[sectionName].current.style.scrollMargin = `${offset}px`;
      refs[sectionName].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setOpen(false); // Close drawer after clicking
    }
  };

  const menuItems = [
    { name: "home", label: "Home" },
    { name: "dataset", label: "Dataset" },
    { name: "downloads", label: "Downloads" },
    { name: "citations", label: "Citation" },
    { name: "ack", label: "Acknowledgements" },
    // { name: "faq", label: "FAQ" },
  ];

  const drawerContent = (
      <Box sx={{ p: 2 }}>
        <List>
          {menuItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                    onClick={() => scrollToComponent(item.name)}
                    sx={{
                      borderRadius: 1,
                      mb: 0.5,
                      '&:hover': {
                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                      }
                    }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <ListItemButton
                onClick={routeToInteract}
                sx={{
                  borderRadius: 1,
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.primary.dark,
                  }
                }}
            >
              <ListItemText primary="Interact with Dataset" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
  );

  return (
      <AppBar
          position="fixed"
          sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 3 }}
      >
        <Container maxWidth="lg">
          <StyledToolbar variant="dense" disableGutters>
            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'block', md: 'none' }, paddingX: 2 }}>
              <IconButton
                  color="inherit"
                  onClick={toggleDrawer(true)}
                  edge="start"
                  sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {menuItems.map((item) => (
                    <Button
                        key={item.name}
                        variant="text"
                        color="info"
                        size="small"
                        onClick={() => scrollToComponent(item.name)}
                        sx={{ minWidth: item.name === 'citations' || item.name === 'faq' ? 0 : 'auto' }}
                    >
                      {item.label}
                    </Button>
                ))}
              </Box>
            </Box>

            {/* Desktop CTA Button */}
            <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 1,
                  alignItems: 'center'
                }}
            >
              <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={routeToInteract}
              >
                Interact with Dataset
              </Button>
            </Box>
          </StyledToolbar>

          {/* Mobile Drawer */}
          <StyledDrawer
              anchor="left"
              open={open}
              onClose={toggleDrawer(false)}
              ModalProps={{
                keepMounted: true, // Better mobile performance
              }}
          >
            {drawerContent}
          </StyledDrawer>
        </Container>
      </AppBar>
  );
}




export function InteractAppBar({refs}) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const routeToHome = () =>{
        let path = `/`;
        navigate(path);
    }

    const drawerContent = (
        <Box sx={{ p: 2 }}>
            <List>
                <ListItem disablePadding sx={{ mt: 2 }}>
                    <ListItemButton
                        onClick={routeToHome}
                        sx={{
                            borderRadius: 1,
                            backgroundColor: (theme) => theme.palette.primary.main,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: (theme) => theme.palette.primary.dark,
                            }
                        }}
                    >
                        <ListItemText primary="Back to Home" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 3 }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    {/* Mobile Menu Icon */}
                    <Box sx={{ display: { xs: 'block', md: 'none' }, paddingX: 2 }}>
                        <IconButton
                            color="inherit"
                            onClick={toggleDrawer(true)}
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                    </Box>

                    {/* Desktop CTA Button */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            onClick={routeToHome}
                        >
                            Back to Home
                        </Button>
                    </Box>
                </StyledToolbar>

                {/* Mobile Drawer */}
                <StyledDrawer
                    anchor="left"
                    open={open}
                    onClose={toggleDrawer(false)}
                    ModalProps={{
                        keepMounted: true, // Better mobile performance
                    }}
                >
                    {drawerContent}
                </StyledDrawer>
            </Container>
        </AppBar>
    );
}
