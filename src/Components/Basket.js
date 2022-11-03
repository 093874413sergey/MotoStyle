import React from 'react';
import { BsFillPlusSquareFill, BsFillDashSquareFill } from 'react-icons/bs';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <aside className="col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-3">{item.name}</div>
            <div className="col-2">
              <biv onClick={() => onRemove(item)} >
                <BsFillDashSquareFill className="remove"/>
              </biv>{' '}
              <biv onClick={() => onAdd(item)} >
                <BsFillPlusSquareFill className="add"/>
              </biv>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            
            <div className="row">
            <hr />
              <div className="col-2">Total price</div>
              <div className="col-2 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
           
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout 
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
