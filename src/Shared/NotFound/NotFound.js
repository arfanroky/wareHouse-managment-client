import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className='container w-screen mt-20 mx-auto'>
            <div className='flex justify-around items-center  h-full'>
                <div>
                    <h1 className='text-9xl font-extrabold text-center mb-8'><span className='text-purple-400'>4</span><span className='text-pink-400'>0</span><span className='text-orange-400'>4</span></h1>
                    <h2 className='text-3xl mb-8 text-gray-400'>This Page isn't Available</h2>
                    <button className='w-full text-white bg-gradient-to-br from-sky-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                        <Link to='/'>
                            Back To Home
                        </Link>
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default NotFound;