import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <nav className="
        relative
        w-full
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
        
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6 ">
        <button className="
            navbar-toggler
            text-cyan-500
            hover:shadow-none hover:no-underline
            py-0
            px-2.5
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline ml-auto
          " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon className=' text-2xl border-2 border-cyan-500 px-2 py-1' icon={faNavicon}></FontAwesomeIcon>
        </button>
        
        <div className="collapse navbar-collapse flex-grow items-center " 
        id="navbarSupportedContent">
        <Link className="
              flex
              items-center
              text-gray-900
              hover:text-gray-900
              focus:text-gray-900
              font-bold
              mt-2
              lg:mt-0
              md:my-0 my-2
              mr-1
            " to="/">
          PERFUME-STORE
        </Link>

        <ul className="navbar-nav flex flex-col pl-0 list-style-none ml-auto">
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/">Home</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/">Perfumes</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/">Manage Perfume</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/manage-inventory">ManageInventory</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/">Blog</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/login">Login</Link>
          </li>
       
        </ul>

        </div>

      
      
        </div>
        
      </nav>
    );
};

export default NavMenu;