import React, {useState} from "react";
import Option from "./Option";

function Objective(props){

    // Sending back true if the answer was right to Score function in Home.jsx.
    function myScore(){
        props.newScore(true);
    }

    // Sending back false if the answer was actually wrong to Score function in Home.jsx
    function wrong(){
        props.newScore(false)
    }

    
    return (
        <>
            {/* Showing the question description */}
            <p className="description">{props.questNo+1}.  {props.description}</p>
            {/* Since the option key was a list hence, Rendering each answer options using the Option component.*/}
            {props.options.map(option=>(
                <Option key = {option.id} description={option.description} is_true={option.is_correct} score={myScore} is_wrong={wrong}/>
            ))}
            
            
        </>
    )
}


export default Objective;