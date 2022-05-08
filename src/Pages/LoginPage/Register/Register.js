import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Spinner from '../../../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';
import registerImg from '../../../images/Banner/p-2.webp'
import useToken from '../../../hooks/useToken';


const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [token] = useToken(user);


    const navigate = useNavigate();

    if (loading || updating) {
        return <Spinner></Spinner>
    }

    if (error || error1) {
        return toast(error || error1)
    }

    if (token) {
        navigate('/home');
    }

    const navigateLogin = (event) => {
        navigate('/login');
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    };

    return (
        <div className="container mx-auto w-screen h-fit">

            <div className=" w-full h-full md:flex  justify-center items-center md:my-0 my-24">
                <div className='w-1/2 mx-auto md:block hidden'>
                    <img className='w-3/4' src={registerImg} alt="" />
                </div>
            <form onSubmit={handleRegister} className='md:w-1/2 w-full mx-auto'>

                <div className='w-96 mx-auto border p-4 pb-4'>
                    <h1 className='text-purple-400 my-4 text-4xl font-extrabold text-center'>Register</h1>

                    <div className="relative z-0  mb-6 group">
                        <input ref={nameRef} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>
                    <div className="relative z-0  mb-6 group">

                        <input ref={emailRef} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 mb-6 group">
                        <input ref={passwordRef} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <input type="submit" value='Register' className='w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' />
                    <p className='text-gray-600 '>
                        Already have an account?{' '}
                        <Link
                            className="text-pink-400 underline"
                            to="/login"
                            onClick={navigateLogin}
                        >
                            Please Login
                        </Link>
                    </p>

                    <div className=' w-full flex justify-between my-4 items-center'>
                        <div className=' w-1/2 w border border-blue-400'></div>
                        <div className='mx-4'><span className='text-blue-400'>o</span><span className='text-pink-400'>r</span></div>
                        <div className=' w-1/2 border border-pink-400'></div>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>

            </form>
            </div>
        </div>
    );
};

export default Register;
