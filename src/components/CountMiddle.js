import React, { useState } from "react";

function CountMiddle(){

    const [count, setCount] = useState(0)

    // function addFifty() {
    //     setCount(50)
    // }

    function addValue() {
        setCount(count + 20)
    }

    return(
            <div>
                <center>
                    <h4 className="btn-text">{count}</h4>
                    <button className="timeButton" onClick={() => setCount(count + 20)}>CLICK ME</button>
                </center>
            </div>
    )
}


export default CountMiddle