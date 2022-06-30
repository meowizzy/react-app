import { useState } from "react";


function ProductOptions(props) {
    const { options } = props;
    const [ activeType, setActiveType ] = useState(0);
    const [ activeSize, setActiveSize ] = useState(0);

    return (
        <div className="product-options">
            
            <ul className="product-options__item">
                {
                    options.types.map((item, index) => (
                        <li key={index} onClick={() => setActiveType(index)} className={index === activeType ? "active" : ""}>{item}</li>
                    ))
                }
            </ul>

            <ul className="product-options__item">
                {
                    options.sizes.map((item, index) => (
                        <li key={index} onClick={() => setActiveSize(index)} className={index === activeSize ? "active" : ""}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}


export default ProductOptions;