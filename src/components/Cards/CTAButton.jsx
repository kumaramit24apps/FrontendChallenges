import React from 'react';
import PlaneIcon from '../../../src/assets/icons/plane.svg';

const CTAButton = () => {
  return (
    <>
      <button className=" space-between relative flex items-center overflow-hidden rounded-full bg-gradient-to-b from-blue-500 to-blue-700 px-8 py-2.5 text-base font-semibold  text-white  ring-blue-100  ring-offset-2 transition-all duration-150 ease-in-out after:absolute after:left-0 after:top-0 after:z-10 after:block after:h-full after:w-full after:scale-0 after:bg-gradient-to-b after:opacity-0 after:transition-all after:content-[''] hover:after:translate-y-0 after:hover:scale-100 hover:after:from-orange-300 hover:after:to-orange-600 hover:after:opacity-100 focus:ring after:focus:opacity-100">
        <span className="z-20 mr-4">Start a Project</span>
        <img className="z-20" src={PlaneIcon} alt="" />
      </button>
    </>
  );
};
export default CTAButton;
