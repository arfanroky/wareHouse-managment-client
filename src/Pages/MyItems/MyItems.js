
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(items);

    useEffect(() => {
        const email = user?.email;
        const getOrders = async () => {
            const url = `http://localhost:5000/item?email=${email}`;

            try {
                // const { data } = await axiosPrivate.get(url);
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setItems(data);
                })
            }
            catch (error) {
                console.log(error.message);
                // if (error.response.status === 401 || error.response.status === 403) {
                //     signOut(auth);
                //     navigate('/login')
                // }
            }

        }

        getOrders();
    }, [user])


    return (
        <div>
            {items?.length}
        </div>
    );
};

export default MyItems;