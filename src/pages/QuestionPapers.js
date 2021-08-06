import { useEffect } from 'react';


const QuestionPapers = (props) => {
    useEffect(() => {
        var mainDiv = document.getElementById('mainConent');
        mainDiv.scrollTop = 0;
    }, [])
    return (
          <h1>Question Papers</h1>
    )
}

export default QuestionPapers;