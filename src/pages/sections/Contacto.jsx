import React from 'react'
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Email, LogoDevOutlined } from '@mui/icons-material';

export const Contacto = () => {
    return (
        <Box className='section' id='contacto'>
            <Typography variant='h1' fontSize= '30px'>
                Contacto
            </Typography>
            <br />
            <Typography variant='h3' fontSize= '20px'>
                Trabaja Conmigo
            </Typography>
            <Box display='flex'>
                <img src="das" alt="" width='50%'/>
                <Typography>Portagolio personal <br />
                    <Typography variant='a'>Ajavierr@uninorte.edu.co</Typography>
                </Typography>
            </Box>
            <Box margin='30px 80px' display='flex'justifyContent='space-between'>
                <Button variant="contained" href="https://www.linkedin.com/in/javier-alberto-rodriguez-rodriguez-914455240/" target="__blank" startIcon={<LinkedInIcon />}>
                    Linkedin
                </Button>
                <Button variant="contained" href="https://github.com/JivaJR" target="__blank" startIcon={<GitHubIcon />}>
                    GitHub
                </Button>
                <Button variant="contained" href="mailto:ajavierr@uninorte.edu.com" target="__blank" startIcon={<Email />}>
                    Email
                </Button>
                <Button variant="contained" href="https://drive.google.com/file/d/1G5PfTYtZ5Wv6O52fo0b4NyOefo8Q2_y7/view" target="__blank" startIcon={<LogoDevOutlined />}>
                    Cv
                </Button>
            </Box>
        </Box>
        
    )
}
