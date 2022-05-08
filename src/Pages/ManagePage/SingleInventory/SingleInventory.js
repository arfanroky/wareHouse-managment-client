import React from 'react'
import { Link } from 'react-router-dom';

const SingleInventory = ({perfume, handleDelete}) => {
    const {_id, name, img, description, price, company, quantity} = perfume;

    const desc = description?.slice(0, 120);

  return (
    <>

<div className='border w-96 bg-gray-50  relative rounded gap-4' style={{height:'600px'}} >
            
                <img  src={img} className='w-2/4 h-1/2 text-center mx-auto hover:scale-110 hover:skew-x-2 transition-all' alt="" />
            
            <div className='pl-4 pb-4'>
                <h2 className='text-3xl font-bold text-gray-500 mt-4'>
                    {name}
                </h2>
                <p className='my-2'><span className='font-bold '>Company: </span>  {company}</p>
                <p className='my-2'><span className='font-bold'>Quantity: </span>{quantity}</p>
                <p className='text-sm pr-2 text-justify pb-2'>{desc}</p>
                <p className='my-2'><span className='font-bold'>Price: </span>{price}</p>
                
                <div className='absolute bottom-0 left-0 w-full border rounded text-lg font-semibold flex justify-around items-center gap-x-3'>
                <button className='w-1/2 py-3 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'>
                <Link to={`/update-perfume/${_id}`}>Manage Stock</Link>
                </button>
                <button onClick={() => handleDelete(_id)} className='w-1/2 py-3 bg-rose-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-600 hover:shadow-lg focus:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-700 active:shadow-lg transition duration-150 ease-in-out'>Delete</button>
                </div>
            </div>
            
        </div>


    </>
  )
}

export default SingleInventory