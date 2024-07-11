import { useState } from "react";

function Valid(){
    const[number, setNumber] = useState(0)
    const[isInValid, setIsInValid] = useState(null)


    function handleChange(e){
        const newNumber = parseInt(e.target.value)
        if(newNumber>=0 && newNumber<=5){
            setNumber(newNumber)
            setIsInValid(null)
        }else{
            setIsInValid(`${newNumber} is inValid`)
        }
    }
    return(
        <form>
            <input type="number" value={number} onChange={handleChange} />
            {isInValid? <span style={{color: "red"}}>{isInValid}</span>: null}
        </form>
    )

}
export default Valid