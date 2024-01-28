import React from "react";
import { Grid, Box, Paper, Card, Button, Typography } from "@mui/material";
import UtkalBankLogo from "../Icons/UtkalBank.png";
import BajajBankLogo from "../Icons/Bajaj.png";
import MahindraBankLogo from "../Icons/Mahindra.png";
import SriramBankLogo from "../Icons/SHRIRAMFIN.png";
import UtkalTick from "../Icons/utkTick.svg";
import BajajTick from "../Icons/bajajTick.svg";
import MahindraTick from "../Icons/mahindraTick.svg";
import SriRamTick from "../Icons/sriramTick.svg";
import SliderComp from "../Components/SliderComp";
import CalanderComp from "../Components/CalanderComp";
// import Charts from "../Components/Charts";
function Dashboard() {
  return (
    <Box p={8} style={{ backgroundColor: "#F7F8FA", height: "auto" }}>
      <Box pb={2}>
        <Typography variant="h4"> Welcome John Poul</Typography>
      </Box>
      <Grid container rowGap="40px">
        <Grid item xs={4}>
          {/* <Charts /> */}
        </Grid>
        <Grid item xs={8}>
          timeline
        </Grid>
        <Grid item xs={8}>
          <Grid container rowGap={"40px"}>
            <Grid xs={6}>
              <Card
                style={{
                  backgroundColor: "#F8F0FF",
                  height: "23vh",
                  width: "85%",
                  padding: "20px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Box>
                    <img src={UtkalBankLogo} alt="utkalBank" />
                  </Box>
                  <Box ml={3}>
                    <Typography style={{ fontWeight: "600" }} variant="body">
                      Utkarsh Small Finance Bank
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap="20px" mt={3}>
                  <Card
                    style={{
                      width: "300px",
                      height: "30px",
                      backgroundColor: "#EFDDFF",
                      alignItems: "center",
                      display: "flex",
                      gap: "10px",
                      padding: "10px",
                    }}
                  >
                    <img src={UtkalTick} alt="" />
                    <Typography>Highest Interest Rate</Typography>
                  </Card>
                  <Card
                    style={{
                      width: "300px",
                      height: "30px",
                      backgroundColor: "#EFDDFF",
                      alignItems: "center",
                      display: "flex",
                      gap: "10px",
                      padding: "10px",
                    }}
                  >
                    <img src={UtkalTick} alt="" />
                    <Typography>RBI Insured</Typography>
                  </Card>
                </Box>
                <Box
                  mt={3}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography>Interest Upto</Typography>
                    <Typography style={{ fontWeight: "600" }}>
                      9.10% p.a
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      style={{
                        width: "150px",
                        backgroundColor: "#520B8D",
                        padding: "10px",
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card
                style={{
                  backgroundColor: "#EFF6FF",
                  height: "23vh",
                  width: "85%",
                  padding: "20px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Box>
                    <img src={BajajBankLogo} alt="bajajBank" />
                  </Box>
                  <Box ml={3}>
                    <Typography style={{ fontWeight: "600" }} variant="body">
                      Bajaj Finserv
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap="20px" mt={3}>
                  <Card
                    style={{
                      width: "300px",
                      height: "30px",
                      backgroundColor: "#d7e9f8",
                      alignItems: "center",
                      display: "flex",
                      gap: "10px",
                      padding: "10px",
                    }}
                  >
                    <img src={BajajTick} alt="" />
                    <Typography>Highest Interest Rate</Typography>
                  </Card>
                  <Card
                    style={{
                      width: "300px",
                      height: "30px",
                      backgroundColor: "#d7e9f8",
                      alignItems: "center",
                      display: "flex",
                      gap: "10px",
                      padding: "10px",
                    }}
                  >
                    <img src={BajajTick} alt="" />
                    <Typography>RBI Insured</Typography>
                  </Card>
                </Box>
                <Box
                  mt={3}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography>Interest Upto</Typography>
                    <Typography style={{ fontWeight: "600" }}>
                      9.10% p.a
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      style={{
                        width: "150px",
                        backgroundColor: "#520B8D",
                        padding: "10px",
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card
                style={{
                  backgroundColor: "#F4F4F4",
                  height: "23vh",
                  width: "85%",
                  padding: "20px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Box>
                    <img src={SriramBankLogo} alt="utkalBank" />
                  </Box>
                  <Box ml={3}>
                    <Typography style={{ fontWeight: "600" }} variant="body">
                      Shriram Finance
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap="20px" mt={3}>
                  <Card
                    style={{
                      width: "300px",
                      height: "30px",
                      backgroundColor: "#dedfdf",
                      alignItems: "center",
                      display: "flex",
                      gap: "10px",
                      padding: "10px",
                    }}
                  >
                    <img src={SriRamTick} alt="" />
                    <Typography>Highest Interest Rate</Typography>
                  </Card>
                  <Card
                    style={{
                      width: "300px",
                      height: "30px",
                      backgroundColor: "#dedfdf",
                      alignItems: "center",
                      display: "flex",
                      gap: "10px",
                      padding: "10px",
                    }}
                  >
                    <img src={SriRamTick} alt="" />
                    <Typography>RBI Insured</Typography>
                  </Card>
                </Box>
                <Box
                  mt={3}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography>Interest Upto</Typography>
                    <Typography style={{ fontWeight: "600" }}>
                      9.10% p.a
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      style={{
                        width: "150px",
                        backgroundColor: "#520B8D",
                        padding: "10px",
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card
                style={{
                  backgroundColor: "#FFEFEF",
                  height: "23vh",
                  width: "85%",
                  padding: "20px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Box>
                    <img src={MahindraBankLogo} alt="utkalBank" />
                  </Box>
                  <Box ml={3}>
                    <Typography style={{ fontWeight: "600" }} variant="body">
                      Mahindra Finance
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap="20px" mt={3}>
                  <Card
                    style={{
                      width: "300px",
                      height: "30px",
                      backgroundColor: "#ffd6d6",
                      alignItems: "center",
                      display: "flex",
                      gap: "10px",
                      padding: "10px",
                    }}
                  >
                    <img src={MahindraTick} alt="" />
                    <Typography>Highest Interest Rate</Typography>
                  </Card>
                  <Card
                    style={{
                      width: "300px",
                      height: "30px",
                      backgroundColor: "#ffd6d6",
                      alignItems: "center",
                      display: "flex",
                      gap: "10px",
                      padding: "10px",
                    }}
                  >
                    <img src={MahindraTick} alt="" />
                    <Typography>RBI Insured</Typography>
                  </Card>
                </Box>
                <Box
                  mt={3}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography>Interest Upto</Typography>
                    <Typography style={{ fontWeight: "600" }}>
                      9.10% p.a
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      style={{
                        width: "150px",
                        backgroundColor: "#520B8D",
                        padding: "10px",
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Box mt={3} mr={5}>
            <SliderComp />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <CalanderComp />
        </Grid>

        <Grid></Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
