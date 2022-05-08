import React from 'react';
import {faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleItem = ({getPerfume, handleDelete}) => {
    const {name, img , price, quantity, company, _id} = getPerfume;
    return (
        <div className=' rounded p-2 md:w-1/2  md:mx-auto mx-8 transform scale-110 transition-transform flex justify-between items-center hover:bg-gradient-to-tl from-pink-500 to-white hover:scale-100 border border-pink-500'>
            <div className='flex gap-2'>
                <img className='w-20 h-20' src={img} alt="" />
                <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p className='text-gray-500'><span className='font-bold'>Company: </span>{company}</p>
                    <p className='text-gray-500'><span className='font-bold'>Price: </span>{price}</p>
                    <p className='text-gray-500'><span className='font-bold'>Price: </span>{quantity}</p>
                </div>
            </div>
            <div className=''>
                <button 
                onClick={() => handleDelete(_id)}
                 className='text-pink-400 w-12 h-12 rounded-full bg-white outline-none border border-pink-400'>
                <FontAwesomeIcon className='w-6
                 h-6 p-2' icon={faTrashCan}>
        </FontAwesomeIcon>
                </button>

            </div>
            
        </div>
    );
};

export default SingleItem;