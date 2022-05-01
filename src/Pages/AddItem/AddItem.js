import React, { useRef } from 'react';

const AddItem = () => {
    const nameRef = useRef('')
    const PriceRef = useRef('')


    const handleSubmit = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const price = PriceRef.current.value;

        const url = `http://localhost:5000/addItem`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              name, price
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });

            event.target.reset();

    }

    return (
        <form className='w-1/2 mx-auto border mt-48 p-9' onSubmit={handleSubmit}>
            <input className='border border-rose-300 my-4' ref={nameRef} type="text" name="Name" id="" />
            <br />
            <input className='border border-rose-300 my-4' ref={PriceRef} type="price" name='Price' />
            <br />
            <input className='py-3 px-4 bg-rose-300' type="submit" value="AddItem" />
        </form>
    );
};

export default AddItem;