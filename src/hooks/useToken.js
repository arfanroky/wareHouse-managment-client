import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const loadToken = async () => {
            // console.log(user);
            const email = user?.user?.email;
           if(email){
            const {data} = await axios.post('https://boiling-thicket-81121.herokuapp.com/login', {email});
            setToken(data.token)
        localStorage.setItem('accessToken', data.token)
           }
        }
        loadToken();

    }, [user])
    return [token];
}

export default useToken;