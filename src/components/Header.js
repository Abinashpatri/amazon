import "../components/Header.scss";
import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
      </div>
      <div className="header__search">
        <input type="text" className="header__search__input" />
        <SearchIcon className="header__search__icon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <div className="nav_itemLineOne">Hello Guest</div>
          <div className="nav_itemLineTwo">Sign In</div>
        </div>
        <div className="nav__item">
          <div className="nav_itemLineOne">Your</div>
          <div className="nav_itemLineTwo">Shop</div>
        </div>
        <div className="nav__itemBasket">
          <ShoppingBasketIcon />
          <div className="nav_itemLineTwo nav__basketCount">0</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
