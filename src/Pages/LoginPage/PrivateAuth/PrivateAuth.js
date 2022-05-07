import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../../Shared/Spinner/Spinner';

const PrivateAuth = ({children}) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading || sending){
        return <Spinner/>
    }
    if(error){
      return toast(error)
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }

    if(user.providerData[0]?.providerId === 'password' &&!user.emailVerified){
        return <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{height:'100vh'}}>
            <h3 className='text-pink'>Your Email is not verified</h3>
            <h5 className='text-success'>You Should verify your email</h5>
            <button
            className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Send verification
      </button>
      <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default PrivateAuth;