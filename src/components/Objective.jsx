import React, {useState} from "react";
import Option from "./Option";

function Objective(props){

    // const [anotherScore, setScore] = useState({
    //     score: 0
    // });
    // const [is_clicked, setClicked] = useState(false);
    function myScore(){
        // setScore(prevValue => ({
        //     ...prevValue.score+1
        // }))
      
        props.newScore(true);
    }

    function wrong(){
        props.newScore(false)
    }

    // console.log(anotherScore.score)
    
    return (
        <>
            
            <p className="description">{props.questNo+1}.  {props.description}</p>
            {props.options.map(option=>(
                <Option key = {option.id} description={option.description} is_true={option.is_correct} score={myScore} is_wrong={wrong}/>
            ))}
            {/* {console.log(props.options)} */}
            {/* <button>Next</button> */}
            
        </>
    )
}


export default Objective;