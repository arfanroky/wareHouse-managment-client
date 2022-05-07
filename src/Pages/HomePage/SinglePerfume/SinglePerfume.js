import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import usePerfumes from '../../../hooks/usePerfumes';

const SinglePerfume = ({perfume}) => {
    const {name, img, company, description, quantity, _id} = perfume;
    const desc = description?.slice(0, 100);


    return (
        <div className='border w-96 bg-gray-50 hover:scale-95 transition-all relative' style={{height:'500px'}}>
            
                <img src={img} className='w-2/4 h-1/2 text-center mx-auto ' alt="" />
            
            <div className='pl-4 pb-4'>
                <h2 className='text-3xl font-bold text-gray-500'>
                    {name}
                </h2>
                <p className='my-2'><span className='font-semibold text-xl text-pink-300'>Company: </span>  {company}</p>
                <p className='my-2'><span className='font-semibold text-xl text-orange-300'>Quantity: </span>{quantity}</p>
                <p className='text-md pr-2 text-justify pb-2'>{desc}</p>

                <Link to={`/update-perfume/${_id}`}><button className='absolute bottom-0 left-0 w-full py-3 bg-pink-300 text-white rounded text-lg font-semibold'>Manage Stock</button></Link>
            </div>
            
        </div>
    );
};

export default SinglePerfume;