import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const UpdatePerfume = () => {
    const {id} = useParams();
    const [perfumes, setPerfumes] = useState();
    const [delivered, setDelivered] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/perfume/${id}`)
        .then(res => res.json())
        .then(data => {
            setPerfumes(data)
            setDelivered(data.quantity)
        })
    }, []);


    const updateDelivery = e => {
        e.preventDefault();
        const quantity = parseInt(delivered) - 1;

        const url = `http://localhost:5000/perfume/${id}`;
        fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(quantity)
        })
        .then(res => res.json())
        .then(data => {
            setDelivered(parseInt(quantity) - 1)
            console.log("updated", data);
        })

    }

    


    return (
        <div className='container mx-auto w-screen min-h-screen py-8'>
          <div className="w-full md:flex md:justify-evenly mx-auto md:items-center">

          <div className='md:w-1/2 md:mb-0 mb-4'>
                <img className='text-center' src={perfumes?.img} alt="" />
            </div>

            <div className='md:w-1/2 w-full mx-auto md:px-2 px-4'>
                <h2 className='text-5xl font-bold text-gray-300 my-3'>{perfumes?.name}</h2>
                <p className='mb-2'><span className='font-semibold text-pink-400'>Company: </span>{perfumes?.company}</p>
                <p className='mb-2'>
                <span className='font-semibold text-sky-400'>Quantity: </span>{delivered}
                </p>
                <p className='mb-2'><span className='font-semibold text-pink-400'>Availability: </span>{perfumes?.availability}</p>
                <p className='mb-2'><span className='font-semibold text-sky-400'>Price: </span>{perfumes?.price}</p>
                <p><span className='font-semibold text-sky-400'></span>{perfumes?.description}</p>
                <br />

                <div className='md:flex justify-between items-center  text-center gap-x-4'>
                    <button 
                    onClick={updateDelivery}
                    
                    className='md:w-auto w-full py-3 px-8 md:my-0 my-3 bg-rose-400 rounded text-white' >Delivered</button>

                    <div className='flex justify-between items-center border rounded border-purple-300'>
                        <input className='py-3 pl-2 outline-none border-0 h-full' type="number" name="number"/>
                        <button className='py-3 px-4 bg-purple-400 text-white'>UpdateQuantity</button>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
    );
};

export default UpdatePerfume;