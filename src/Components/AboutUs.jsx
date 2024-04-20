import React from "react";
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 w-full sm:w-3/5">
      <div className="flex flex-col">
        {/* Section 1 */}
        <div className="flex flex-col sm:flex-row p-4">
          <div className="flex justify-center items-center bg-gray-100 p-4 sm:w-1/2">
            <img src={img1} alt="Image 1" className="w-full sm:w-auto" />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col sm:flex-row-reverse p-4">
          <div className="flex justify-center items-center bg-gray-100 p-4 sm:w-1/2">
            <img src={img2} alt="Image 2" className="w-full sm:w-auto" />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        
        {/* Section 3 */}
        <div className="flex flex-col sm:flex-row p-4">
          <div className="flex justify-center items-center bg-gray-100 p-4 sm:w-1/2">
            <img src={img3} alt="Image 3" className="w-full sm:w-auto" />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
