function Header(link) {
    return (
    <header className="header">
        <div className="header__in">
          <div className="header__left">
            <div className="header__logo">
              <a href={link.link}>
                <img src="images/logo.svg" alt="logo" />
              </a>  
            </div> 
            <div className="header__comp-info comp-info">
              <div className="comp-info__title">
                <span>REACT PIZZA</span>
              </div>
              <div className="comp-info__desc">
                самая вкусная пицца во вселенной  
              </div>
            </div>
          </div>
          <div className="header__right">
            <div className="header__cart cart">
              <a href="/" className="cart__btn">
                <span className="cart__sum">520₽</span>
                <span className="cart__amount">3</span>
              </a>
            </div>
          </div>
        </div>
      </header> 
    );
}

export default Header;