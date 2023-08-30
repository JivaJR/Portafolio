import React from 'react'
import { NavLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';  

export const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    let activeStyle = {
        textDecoration: "none",
        display:'none',
        color: 'inherit',
    };
    let nonActiveStyle = {
        textDecoration: "none",
        color: 'inherit',
    };

    return (
        <Box sx={{width:'100%', flexGrow:2,position:'fixed',zIndex:1}}>
            <AppBar  sx={{flexDirection:'row'}}>
                <Toolbar sx={{width:'100%', display:'flex',justifyContent: 'space-between'}}>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                flexDirection:'column'
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography 
                                    variant="h6" component="a" 
                                    sx={{
                                        mr: 2,
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontSize: 20,
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    }}
                                    href="#about"
                                >
                                    About
                                </Typography>
                            </MenuItem >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography 
                                    variant="h6" component="a" 
                                    sx={{
                                        mr: 2,
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontSize: 20,
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    }}
                                    href="#technologies"
                                >
                                    Technologies
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography 
                                    variant="h6" component="a" 
                                    sx={{
                                        mr: 2,
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontSize: 20,
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    }}
                                    href="#projects"
                                >
                                    Projects
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography 
                                    variant="h6" component="a" 
                                    sx={{
                                        mr: 2,
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontSize: 20,
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    }}
                                    href="#contacto"
                                >
                                    Contacto
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box>
                        <Typography 
                            variant="h6" component="a" 
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontSize: 20,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                            href="/"
                        >
                            Javier
                        </Typography>
                    </Box>
                    <Box sx={{display: { xs: 'none', sm: 'flex' }}}>
                        <Typography 
                            variant="h6" component="a" 
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontSize: 15,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            href="#about"
                        >
                            About me
                        </Typography>
                        <Typography 
                            variant="h6" component="a" 
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontSize: 15,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            href="#technologies"
                        >
                            Technologies
                        </Typography>
                        <Typography 
                            variant="h6" component="a" 
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontSize: 15,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            href="#projects"
                        >
                            Projects
                        </Typography>
                        <Typography 
                            variant="h6" component="a" 
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontSize: 15,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            href='#github'
                        >
                            Contacto
                        </Typography>
                        <Typography 
                            variant="h6" component="a" 
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontSize: 15,
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            href="https://drive.google.com/file/d/1G5PfTYtZ5Wv6O52fo0b4NyOefo8Q2_y7/view?usp=drive_link"
                            target="__blank"
                        >
                            Resume
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


