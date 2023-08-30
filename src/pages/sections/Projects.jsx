import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { proyectos } from '../data/data'
import { ProyectCards } from '../componets/ProyectCards';
import { ProyectsList } from '../componets/ProyectsList';

export const Projects = () => {
    const proy = proyectos;
    return (
        <Box className='section' id='projects'>
            <Typography variant='h1' fontSize= '30px' mb='30px'>
                Projectos
            </Typography>
            {
                    proy.map(proy => 
                        <Box key={proy.id} sx={{ width:'90%', display:{xs:'none',md:'flex'}, flexDirection:{xs:'column',sm:'row'},margin:'auto',paddingTop:'50px',alignItems:'center'}}>
                            <ProyectCards  {...proy}/>
                        </Box>
                    )
                }
            <ProyectsList/>
        </Box>
        
    )
}
