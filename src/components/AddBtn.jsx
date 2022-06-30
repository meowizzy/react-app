import React, { useState } from "react"; 

function AddBtn() {
    const [count, setCount] = useState(0);
    const addToCart = () => {
        setCount(count + 1);
    };
    
    return(
        <button onClick={addToCart} className="add-btn"><span>Добавить</span><i className={count > 0 ? "visible" : ''}>{count}</i></button>
    );
}


export default AddBtn;