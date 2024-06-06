import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConverionRate, getCustomerEngage, showPromotion } from '../../Store/promotionSlice';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { Bar } from 'react-chartjs-2'; 
import { BarChart }  from '@mui/x-charts/BarChart';
import { AxisConfig } from '@mui/x-charts'




const ConversionRateChart = () => {
  const dispatch = useDispatch();

  const { promotion, conversionRate } = useSelector((state) => state.promotion);

  useEffect(() => {
    dispatch(showPromotion());
  }, [dispatch]);

  
  useEffect(() => {
    console.log(promotion.length)
    if (promotion.length > 0) {
      promotion.forEach((promo) => {
        dispatch(getConverionRate(promo.id));
      });
    }
  }, [dispatch, promotion]);

  

  const promotionIds = Object.keys(conversionRate);
  const conversion = Object.values(conversionRate);

  const data = {
    
    labels: promotionIds,
    datasets: [
      {
        label: 'Conversion Rate',
        data: conversion,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],

  };

  const chartSetting = {
    yAxis: [
      {
        label: 'Conversion Rate',
      },
    ],
}

  return (
    <div>

    <BarChart
      width={200}
      height={300}
      series={[
        { data: conversion, id: 'pvId', color: 'rgba(255, 165, 0, 0.8)' },
      ]}
      xAxis={[{ data: promotionIds, scaleType: 'band' }]}
      {...chartSetting}
    />
    </div>
  );
};

export default ConversionRateChart;
