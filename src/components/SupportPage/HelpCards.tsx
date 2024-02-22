import { Box, Card, CardMedia, CardContent, Typography,} from '@mui/material'

import cardDetails from '../../../backend/Helpcards.json'
const HelpCards = () => {
  return (
    <div className='helpCards' style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem'}}  >
        {
        cardDetails.map(({image,title,description},index)=>(
        <Box key={index} sx={{ height: '15rem', width: '15rem'}}>
            <Card sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '15rem', width: '15rem', paddingTop: '1rem'}}>
                    <CardMedia 
                        component={'img'}
                        image={image}
                        alt={title}
                        sx={{height: "7rem", width: '7rem'}}
                        />
                    <CardContent sx={{textAlign: 'center'}} >
                        <Typography gutterBottom variant='h5' color={'primary'} sx={{fontSize: '1.25rem', fontWeight: '600'}} >{title}</Typography>
                        <hr style={{opacity: .5,width: "50px",margin: "6px auto 20px",height: "1px",border: "none",backgroundColor: "#3b3a3a"}} />
                        <Typography gutterBottom variant='body2' color={'text.secondary'} component='div'>{description}</Typography>
                    </CardContent>
            </Card>
        </Box>
    ))}
    </div>
  )
}

export default HelpCards
