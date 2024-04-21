import React from 'react';
// woman image 
import WomanImg from '../img/woman_hero.png'
// link 
import { Link } from 'react-router-dom';

const Hero = () => {
  return <div className='h-[800px] bg-hero bg-cover bg-no-repeat bg-center py-24'>
    <div className='container mx-auto flex justify-around'>
      {/* text  */}
      <div className='flex flex-col py-[80px]'>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trand
        </div>
        <h1 className='flex flex-col text-[70px] leading-[1.1] font-light mb-4'>NEW WESTENDSTYLISH

        <span className='font-semibold'>Woman</span>
        <span  className='font-semibold'>Man</span>
        </h1>

        <Link to={'/'}
        className='self-start uppercase font-semibold border-b-2 border-primary'
        >
          Discover More
        </Link>

      </div>
      {/* image  */}
      <div className='hidden lg:block'>
        <img src={WomanImg}/>
      </div>
    </div>

  </div>;
};

export default Hero;
