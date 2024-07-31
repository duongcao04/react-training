import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../redux/cartSlice';

function Cart() {
  const SHIPPING = 15000;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleDeleteCart = (productId) => {
    dispatch(deleteCart(productId));
  };

  let totalAmount = function () {
    var total = 0;
    cart.forEach((product) => (total += product.price * product.quantity));
    return total;
  };

  return (
    <div className='container mt-14 pb-20'>
      <h1 className='text-2xl font-bold'>Giỏ hàng</h1>
      <div className='mt-8 flex items-start justify-between gap-8'>
        <div>
          {cart.map((product, index) => (
            <div
              key={index}
              className='shadow-md mt-5 w-[780px] h-[250px] border rounded-lg flex py-8 px-4 items-start justify-between'
            >
              <div className='flex items-start justify-start gap-3 h-full'>
                <img
                  src={product.featureImage}
                  alt=''
                  className='h-full w-[210px] object-contain'
                />
                <div>
                  <p className='text-xl font-semibold'>{product.name}</p>
                  <p className='mt-3 text-yellow-600 text-2xl font-semibold'>
                    {product.price.toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </p>
                  <p className='mt-3'>
                    Quantity:{' '}
                    <span className='font-bold'>{product.quantity}</span>
                  </p>
                </div>
              </div>
              <IoMdClose
                size={30}
                className='cursor-pointer text-red-500'
                onClick={() => {
                  handleDeleteCart(product.id);
                }}
              />
            </div>
          ))}
        </div>

        <div className='shadow-xl mt-5 border w-[calc(100%-850px)] px-20 py-8 text-lg'>
          <div className='flex items-center justify-between'>
            <p>Subtotal:</p>
            <p>
              {totalAmount().toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND',
              })}
            </p>
          </div>

          <div className='mt-5 flex items-center justify-between'>
            <p>Shipping:</p>
            <p>
              {SHIPPING.toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND',
              })}
            </p>
          </div>

          <div className='pt-5 mt-5 border-t flex items-center justify-between font-semibold text-xl'>
            <p>Total:</p>
            <p>
              {(totalAmount() + SHIPPING).toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND',
              })}
            </p>
          </div>

          <button className='mt-7 w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
