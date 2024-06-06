import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRevenueByPromotionId, showPromotion } from '../../Store/promotionSlice';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { Bar } from 'react-chartjs-2'; // Correct import for react-chartjs-2
import { BarChart }  from '@mui/x-charts/BarChart';
import { AxisConfig } from '@mui/x-charts'



const RevenueBarChart = () => {
  const dispatch = useDispatch();

  const { promotion, promotionRevenues } = useSelector((state) => state.promotion);

  useEffect(() => {
    dispatch(showPromotion());
  }, [dispatch]);

  
  useEffect(() => {
    console.log(promotion.length)
    if (promotion.length > 0) {
      promotion.forEach((promo) => {
        dispatch(getRevenueByPromotionId(promo.id));
      });
    }
  }, [dispatch, promotion]);

  const promotionIds = Object.keys(promotionRevenues);
  const revenues = Object.values(promotionRevenues);

  console.log("labels"+promotionIds);
  console.log("rev"+revenues)

  const data = {
    
    labels: promotionIds,
    datasets: [
      {
        label: 'Revenue',
        data: revenues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],

  };

  console.log("DATA" +data);

  return (
    <div>
    <h2 style={{ textAlign: 'center' }}>Promotion Revenue Chart</h2> 
    <BarChart
      width={200}
      height={300}
      series={[
        { data: revenues, id: 'pvId' },
      ]}
      xAxis={[{ data: promotionIds, scaleType: 'band' }]}
    />
    </div>
  );
};

export default RevenueBarChart;


  //   <ChartContainer
  //   width={500}
  //   height={300}
  //   series={[{ data: revenues, label: 'uv', type: 'bar' }]}
  //   xAxis={[{ scaleType: 'band', data: promotionIds }]}
  // >
  //   <BarPlot />
  // </ChartContainer>