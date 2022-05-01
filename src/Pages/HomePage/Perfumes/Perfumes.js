import React from 'react';
import usePerfumes from '../../../hooks/usePerfumes';
import SinglePerfume from '../SinglePerfume/SinglePerfume';

const Perfumes = () => {

    const [perfumes] = usePerfumes();

    return (
        <div className='container-lg max-w-screen-xl  mx-auto py-8'>
            <h1 className='text-5xl py-4 uppercase text-center text-orange-300'>Perfumes</h1>
            <div className="flex flex-wrap justify-around mt-8 gap-4">

            {
                perfumes.map(perfume => <SinglePerfume
                key={perfume._id}
                perfume={perfume}
                ></SinglePerfume>)
            }

            </div>
        </div>
    );
};

export default Perfumes;