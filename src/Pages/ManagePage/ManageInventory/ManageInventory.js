import React from 'react';
import useDelete from '../../../hooks/useDelete';
import usePerfumes from '../../../hooks/usePerfumes';
import SingleInventory from '../SingleInventory/SingleInventory';

const ManageInventory = () => {
    const [perfumes, setPerfumes] = usePerfumes();
    const {handleDelete} = useDelete();

    /* const handleDelete = (id) => {
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
    } */

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
                        handleDelete={handleDelete}
                    ></SingleInventory>)
                }

            </div>
        </div>
    );
};

export default ManageInventory;