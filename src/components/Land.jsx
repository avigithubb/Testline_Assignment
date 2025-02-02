import React from "react";
import { useNavigate } from "react-router-dom";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function Land(){
    const navigateTo = useNavigate();
    // Navigate to starting question.
    function handleClick(){
        navigateTo("/home");
    }
    return (
        <div className="page">
        {/* Start the quiz */}
        <button onClick={()=> handleClick()} className="start-button"><span style={{marginRight: "5px", marginBottom: "2px"}}>Start Here </span><LightbulbIcon /></button>
        </div>
    )
}

export default Land;