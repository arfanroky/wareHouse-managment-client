
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        const email = user?.email;
        const getOrders = async () => {
            const url = `http://localhost:5000/item?email=${email}`;

            try {
;
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setItems(data);
                })
            }
            catch (error) {
                console.log(error.message);
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