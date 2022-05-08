import usePerfumes from "./usePerfumes"

const useDelete = () => {
    const [perfumes, setPerfumes] = usePerfumes();
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are Your Sure You Want To Delete ?')
        if (confirmation) {
            const url = `https://boiling-thicket-81121.herokuapp.com/perfume/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    const perfumeDelete = perfumes.filter(p => p._id !== id);
                    setPerfumes(perfumeDelete)
                }
            })
        }
    }
    return {handleDelete};
}

export default useDelete;