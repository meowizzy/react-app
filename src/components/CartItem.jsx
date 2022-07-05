import {useState} from 'react';

function CartItem() {
    const [productAmount, setProductAmount] = useState(1);

    const handleClickPlus = () => {
        setProductAmount(productAmount + 1);
    };

    const handleClickMinus = () => {
        if (productAmount > 1) {
            setProductAmount(productAmount - 1);
        } 
    };

    const handleChangeInput = (event) => {
        setProductAmount(Number(event.target.value));
    };

    return (
        <div className="cart-item">
            <div className="cart-item__left">
                <div className="cart-item__image">
                    <a href="/">
                        <img src="images/product/product1.png" alt="" />
                    </a>
                </div>
                <div className="cart-item__container">
                    <div className="cart-item__name">
                        <a href="/">
                            <span>Сырный цыпленок</span>
                        </a>
                    </div>
                    <div className="cart-item__params">
                        <span>тонкое тесто</span>, <span>26 см.</span>  
                    </div>
                </div>
            </div>
            <div className="cart-item__right">
                <div className="product-amount">
                    <button className="product-amount__minus" onClick={handleClickMinus} disabled={productAmount <= 1 ? "disabled" : ""}>-</button>
                    <input type="text" className="product-amount__input" value={productAmount} onChange={handleChangeInput}/>
                    <button className="product-amount__plus" onClick={handleClickPlus}>+</button>
                </div>
                <div className="cart-sum">
                    <span>770 ₽</span>
                </div>
                <button className="cart-delete">
                    <span>Удалить</span>
                </button>
            </div>
        </div>
    );
}

export default CartItem;