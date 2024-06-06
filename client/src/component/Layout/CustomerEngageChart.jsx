import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerEngage, showPromotion } from '../../Store/promotionSlice';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { Bar } from 'react-chartjs-2'; 
import { BarChart }  from '@mui/x-charts/BarChart';
import { AxisConfig } from '@mui/x-charts'




const CustomerEngageChart = () => {
  const dispatch = useDispatch();

  const { promotion, customerEnagage } = useSelector((state) => state.promotion);

  useEffect(() => {
    dispatch(showPromotion());
  }, [dispatch]);

  
  useEffect(() => {
    console.log(promotion.length)
    if (promotion.length > 0) {
      promotion.forEach((promo) => {
        dispatch(getCustomerEngage(promo.id));
      });
    }
  }, [dispatch, promotion]);

  const promotionIds = Object.keys(customerEnagage);
  const visits = Object.values(customerEnagage);


  const data = {
    
    labels: promotionIds,
    datasets: [
      {
        label: 'Visitors',
        data: visits,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],

  };

const chartSetting = {
    yAxis: [
      {
        label: 'No. of visits',
      },
    ],

}

  return (
    <div>
    <BarChart
      width={200}
      height={300}
      series={[
        { data: visits, id: 'pvId' },
      ]}
      xAxis={[{ data: promotionIds, scaleType: 'band' }]}
      {...chartSetting}
    />
    </div>
  );
};

export default CustomerEngageChart;
