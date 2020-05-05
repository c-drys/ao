import React from "react";
import { connect } from "react-redux";

import CustomButton from "../Custom-button/Custom-button.component";
import CartItem from "../Cart-item/Cart-item.component";

import "./Cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-item">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
