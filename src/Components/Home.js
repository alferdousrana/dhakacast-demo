import React from 'react';
import HeaderSlider from './HomeComponents/HeaderSlider';
import Activities from './HomeComponents/Activities';
import Research from './HomeComponents/Research';
import AboutDhakaCast from './HomeComponents/AboutDhakaCast';
import Statistic from './HomeComponents/Statistic';
import Services from './HomeComponents/Services';
import Achivement from './HomeComponents/Achivement';
import Review from './HomeComponents/Review';
import Partners from './HomeComponents/Partners';

export default function Home() {
  return (
    <div className="home-page">
      <HeaderSlider />
      <Activities />
      {/* <Research /> */}
      <AboutDhakaCast />
      <Statistic />
      <Services />
      <Achivement />
      <Review />
      <Partners />
    </div>
  )
}
