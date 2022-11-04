import React, { useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import { GoSignIn } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false)
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
        <GoSignIn onClick={() => setCartOpen(!cartOpen)} className={`button_signin`} />
      {cartOpen && (
        <div className='blok_reg'>
                <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control className='email' type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='button_submit' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
      </div>
    </header>
  );
}
