import React from 'react';
import dayjs from 'dayjs';

import { useWeatherContext } from '@/providers/WeatherContext';

import ConditionIcon from '@/components/condition-icon/ConditionIcon';

import style from './location.module.scss';

const DAY = 'day';
const NIGHT = 'night';

const Location = () => {
  const {
    current: { current, location, forecast },
  } = useWeatherContext();

  console.log('Forecast: ', forecast);

  // const currentForecast = forecast?.find((day) =>
  //   dayjs(day?.data).isSame(dayjs()),
  // );

  // console.log('Current forecast: ', currentForecast);

  const { condition, temp_c, is_day } = current || {};
  const { name, localtime } = location || {};
  const datetime = dayjs(localtime).format('ddd D, H:mm');

  return (
    <div className={style.location}>
      <div className={style.location_basic}>
        <div className={style.location_basic__row}>
          <h1 className={style.location_temperature}>
            {parseInt(temp_c).toFixed(0)}°
          </h1>
          <div className={style.location_conditionIcon}>
            <ConditionIcon code={condition?.code} time={is_day ? DAY : NIGHT} />
          </div>
        </div>
        <h3 className={style.location_name}>{name}</h3>
        <p className={style.location_details}>
          {datetime} | {condition?.text}
        </p>
      </div>
    </div>
  );
};

export default Location;
