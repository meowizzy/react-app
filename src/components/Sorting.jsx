import React, { useState } from "react"; 

function Sorting() {
    const [isVisible, setVisible] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const sortingItems = ["популярности (DESC)", "популярности (ASC)", "цене (DESC)", "цене (ASC)", "алфавиту (DESC)", "алфавиту (ASC)"];
    const selectedItem = sortingItems[selectedItemIndex];

    const handleClickOnSortingItem = (event, index) => {
        event.preventDefault();
        setSelectedItemIndex(index);
        
        if (index !== selectedItemIndex) {
            setVisible(false);
        }
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.sorting__items') && !event.target.closest('.sorting__current')) {
            setVisible(false);
        }
    };

    document.addEventListener('click', handleClickOutside);

    return (
        <div className="sorting">
            <div className="sorting__heading">
                <p className="sorting__title">Сортировка по:</p>
                <span className="sorting__current" onClick={() => setVisible(!isVisible)}>{selectedItem}</span>
            </div>
            <ul className={isVisible ? "sorting__items active" : "sorting__items"}>
                {sortingItems.map((item, index) => (
                    <li key={item} className={selectedItemIndex === index ? "sorting__item active" : "sorting__item"}><a href="/" onClick={(event) => handleClickOnSortingItem(event, index)}>{item}</a></li>
                ))}
            </ul>
        </div>
    );
}


export default Sorting;