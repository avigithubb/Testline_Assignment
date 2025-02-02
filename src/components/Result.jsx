import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Result(){
    
    const location = useLocation();
    // using useLocation hook to fetch the parameters sent via URL.
    const myqueryParams = new URLSearchParams(location.search);
    const finalScore = myqueryParams.get("score");

    const [data, setData] = useState({
        questions: []
    });

    // Fetching the API data again to show the explanation for each answer.
    useEffect(()=>{
        fetch("http://localhost:3000/proxy")
        .then(response => response.json())
        .then(data => {
                
            setData(prevValue=>({
                ...prevValue,
                questions: [...prevValue.questions, ...data.questions]
            }))
            
            
        })

    }, [])

    return (
        <div className="result">

            {/* Using React Material UI to Render emoji components from MUI. */}
            <h2><EmojiEventsIcon style={{fontSize: "100"}} /> <br/>Your Final Score Is</h2>
            
            <div className="hori-div"></div>
            <br/>
            <br/>

            {/* Rendering Score Player got at the end of the quiz. */}
            <div className="score_div">
                <p className="final-score">{finalScore}/10</p>
            </div>
            
            <br/>
            <br/>

            {/* Explanation of Each answer in detail. */}
            <h2>Explanation</h2>
            <div style={{backgroundColor: "white", width: "30vw", height: "2px", margin: "-20px auto 30px"}}></div>
            {data.questions.map((question, index)=>(
                <>
                    <p className="quest-desc">{index+1}.   {question.description}</p>
                    <p className="quest-ans">{question.detailed_solution}</p>
                    <div style={{backgroundColor: "white", width: "30vw", height: "2px", margin: "0px auto 30px"}}></div>
                </>
            
            ))}
        </div>
    )

}


export default Result;