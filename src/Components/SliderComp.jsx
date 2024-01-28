import React from 'react'
import { Grid, Box, Card, Button, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function SliderComp() {
    let cardData = [
        {
            heading: "How FDs are taxed",
            paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading: "How FDs are taxed",
            paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            heading: "How FDs are taxed",
            paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]
    return (
        <Grid container justifyContent="space-between" alignItems="center" spacing={4}>
            <Grid item>
                <Typography variant='h5' fontWeight="bold">Get Answer</Typography>
                <Typography variant='body'>to all your questions</Typography>
            </Grid>
            <Grid item>
                <Box display="flex" alignItems="center" gap="20px">
                    <Box>
                        <ArrowBackIosIcon fontSize='large' style={{ color: "gray", opacity: ".4" }} />
                    </Box>
                    <Box>
                        <ArrowForwardIosIcon fontSize='large' />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {cardData.map((item, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Card style={{ height: "150px", width: "auto", padding: "20px" }}>
                                    <Typography fontWeight="bold" variant='h5'>{item.heading}</Typography>
                                    <Typography mt={2}>{item.paragraph}</Typography>
                                    <Box mt={2}>
                                        <a href="">Read more...</a>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SliderComp