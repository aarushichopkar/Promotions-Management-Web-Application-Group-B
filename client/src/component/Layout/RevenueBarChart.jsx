import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getRevenueByPromotionId, showPromotion } from '../../Store/promotionSlice';

const RevenueBarChart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // Log the state to debug
  console.log('Complete state:', state);

  const { promotion, promotionRevenues } = useSelector((state) => state.userPromotion);

  useEffect(() => {
    dispatch(showPromotion());
  }, [dispatch]);

  useEffect(() => {
    if (promotion.length > 0) {
      promotion.forEach((promo) => {
        dispatch(getRevenueByPromotionId(promo.id));
      });
    }
  }, [dispatch, promotion]);

  const data = {
    labels: promotion.map((promo) => promo.promotionType),
    datasets: [
      {
        label: 'Revenue',
        data: promotion.map((promo) => promotionRevenues[promo.id] || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Revenue by Promotion</h2>
      <Bar data={data} />
    </div>
  );
};

export default RevenueBarChart;
