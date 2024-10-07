import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid, Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography'
const Dashboard = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            setProduct(response.data)
        })
    }, [])
    console.log(product);
    return (
        <>
        <Grid2 container spacing={2}>

            {
                product.map((item,index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={item.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    {item.category}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                                <Typography variant="body2">
                                    {item.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))
            }
        </Grid2>
        </>

    )
}

export default Dashboard