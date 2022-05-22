import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import './cart-block.css';

export const CartBlock = () => {
  return (
    <div className="cart-block">
        <BiCartAlt size={30} className="cart_block-icons"/> 
        <span className="cart-block_total-price"> 21321 валюта </span>
    </div>
  )
}
