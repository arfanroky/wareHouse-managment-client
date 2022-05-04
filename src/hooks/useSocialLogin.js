import { useSendEmailVerification, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useSocialLogin = () => {
    const [sendEmailVerification, sending, verifyerror] = useSendEmailVerification(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const googleSignIn = async (event) => {
        signInWithGoogle();
        sendEmailVerification();
    }

    return [googleSignIn];
}

export default useSocialLogin;