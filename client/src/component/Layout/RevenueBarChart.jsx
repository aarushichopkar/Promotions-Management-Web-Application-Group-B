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
        backgroundColor:  'rgba(54, 162, 235, 0.6)',
        borderColor:  'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],

  };

  const chartSetting = {
    yAxis: [
      {
        label: 'Revenue in Rs.',
      },
    ],
}

  return (
    <div>
    <BarChart
      width={200}
      height={300}
      series={[
        { data: revenues, id: 'pvId', color: 'rgba(255, 100, 80, 1)' },
      ]}
      xAxis={[{ data: promotionIds, scaleType: 'band' }]}
      {...chartSetting}
    />
    </div>
  );
};

export default RevenueBarChart;
