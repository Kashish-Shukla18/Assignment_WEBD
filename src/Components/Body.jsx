import React from 'react';
import Slider from './Slider';

const Body = () => {
    const slides = [
        "src/Components/img/1.jpg",
        "src/Components/img/2.jpg",
        "src/Components/img/3.jpg",
        "src/Components/img/4.jpg",
    ];
    return (
        <>
        <Slider slides={slides} />
            <div className="container mx-auto mt-12 w-[95vw">
                <h1 className='text-lg text-center'>Top Students</h1>
                <div className='pt-4 p-4' >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        <div className="bg-gray-100  flex items-center justify-center">
                            <div className='flex flex-col'>
                                <img src='src/Components/img/5.jpg' alt='Student' className='h-9/10 w-full object-cover' />
                                <div className='flex flex-col p-2 bg-gray-200 '>
                                    <p className='font-bold'>Amit Jha</p>
                                    <p>Some Review Submitted by the user to the company</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100  flex items-center justify-center">
                            <div className='flex flex-col'>
                                <img src='src/Components/img/5.jpg' alt='Student' className='h-9/10 w-full object-cover' />
                                <div className='flex flex-col p-2 bg-gray-200 '>
                                    <p className='font-bold'>Amit Jha</p>
                                    <p>Some Review Submitted by the user to the company</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100  flex items-center justify-center">
                            <div className='flex flex-col'>
                                <img src='src/Components/img/5.jpg' alt='Student' className='h-9/10 w-full object-cover' />
                                <div className='flex flex-col p-2 bg-gray-200 '>
                                    <p className='font-bold'>Amit Jha</p>
                                    <p>Some Review Submitted by the user to the company</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100  flex items-center justify-center">
                            <div className='flex flex-col'>
                                <img src='src/Components/img/5.jpg' alt='Student' className='h-9/10 w-full object-cover' />
                                <div className='flex flex-col p-2 bg-gray-200 '>
                                    <p className='font-bold'>Amit Jha</p>
                                    <p>Some Review Submitted by the user to the company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-lg text-center mt-12'>Reviews</h1>
                <div className='flex flex-wrap justify-center p-4'>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
                        <div className='bg-gray-100  p-4'>
                            <p className='font-bold'>Amit Jha</p>
                            <hr className="my-2" />
                            <p>Some Review Submitted by the user to the company</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
                        <div className='bg-gray-100  p-4'>
                            <p className='font-bold'>Amit Jha</p>
                            <hr className="my-2" />
                            <p>Some Review Submitted by the user to the company</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
                        <div className='bg-gray-100  p-4'>
                            <p className='font-bold'>Amit Jha</p>
                            <hr className="my-2" />
                            <p>Some Review Submitted by the user to the company</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
                        <div className='bg-gray-100  p-4'>
                            <p className='font-bold'>Amit Jha</p>
                            <hr className="my-2" />
                            <p>Some Review Submitted by the user to the company</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
                        <div className='bg-gray-100  p-4'>
                            <p className='font-bold'>Amit Jha</p>
                            <hr className="my-2" />
                            <p>Some Review Submitted by the user to the company</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-black flex flex-col md:flex-row justify-between h-auto md:h-[30vh] p-6">
        <div className="text-white p-4 md:h-full">
          <p>KARO ABHAYAAS</p>
          <p>112, ELECTRONIC CITY</p>
          <p>BANGALORE, INDIA</p>
        </div>
        <div className="text-white p-4 md:h-full md:m-4">
          <p>SOME TEXT ABOUT SOMETHING</p>
          <p>AND THEN SOME OTHER THIND</p>
          <div className="flex">
            <button className="bg-white text-black m-2 p-2">CONTACT US</button>
            <button className="bg-white text-black m-2 p-2">CONTACT US</button>
          </div>
        </div>
      </footer>

        </>
    );
};

export default Body;
