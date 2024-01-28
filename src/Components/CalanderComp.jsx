import React from 'react'
import { Card, Box, Grid, Button, Typography } from "@mui/material"

const fdData = [
    {
        type: "Video KYC",
        bank: "Utkarsh SF Bank",
        plan: "FD Plan 2",
        date: "28 ",
        monthYear: "Oct, 2023",
        paymentStatus: "Scheduled On",
        depositAmount: 20000,
        tennure: 2,
        interestRate: 9.1,
        actions: ["Complete Now", "Reschedule"],
    },
    {
        type: "Pending Payment",
        bank: "Bajaj Finserv Corp",
        plan: "FD 1",
        date: "30",
        monthYear: "Oct, 2023",
        paymentStatus: "Pay By",
        depositAmount: 25000,
        tennure: 18,
        interestRate: 8.1,
        actions: ["Pay Now", "Cancel Application"],
    },
    {
        type: "Upcoming FD Maturity",
        bank: "Shriram Finance Corp",
        plan: "FD 1",
        paymentStatus: "Renew by",
        date: "30",
        monthYear: "Oct, 2023",
        depositAmount: 25000,
        tennure: 18,
        interestRate: 8.1,
        actions: ["Renew Now", "Compare other FDs"],
    },
]
function CalanderComp() {
    return (
        <Box>
            {fdData.map((cardData, index) => {
                return (
                    <Card style={{ padding: "30px 30px 30px 40px", height: "24vh", borderBottom: "1px solid gray", borderRadius: "5px" }}>
                        <Typography variant='body' style={{ fontWeight: "600" }}>
                            {cardData.type}
                        </Typography>
                        <Grid container mt={3} rowGap={2}>
                            <Grid item xs={3}>
                                <Typography color="gray" variant='subtitle2'>{cardData.paymentStatus}</Typography>
                                <Box height="60px" width="100px" display="flex" justifyContent="center"
                                    alignItems="center" style={{ backgroundColor: "#f3f2f5" }}>
                                    <Typography fontWeight="bold" variant='h3'>
                                        {cardData.date}
                                    </Typography>
                                </Box>
                                <Box height="30px" width="100px" display="flex" justifyContent="center"
                                    alignItems="center" style={{ backgroundColor: "#CE5151", color: "#fff" }}>
                                    {cardData.monthYear}
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography fontWeight="bold" variant='body'>{cardData.bank}</Typography>
                                <Box mt={3} display="flex" justifyContent="space-between">
                                    <Box>
                                        <Typography color="#1A1B1E">Deposit Amt</Typography>
                                        <Typography>Rs.{cardData.depositAmount}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>Tennure</Typography>
                                        <Typography>{cardData.tennure} Years</Typography>
                                    </Box>
                                    <Box>
                                        <Typography>Interest Rate</Typography>
                                        <Typography>{cardData.interestRate}%</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box display="flex" alignItems="center" gap="20px" mt={2}>
                            <Button style={{
                                backgroundColor: "#3B39D9",
                                width: "13vw",
                                padding: "10px",
                                fontSize: "16px",
                                textTransform: "capitalize"
                            }} variant='contained'>
                                {cardData?.actions[0]}
                            </Button>
                            <Button style={{
                                borderColor: "#3B39D9",
                                width: "13vw",
                                padding: "10px",
                                fontSize: "16px",
                                textTransform: "capitalize"
                            }} variant='outlined'>
                                {cardData?.actions[1]}
                            </Button>
                        </Box>

                    </Card>
                )
            })}
        </Box>
    )
}

export default CalanderComp