import NotFound from '@/static/icons/not-found.svg?react';

import style from './error.module.scss';

const Error = ({ error }) => {
  const { code, message } = error || {};

  return (
    <div className={style.error}>
      <div className={style.error_basic}>
        <div className={style.error_basic__row}>
          <h1 className={style.error_temperature}>{code}°</h1>
          <div className={style.error_conditionIcon}>
            <NotFound />
          </div>
        </div>
        <h3 className={style.error_name}>Oh no. Error</h3>
        <p className={style.error_details}>{message}</p>
      </div>
    </div>
  );
};

export default Error;
