import React, { useState } from "react"; 

function Sorting() {
    const [isVisible, setVisible] = useState(false);
    const handleSortingItems = () => {
        if (!isVisible) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    return (
        <div className="sorting">
            <div className="sorting__heading">
                <p className="sorting__title">Сортировка по:</p>
                <span className="sorting__current" onClick={handleSortingItems}>популярности</span>
            </div>
            <ul className={isVisible ? "sorting__items active" : "sorting__items"}>
                <li className="sorting__item active"><a href="/">популярности (DESC)</a></li>
                <li className="sorting__item"><a href="/">популярности (ASC)</a></li>
                <li className="sorting__item"><a href="/">цене (DESC)</a></li>
                <li className="sorting__item"><a href="/">цене (ASC)</a></li>
                <li className="sorting__item"><a href="/">алфавиту (DESC)</a></li>
                <li className="sorting__item"><a href="/">алфавиту (ASC)</a></li>
            </ul>
        </div>
    );
}


export default Sorting;