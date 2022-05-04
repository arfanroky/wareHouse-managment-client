
import React, { useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification,  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import contactImg from '../../../images/Banner/p-2.webp'
import Spinner from '../../../Shared/Spinner/Spinner';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, verifyerror] = useSendEmailVerification(auth);
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    if(loading || sending){
        return <Spinner></Spinner>
    }

    let errorMessage;

    if(error || verifyerror){
        return errorMessage = error.message || verifyerror.message;
    }
    
    if (user) {
        const url = `http://localhost:5000/login`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.token)
                navigate(from, {replace: true})
            });
    }

    const handleLoginSubmit = async (event) => {

        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password);
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        event.target.reset();
    }


    return (
        <div className="container w-full mx-auto">
            <div className="md:flex w-full
          ml-auto md:justify-around md:items-center h-screen ">
                <div className='w-1/2 mx-auto'>
                    <img src={contactImg} alt="" />
                </div>
                <form onSubmit={handleLoginSubmit} className='w-1/2 flex justify-center items-center flex-col mx-auto '>
                    <div className='w-96 mx-auto border p-4 pb-4'>
                    <h1 className='text-purple-400 my-4 text-4xl font-extrabold text-center'>Register</h1>

                        <div className="relative z-0  mb-6 group">
                            <input ref={nameRef} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                        </div>
                        <div className="relative z-0  mb-6 group">
                            <input ref={emailRef} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 mb-6 group">
                            <input ref={passwordRef} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <input type="submit" value='Register' className='w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' />
                        <p className='text-red-700 font-semibold'>
                                {errorMessage}
                            </p>

                        <p>
                            already have an account? <Link className='text-purple-400 underline' to='/login'>Login</Link>
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