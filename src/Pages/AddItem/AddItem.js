import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
    const nameRef = useRef('')
    const priceRef = useRef('')
    const imgRef = useRef('')
    const quantityRef = useRef('')
    const descriptionRef = useRef('')
    const companyRef = useRef('');
    const [user, loading, error] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const company = companyRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;
        const quantity = quantityRef.current.value;

        const item = {name, price, company, description, img, quantity}

        const url = `http://localhost:5000/addItem`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'authorization': `${user?.email} ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
              toast(data.success)
                console.log(data);
            });

            event.target.reset();
    }

    return (
       <div className='w-1/2 mx-auto mt-12'>
  <form onSubmit={handleSubmit} className=' my-4'>
               
<div className="flex justify-center">
  <ToastContainer></ToastContainer>
  <div className="mb-3 xl:w-96">
    <input
      type="url"
      ref={imgRef}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Photo URL"
    />
  </div>
</div>

<div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <input
      ref={nameRef}
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Name"
    //   ref={nameRef}
    />
  </div>
</div>

<div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <input
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Company"
      ref={companyRef}
    />
  </div>
</div>

<div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <input
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Quantity"
      ref={quantityRef}
    />
  </div>
</div>

<div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <input
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Description"
      ref={descriptionRef}
    />
  </div>
</div>

<div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <input
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Price"
      ref={priceRef}
    />
  </div>
</div>

<div className="flex justify-center">
  <div className="mb-3 xl:w-96">
  <input className='inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out' type="submit" value="Add Item" />
  </div>
</div>


  </form>
       </div>
    );
};

export default AddItem;