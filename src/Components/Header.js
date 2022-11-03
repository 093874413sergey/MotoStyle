import React from 'react';
import { BsCart4 } from "react-icons/bs";
import { GoSignIn } from "react-icons/go";

export default function Header(props) {
  return (
    <header className="block">
      <div>
          <h1>MotoStyle</h1>
      </div>
      <div>
        <a href="#/cart" onClick={() => alert('Implement Checkout!')}>
        <BsCart4 className='button_bascet' />{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> <GoSignIn className='button_signin' /></a>
      </div>
    </header>
  );
}
