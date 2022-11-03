import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className='card_product'>
<div className='cart_flex'>
      <img className="small" src={product.image} alt={product.name} />
      <h3 className='name_moto'>{product.name}</h3>
      <div className='price_moto'>${product.price}</div>
      <div className='video_moto'>{product.video}</div>
      <div>
        <button className='buy_moto' onClick={() => onAdd(product)}>Buy a motorcycle</button>
      </div>
</div>
    </div>
  );
}
