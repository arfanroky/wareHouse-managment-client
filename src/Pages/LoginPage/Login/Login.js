import React, { useRef } from 'react';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../../Shared/Spinner/Spinner';
import loginImg from '../../../images/Banner/p-3.webp';
import axios from 'axios';



const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, sendError] = useSendPasswordResetEmail(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  //   const [token] = useToken(user);
  if (loading || sending) {
    return <Spinner></Spinner>
  }

  if (error || sendError) {
    return toast(error)
  }

  if (user) {
    // navigate(from, { replace: true });
  }
  else {
    navigate('/home')
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);

    const {data} = await axios.post('https://boiling-thicket-81121.herokuapp.com/login', {email})
    localStorage.setItem('accessToken', data.token)
    navigate(from, { replace: true });
  };

  const navigateRegister = (event) => {
    navigate('/register');
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast('send email');
    }
    else {
      toast('please enter your email ')
    }
  };

  return (
    <div className="container mx-auto w-screen h-fit">
      <div className="w-full h-full md:flex justify-around items-center md:my-0 my-24">
      <div className='md:block hidden w-1/2'>
          <img className='w-3/4' src={loginImg} alt="" />
        </div>
      <form onSubmit={handleSubmit} className='md:w-1/2 w-full mx-auto'>

        <div className='w-96  mx-auto border p-4 pb-4'>
          <h1 className='text-purple-400 my-4 text-4xl font-extrabold text-center'>Login</h1>
          <div className="relative z-0  mb-6 group">
            <input ref={emailRef} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div className="relative z-0 mb-6 group">
            <input ref={passwordRef} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
          <input type="submit" value='Login' className='w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' />

          <p className='text-gray-600 my-3'>
            New Here?   <Link
              className="text-pink-400 underline"
              to="/register"
              onClick={navigateRegister}
            >
              Please Register
            </Link>
          </p>
          <p className='text-gray-600'>
            Forgot password? <button
              className="text-pink-400 underline"
              onClick={resetPassword}
            >
              Reset Password
            </button>
          </p>

          <div className=' w-full flex justify-between my-4 items-center'>
            <div className=' w-1/2 w border border-blue-400'></div>
            <div className='mx-4'><span className='text-blue-400'>o</span><span className='text-pink-400'>r</span></div>
            <div className=' w-1/2 border border-pink-400'></div>
          </div>
          <SocialLogin></SocialLogin>
          <ToastContainer />
        </div>

      </form>
      </div>
    </div>
  );
};

export default Login;
