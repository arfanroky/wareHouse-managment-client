import React, { useState } from 'react';
import usePerfumes from '../../../hooks/usePerfumes';
import SinglePerfume from '../SinglePerfume/SinglePerfume';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../../Shared/Spinner/Spinner';
import { Link } from 'react-router-dom';



const Perfumes = () => {
    const [user, loading, error] = useAuthState(auth);

    const [perfumes, setPerfumes] = usePerfumes();
    const sixItem = perfumes.slice(0, 6);

    if (loading) {
        return <Spinner></Spinner>
    }

    const handleDelete = (id) => {
        const confirmation = window.confirm('Are Your Sure You Want To Delete ?')
        if (confirmation) {
            const perfumeDelete = perfumes.filter(p => p._id !== id);
            const url = `https://boiling-thicket-81121.herokuapp.com/perfume/${id}`
            fetch(url, {
                method: 'DELETE',
                body: JSON.stringify({perfumeDelete})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setPerfumes(data)
            })
        }
    }

    return (
        <div className='container-lg max-w-screen-xl  mx-auto py-8'>
            <h1 className='text-5xl py-4 uppercase text-center text-orange-300'>Perfumes</h1>
            <div className="flex flex-wrap justify-around mt-8 gap-4">

                {
                    sixItem.map(perfume => <SinglePerfume
                        key={perfume._id}
                        perfume={perfume}
                        handleDelete={handleDelete}
                    ></SinglePerfume>)
                }

            </div>
            <div className="text-center">
                <Link to='/manage-inventory'><button className='py-4 text-lg px-6 bg-sky-400 font-medium text-center text-white my-4 rounded'>Manage All Inventory</button></Link>
            </div>
        </div>
    );
};

export default Perfumes;