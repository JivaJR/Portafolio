import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export const ProyectCards = ({id,img,name,tech}) => {
    return (
        <>  
            <Box variant='div' sx={{width:{xs:'90%',sm:'50%'}}}>
                <img 
                    className='proyect-img'
                    src={img} alt={id} 
                    width="90%"
                />
            </Box>
            <Box variant='div' sx={{display:'flex',flexDirection:'column',width:{xs:'90%',sm:'50%'}}}>
                <Typography>
                    {name}
                </Typography>
                <br />
                <Typography>
                    {tech}
                </Typography>
            </Box>
        </>
    )
}
