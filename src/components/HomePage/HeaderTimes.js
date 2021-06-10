import React, { useState,useEffect } from 'react';

const HeaderTimes = () => {
  let [time, setTime] = useState(new Date())
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         setTime(new Date())
  //         console.log(time);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <div className="header__right-realtime">
    <strong className="header__right-realtime-label">{time.toLocaleTimeString()}</strong>
  </div>
  );
}

export default HeaderTimes;
