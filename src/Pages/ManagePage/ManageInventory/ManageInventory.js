import React from 'react';
import usePerfumes from '../../../hooks/usePerfumes';
import SingleInventory from '../SingleInventory/SingleInventory';

const ManageInventory = () => {
    const [perfumes] = usePerfumes();



    return (
        <div className='container-lg max-w-screen-xl  mx-auto py-8'>
            <h1 className='text-5xl py-4 uppercase text-center text-orange-300'>
                ManageInventory
            </h1>
            <div className="flex flex-wrap justify-around mt-8 gap-4">

                {
                    perfumes.map(perfume => <SingleInventory
                        key={perfume._id}
                        perfume={perfume}
                    ></SingleInventory>)
                }

            </div>
        </div>
    );
};

export default ManageInventory;