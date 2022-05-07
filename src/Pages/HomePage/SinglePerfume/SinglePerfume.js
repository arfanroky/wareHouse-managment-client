import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import usePerfumes from '../../../hooks/usePerfumes';

const SinglePerfume = ({perfume, handleDelete}) => {
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

                <div className='absolute bottom-0 left-0 w-full border rounded text-lg font-semibold flex justify-around items-center gap-x-3'>
                <button className='w-1/2 bg-red-300 py-3 text-white text-center rounded'>
                <Link to={`/update-perfume/${_id}`}>Manage Stock</Link>
                </button>
                <button onClick={() => handleDelete(_id)} className='w-1/2 bg-black text-white py-3 rounded'>Delete</button>
                </div>
            </div>
            
        </div>
    );
};

export default SinglePerfume;