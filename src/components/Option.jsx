import React, {useState} from "react";


function Option(props) {

    const [color, setColor] = useState("white");

    // A handler for each answer option click
    function handleClick() {
        // Showing a shade of green if the answer was actually correct.
        if (props.is_true) {
            setColor("#C2FFC7");
            // Calling the myScore() function from Objective.jsx
            props.score()
    
        } else {
            // Showing a shade of red if the answer was wrong.
            setColor("#DE3163");
            // Calling wrong() function from Objective.jsx
            props.is_wrong()
        }
    }


    return (
        <>
            {/* Rendering each answer options */}
            <p className="option" onClick = {()=>handleClick()} style={{backgroundColor: color}}>{props.description}</p>
        </>
    )
}

export default Option;
