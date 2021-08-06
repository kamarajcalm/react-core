import { useEffect } from 'react';


const Ranks = (props) => {
    useEffect(() => {
        var mainDiv = document.getElementById('mainConent');
        mainDiv.scrollTop = 0;
    }, [])
    return (
             <h1>Ranks</h1>
    )
}

export default Ranks;