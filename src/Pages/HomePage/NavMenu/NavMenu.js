import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import BrandWithLogin from '../../BrandWithLogin/BrandWithLogin';



const NavMenu = () => {
  const [user] = useAuthState(auth);

  return (
 <>
 <BrandWithLogin></BrandWithLogin>
    <nav className="
        relative
        w-screen
        flex flex-wrap
        items-center
        justify-between
        py-4
        bg-gray-100
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
        ">

      <div className="container mx-auto w-full flex flex-wrap items-center justify-between px-6 ">
        <button className="
            navbar-toggler
            text-gray-500
            hover:shadow-none hover:no-underline
            py-0
            px-2.5
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline ml-auto
          " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon className=' text-2xl border-2 border-gray-500 px-2 py-1' icon={faNavicon}></FontAwesomeIcon>
    
        </button>

        <div className="collapse navbar-collapse flex flex-wrap ml-auto"
          id="navbarSupportedContent">

       <ul className="navbar-nav flex flex-col list-style-none ">
           <li className="nav-item p-2">
              <Link className="nav-link text-gray-500 hover:text-pink-700 focus:text-gray-700 p-0" to="/">Home</Link>
            </li>
            
             <li className="nav-item p-2 ">
                <Link className="nav-link text-gray-500 hover:text-pink-700 focus:text-gray-700 p-0" to="/manage-inventory">ManageInventory</Link>
              </li>

            {
              user && <li className="nav-item p-2">
                <Link className="nav-link text-gray-500 hover:text-pink-700 focus:text-gray-700 p-0" to="/myItems">My Items</Link>
              </li>
            }

            {
              user && <li className="nav-item p-2">
                <Link className="nav-link text-gray-500 hover:text-pink-700 focus:text-gray-700 p-0" to="/addItem">Add Item</Link>
              </li>
            }

            <li className="nav-item p-2">
              <Link className="nav-link text-gray-500 hover:text-pink-700 focus:text-gray-700 p-0" to="/blog">Blog</Link>
            </li>
         
          </ul>
        </div>

      </div>

    </nav>
 </>
  );
};

export default NavMenu;