import ProductOptions from "../ProductOptions";
import AddBtn from "../AddBtn";


function Product(props) {

    const {id, productName, productPrice, options, image} = props;

    return(
        <div className="product-item" key={id}>
            <div className="product-item__image">
                <a href="/">
                    <img src={image} alt="" />
                </a>
            </div>
            <div className="product-item__name">
                <a href="/">{productName}</a>
            </div>
            <div className="product-item__options">
                <ProductOptions options={options}/>
            </div>
            <div className="product-item__bottom">
                <div className="product-price">
                    <span>от {productPrice} ₽</span>
                </div>
                <AddBtn/>
            </div>
        </div>
    );
}

export default Product;