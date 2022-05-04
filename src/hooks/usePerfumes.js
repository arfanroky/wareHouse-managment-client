import { useEffect, useState } from "react"
import Spinner from "../Shared/Spinner/Spinner";

const usePerfumes = () =>{

    const [perfumes, setPerfumes] = useState([]);
    useEffect(() => {
        fetch('https://boiling-thicket-81121.herokuapp.com/perfume')
        .then(res => res.json())
        .then(data => setPerfumes(data));
    }, [])

    return [perfumes, setPerfumes];
}

export default usePerfumes;