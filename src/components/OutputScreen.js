import React from "react";
import OutputScreenRow from "./OutputScreenRow";
function OutputScreen(props)
{
    return (<>
    <div className="screen">
        <OutputScreenRow value = {props.question}></OutputScreenRow>
        <OutputScreenRow value = {props.answer}></OutputScreenRow>
    </div>
        
    </>)
}
export default OutputScreen;