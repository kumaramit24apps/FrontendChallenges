import React from 'react';
import PlaneIcon from '../../../src/assets/icons/plane.svg';

const CTAButton = () => {
  return (
    <>
      <button className="space-between group  relative flex items-center overflow-hidden rounded-full bg-gradient-to-b from-blue-500 to-blue-700 px-8 py-2.5 text-base  font-semibold  text-white  duration-300 ease-out focus:ring focus:ring-blue-300 focus:ring-offset-2 ">
        <span className="-z-1 absolute bottom-0 left-0 right-0 top-0 origin-center translate-y-full scale-0 rounded-full bg-gradient-to-b from-orange-400 to-orange-700 opacity-0 transition-all duration-100 ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 "></span>
        <span className="z-10 mr-4">Start a Project</span>
        <img className="z-10" src={PlaneIcon} alt="" />
      </button>
    </>
  );
};
export default CTAButton;
