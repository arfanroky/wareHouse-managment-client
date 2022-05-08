import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleItem from '../SingleItem/SingleItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [uploadPerfume, setUploadPerfume] = useState([]);


    const handleDelete = (id) => {
        const confirmation = window.confirm('Are Your Sure You Want To Delete ?')
        if (confirmation) {
            const url = `https://boiling-thicket-81121.herokuapp.com/uploadPerfume/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const perfumeDelete = uploadPerfume.filter(p => p._id !== id);
                        console.log(perfumeDelete);
                        setUploadPerfume(perfumeDelete)
                    }
                })
        }
    }


    useEffect(() => {
        const email = user?.email;
        const url2 = `https://boiling-thicket-81121.herokuapp.com/uploadPerfume?email=${email}`

        try {
            fetch(url2)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUploadPerfume(data)
                })
        }
        catch (error) {
            console.log(error);
        }

    }, [user])


    return (
        <div className='container mx-auto min-h-screen px-4'>
            <h1 className='text-center my-8 text-5xl font-bold text-gray-400'>You Have Added </h1>
            {uploadPerfume.map(getPerfume => <SingleItem key={getPerfume._id}
                getPerfume={getPerfume}
                handleDelete={handleDelete}
            ></SingleItem>)}
        </div>
    );
};

export default MyItems;
