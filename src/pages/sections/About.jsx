import { Box } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';

export const About = () => {
    return (
        <Box className='section' id='about' sx={{marginTop:'100px',display:'flex',flexDirection:'column' }}>
            <Box variant='div'>
                <Typography variant='h1' fontSize= '30px'>
                        Sobre Mi
                </Typography>
            </Box>
            
            <Box variant='div'sx={{display:'flex',flexDirection:{xs:'column',md:'row'}}}>
                <Box variant ='div' sx={{width:{xs:'95%',md:'45%'}}}>
                    <Typography variant='h3' fontSize= '20px' paddingTop={3} overflow={'none'} >
                    Como desarrollador web me apasiona crear sitios web y aplicaciones limpios, eficientes y 
                    fáciles de usar. Tengo un sólido conocimiento de las tecnologías de desarrollo web y 
                    lenguajes de programación como HTML, CSS, JavaScript, React Js y frameworks complementarios como, 
                    Bootstrap y Firebase, y estoy constantemente ampliando mis conocimientos y manteniéndome 
                    actualizado con las últimas tendencias y mejores prácticas.
                    <br/>
                    <br />
                    Dentro de mis cualidades principales se encuentra mi capacidad para trabajar en colaboración con equipos 
                    multifuncionales, mi comunicacion clara, responsabilidad con los horarios de entrega y plazos entre otros.
                    Me enorgullezco de mi atención al detalle y de mi compromiso de producir código bien estructurado, 
                    mantenible y escalable.
                    <br />
                    <br/>
                    Además de mis habilidades técnicas, también soy altamente adaptable, creativo y orientado a soluciones. 
                    Disfruto abordando problemas complejos y encontrando formas innovadoras de superar los desafíos. 
                    Ya sea que esté trabajando en un proyecto pequeño o en una aplicación empresarial a gran escala, 
                    estoy comprometido a brindar resultados que superen las expectativas e impulsen el éxito empresarial.    
                    </Typography>
                </Box>
                <br/>
                <Box variant='div'sx={{width:{xs:'95%',md:'45%'},display:'flex' ,justifyContent:'center', margin:'auto'}} >
                    <img src="Banner.png" alt="MyImage" overflow='hidden'/>
                </Box>
            </Box>
        </Box>
    )
}
