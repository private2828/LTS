import React from 'react';

import Services from '../../components/Services/Services';

import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

import Testimonials from '../../components/Testimonials/Testimonials';
import Shippers  from '../../components/Shippers/Shippers';
import ContactUs from '../ContactUs/ContactUs';
import Screenshot from '../../components/Screenshot/Screenshot';
import WhatWeOffer from '../../components/WhatWeOffer/WhatWeOffer';


const Home = () => {
  return (
    <div>
     
      <Hero />
      <WhatWeOffer/>
      

      
      <Screenshot/>
      <Shippers/>
      <Testimonials />
      
      
      <Footer/>
    </div>
  );
};

export default Home;
