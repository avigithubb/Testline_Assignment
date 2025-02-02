import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Objective from "./Objective";



function Home(){
    const [data, setData] = useState({
        questions: [],
    })
    const [myscore, setMyScore] = useState(0)
    const navigateTo = useNavigate();

//  To Keep the count of number of questions.
    const [count, setCount] = useState(0);

//  Used Proxy server to fetch the API.
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

//  To update the score on the go and navigate to the next question.
    function Score(is_correct){
        if(is_correct)
            setMyScore(myscore+1);
        // Delay of 1s to jump to the next question.
        setTimeout(()=>{
            setCount(count+1);
        }, 1000);
    }

//  Navigate to the result page once the quiz is over
    useEffect(()=>{
        if(count == 10){
            // Take the score with URL
            const queryParams = new URLSearchParams({
                score: myscore,
            }).toString();
            navigateTo(`/results?${queryParams}`)
        }
    }, [count])
   
    

    return(
        <>
            {/* A card to show the question in a interactive way. */}
            <div className="card">
                {/* Rendering each question in sequence one at a time. */}
                {data.questions.map((question, index)=>(
                        // Objective component to render each objective type question.
                        index == count ? <Objective key={index} description={question.description || "Default description"} options={question.options} newScore={Score} questNo={index}/> : null
                
                ))}
            {/* A button to skip the question */}
            <button className="Next-btn" onClick={()=> setCount(count+1 < 10 ? count+1 : 9)}> Skip </button>
            </div>
            
           
        </>
    )
}

export default Home;