import React, { useEffect, useState } from "react";
import Sidenav from "../component/Layout/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../component/Layout/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "../Dash.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useDispatch, useSelector} from "react-redux";
import { showPromotion, getTotalRev, tcr} from "../Store/promotionSlice";
import RevenueBarChart from "../component/Layout/RevenueBarChart";
import CustomerEngageChart from "../component/Layout/CustomerEngageChart";
import ConversionRateChart from "../component/Layout/ConversionRateChart";

function Home() {
  const dispatch = useDispatch();

  const { promotion, loading, totalRev, conversionRate, customerEnagage} = useSelector(
    (state) => state.promotion
  );

  const conversion = Object.values(conversionRate);
  const totalConversionRate =  conversion.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);

  const visits = Object.values(customerEnagage);
  
  const totalVisitors =  visits.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);


  useEffect(() => {
    dispatch(showPromotion());
    dispatch(getTotalRev());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: "33%", height: 100 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" paddingLeft={"10px"}>
                      Total Visitors
                      <br/>
                    {totalVisitors}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: "33%", height: 100 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" paddingLeft={"10px"}>
                      Conversion Rate 
                      <br />
                      {totalConversionRate}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: "31%", height: 100 }}>
                  <CardContent>
                    <Stack spacing={2} direction="row">
                      <StorefrontIcon />
                      <div className="paddingall">
                        <span className="pricetitle">
                          {totalRev
                            ? `Rs ${totalRev.toFixed(2)}`
                            : "Loading..."}
                        </span>
                        <br />
                        <span className="pricesubtitle">Generated Revenue</span>
                      </div>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} display="flex" justifyContent="center" alignItems="center"/>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Promotion Analytics
                    <br/>
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                      <Card 
                        sx={{
                          maxWidth: "30vw",
                          maxHeight: "50vh"
                        }}
                      >
                        <CardContent>
                          <Typography align="center">Promotion Revenue Chart</Typography>
                          <RevenueBarChart />
                        </CardContent>
                      </Card>
                      </Grid>
                      <Grid item xs={6}>
                      <Card
                      sx={{
                        maxWidth: "30vw",
                        maxHeight: "50vh"
                      }}
                      >
                        <CardContent>
                          <Typography align="center">Customer Engagment Chart</Typography>
                          <CustomerEngageChart />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} alignSelf={"center"} >
                      <Card 
                        sx={{
                          maxWidth: "52vw",
                          maxHeight: "50vh",

                        }}
                      >
                        <CardContent align="center">
                          <Typography align="center">Conversion Rate Chart</Typography>
                          <ConversionRateChart />
                        </CardContent>
                      </Card>
                      </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sx={{
              marginTop: "-120px",
              minHeight: "150vh"
            }}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Active Promotions
                  </Typography>

                  {/* <Card sx={{ maxWidth: 350 }}> */}
                    <CardContent>
                      {promotion.map((promo) => (
                        <Card key={promo.id} sx={{ mb: 2 }}>
                          <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              Promotion ID: {promo.id}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Promotion Type: {promo.promotionType}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                    </CardContent>
                  {/* </Card> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Home;
