import { useEffect } from 'react';


const Users = (props) => {
    useEffect(() => {
        var mainDiv = document.getElementById('mainConent');
        mainDiv.scrollTop = 0;
    }, [])
    return (
                 <h1>Users</h1>
    )
}

export default Users;