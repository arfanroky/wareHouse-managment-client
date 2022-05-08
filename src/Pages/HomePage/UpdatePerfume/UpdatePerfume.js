import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdatePerfume = () => {
    const {id} = useParams();
    const [perfumes, setPerfumes] = useState();
    const [delivered, setDelivered] = useState();

    useEffect(() => {
        fetch(`https://boiling-thicket-81121.herokuapp.com/perfume/${id}`)
        .then(res => res.json())
        .then(data => {
            setPerfumes(data)
            setDelivered(data.quantity)
        })
    }, [id]);


    const updateDelivery = e => {
        const quantity = parseInt(delivered);

        const url = `https://boiling-thicket-81121.herokuapp.com/perfume/${id}`;
        fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({quantity})
        })
        .then(res => res.json())
        .then(data => {
            if(quantity > 0){
                setDelivered(parseInt(quantity) - 1)
                console.log("updated", data);
            }
        })
    }


    const quantityRef = useRef('');
    const quantityIncrease = (e) => {
        const quantityText = quantityRef.current.value;
        const quantityNumber = Number(quantityText)
        const deliveredNumber = Number(delivered);


         if(quantityNumber > 0){
            const result= quantityNumber + deliveredNumber;
            setDelivered(result);
         }
        
    }


    


    return (
        <div className='container mx-auto w-screen min-h-screen py-8'>
          <div className="w-full md:flex md:justify-evenly mx-auto md:items-center">

          <div className='md:w-1/2 md:mb-0 mb-4'>
                <img className='text-center' src={perfumes?.img} alt="" />
            </div>

            <div className='md:w-1/2 w-full mx-auto md:px-2 px-4'>
                <h2 className='text-5xl font-bold text-gray-300 my-3'>{perfumes?.name}</h2>
                <p className='mb-2'><span className='font-bold '>Company: </span>{perfumes?.company}</p>
                <p className='mb-2'>
                <span className='font-bold'>Quantity: </span>{(delivered && delivered > 0) ? delivered : 'sold out' }
                </p>
                <p className='mb-2'><span className='font-bold'>Price: </span>{perfumes?.price}</p>
                <p>{perfumes?.description}</p>
                <br />

                <div className='md:flex justify-between items-center  text-center gap-x-4'>
                    <button 
                    onClick={updateDelivery}
                    
                    className='md:w-auto w-full py-3 px-8 md:my-0 my-3 bg-rose-400 rounded text-white' >Delivered</button>

                    <div className='flex justify-between items-center border rounded border-purple-300'>
                        <input 
                        ref={quantityRef}
                         className='py-3 pl-2 outline-none border-0 h-full' type="number" name="number"/>
                        <button 
                        onClick={quantityIncrease}
                         className='py-3 px-4 bg-purple-400 text-white'>UpdateQuantity</button>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
    );
};

export default UpdatePerfume;