import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsFillXOctagonFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';


const Canceled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon2">
          <BsFillXOctagonFill />
        </p>
        <h2>Canceled</h2>
        <p className="email-msg">Your order has been canceled</p>
       
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Canceled