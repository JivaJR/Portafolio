import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { proyectos } from '../data/data'

export const ProyectsList = () => {
    const proy = proyectos;
    return (
        <ImageList sx={{ width: '90%', height: 450,display:{xs:'flex',md:'none' }} }>
            {proy.map((item) => (
                <ImageListItem key={item.id} sx={{width: '90%',display:'block'}}>
                    <img
                        src={item.img}
                        srcSet={item.img}
                        alt={item.name}
                        loading="lazy"
                        width='300px'
                    />
                    <ImageListItemBar
                        title={item.name}
                        subtitle={<span>by: {item.tech}</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
