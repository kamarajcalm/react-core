import { useEffect } from 'react';


const SubJects = (props) => {
    useEffect(() => {
        var mainDiv = document.getElementById('mainConent');
        mainDiv.scrollTop = 0;
    }, [])
    return (
           <div style={{paddingLeft:20}}>
              <h1>Subjects</h1>
           </div>
        
    )
}

export default SubJects;