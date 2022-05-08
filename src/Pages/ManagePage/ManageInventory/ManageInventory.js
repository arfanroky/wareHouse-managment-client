import React from 'react';
import { Link } from 'react-router-dom';
import usePerfumes from '../../../hooks/usePerfumes';
import SingleInventory from '../SingleInventory/SingleInventory';

const ManageInventory = () => {
    const [perfumes, setPerfumes] = usePerfumes();


    const handleDelete = (id) => {
        const confirmation = window.confirm('Are Your Sure You Want To Delete ?')
        if (confirmation) {
            const url = `https://boiling-thicket-81121.herokuapp.com/perfume/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    const perfumeDelete = perfumes.filter(p => p._id !== id);
                    console.log(perfumeDelete);
                    setPerfumes(perfumeDelete)
                }
            })
        }
    }

    return (
        <div className='container-lg max-w-screen-xl  mx-auto py-8'>
            <div className='flex justify-between items-center px-4'>
            <h1 className='text-4xl font-bold l py-4 uppercase text-center text-orange-300'>
                Inventories
            </h1>
            <button className='inline-block px-6 py-4 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'><Link to='/addItem'>Add New Item</Link></button>
            </div>
            <div className="flex flex-wrap justify-around mt-8 gap-4">

                {
                    perfumes.map(perfume => <SingleInventory
                        key={perfume._id}
                        perfume={perfume}
                        handleDelete={handleDelete}
                    ></SingleInventory>)
                }

            </div>
        </div>
    );
};

export default ManageInventory;