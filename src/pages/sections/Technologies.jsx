import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { tecnologias } from '../data/data'
import { TechCards } from '../componets/TechCards'
import { getElementsByLevel } from '../helpers/getElementsByLevel'

export const Technologies = () => {
    const tech = tecnologias;
    const techimportant = getElementsByLevel('important');
    const techsecund = getElementsByLevel('secundary');
    const [techs, settechs] = useState(techimportant)
    const [seeMore, setseeMore] = useState(true)
    const moreTech = () =>{
        setseeMore(false)
        settechs(tech)
    }
    const notMore = () =>{
        setseeMore(true)
        settechs(techimportant)
    }
    return (
        <Box className='section' id='technologies'>
            <Typography variant='h1' fontSize= '30px'>
                Tecnologias
            </Typography>
            <br/>
            <Grid container spacing={2}>
                {
                    techs.map(tech => 
                        //anchuras xs={12} sm={6} md={4} lg={3}
                    <Grid item xs={12} sm={4} md={3}key={tech.id}>
                        <TechCards {...tech}/>
                    </Grid>
                    )
                }
                <Grid item xs={12} sm={12} md={3}key={tech.id} sx={{display:'flex'}}>
                    {seeMore ? <Button onClick={moreTech} variant="contained" sx={{width:{md:'95%',xs:'100%'}}}>Ver Mas</Button> : <Button onClick={notMore} variant="contained" sx={{width:{md:'95%',xs:'100%'}}}>Ver Menos</Button>}
                </Grid>
            </Grid>
        </Box>
        
    )
}
