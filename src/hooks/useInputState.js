import { useState } from "react";

function useInputState(initialValue){
    const [value, setValue] = useState(initialValue);
    const  reset = () => {
        setValue(initialValue);
    }
    const handleChange = (e) =>{
        setValue(e.target.value)
    }
    return [value, handleChange, reset];
}

export default useInputState;