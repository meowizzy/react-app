import React, { useState } from "react"; 

function Sorting({selectedSortItem, setSelectedSortItem}) {
    const [isVisible, setVisible] = useState(false);
    const sortingItems = [
        {name: "популярности (DESC)", sortType: "rating", sortMethod: "desc"},
        {name: "популярности (ASC)", sortType: "rating", sortMethod: "asc"},
        {name: "цене (DESC)", sortType: "productPrice", sortMethod: "desc"},
        {name: "цене (ASC)", sortType: "productPrice", sortMethod: "asc"},
        {name: "алфавиту (DESC)", sortType: "productName", sortMethod: "desc"},
        {name: "алфавиту (ASC)", sortType: "productName", sortMethod: "asc"}
    ];

    const handleClickOnSortingItem = (event, obj) => {
        event.preventDefault();
        setSelectedSortItem(obj);
        
        if (obj.name !== selectedSortItem.name) {
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
                <span className="sorting__current" onClick={() => setVisible(!isVisible)}>{selectedSortItem.name}</span>
            </div>
            <ul className={isVisible ? "sorting__items active" : "sorting__items"}>
                {sortingItems.map((item, index) => (
                    <li key={item.name} className={selectedSortItem.name === item.name ? "sorting__item active" : "sorting__item"}>
                        <a href="/" onClick={(event) => handleClickOnSortingItem(event, item)}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Sorting;