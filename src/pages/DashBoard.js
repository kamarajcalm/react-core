import { useEffect } from 'react';


const DashBoard = (props) => {
    useEffect(() => {
        var mainDiv = document.getElementById('mainConent');
        mainDiv.scrollTop = 0;
    }, [])
    return (
        <h1>Dash board</h1>
    )
}

export default DashBoard;