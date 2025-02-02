import React, {useState} from "react";


function Option(props) {

    const [color, setColor] = useState("white");

    function handleClick() {
        if (props.is_true) {
            setColor("#C2FFC7");
            props.score()
    
        } else {
            setColor("#DE3163");
            props.is_wrong()
        }
    }


    return (
        <>
            <p className="option" onClick = {()=>handleClick()} style={{backgroundColor: color}}>{props.description}</p>
        </>
    )
}

export default Option;
