import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';


const BrandWithLogin = () => {

    const [user] = useAuthState(auth);

    return (
        <>
        <div className='container mx-auto w-full flex justify-between items-center flex-wrap my-2  px-6 '>
        <div>
        <p className='font-bold uppercase text-pink-400'>
            <Link to='/'>Perfume-Stores</Link>
          </p>
        </div>
        <div className=' flex items-center'>
        <div className="font-bold border border-gray-400 text-gray-600 py-1 px-4 mx-4 rounded">
             {
                 user ? user.displayName : 'User'
             }
            </div>
      <p>
                
        {
            user ? 
              <button className='py-2 px-4 bg-green-400 text-white rounded  mx-2' onClick={() => signOut(auth)}>Log Out</button>
            : <Link className='py-2 px-4 bg-black text-white rounded' to="/login">Login</Link>

          }
      </p>

      </div>
        </div>
        
        </>
          

    );
};

export default BrandWithLogin;