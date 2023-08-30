import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { About } from './sections/About';
import { Technologies } from './sections/Technologies';
import { Projects } from './sections/Projects';
import { Contacto } from './sections/Contacto'

export const HomePage = () => {
    return (
        <Box>
            <Box id='intro' sx={{ display:'flex', flexDirection:'column',marginTop:'100px'}}>
                <Typography variant='h1' fontSize= '30px'>Hola <br/> Soy Javier Rodriguez <br/>Y soy un Desarrollador Web e Ingeniero Electronico </Typography>
                <br />
                <Typography variant='h3' marginTop={2} fontSize= '20px'>Cuento experiencia y manejo ya sea en Front-End como Back-End </Typography>
            </Box>
            <About/>
            <Technologies/>
            <Projects/>
            <Contacto/>
        </Box>
    )
}
