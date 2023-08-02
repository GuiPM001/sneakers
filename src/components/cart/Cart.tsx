import { IoTrash } from "react-icons/io5";
import { ProductCart } from "../../interfaces/ProductCart";
import { useContext, useState } from "react";
import { CartContext } from "../../providers/CartProvider";

interface CartProps {
  productsCart?: ProductCart[];
}

export default function Cart(props: CartProps) {
  const { productsCart } = props;
  const { removeProduct } = useContext(CartContext);

  return (
    <div className="fixed w-full md:w-2/6 md:mr-1/12 md:right-10 md:top-20 z-10">
      <div className="bg-white min-h-[15rem] max-h-[28rem] mt-2 mx-2 overflow-y-auto rounded-xl flex flex-col shadow-2xl shadow-gray-600 md:m-0">
        <h1 className="md:fixed md:w-2/6 bg-white font-bold text-lg px-6 py-5 border-b rounded-t-xl md:border-gray-300">
          Cart
        </h1>

        {
          productsCart?.length 
          ? <div className="h-full flex flex-col justify-center px-6 pt-8 md:pt-24 pb-6">
            {productsCart.map(productCart => 
              <div key={productCart.product.id} className='flex flex-row items-center justify-between mb-6'>
                <img src={productCart.product.image} className="w-14 rounded-md mr-2"/>

                <div className="flex flex-col mr-4">
                  <span className="text-gray-500 text-lg font-semibold">{productCart.product.name}</span>

                  <div className="flex flex-row">
                    <span className="text-lg text-gray-500">
                      ${productCart.product.price.toFixed(2)} x {productCart.quantity} 
                      
                      <span className="font-bold text-black"> ${(productCart.product.price * productCart.quantity).toFixed(2)}</span>
                    </span>
                  </div>
                </div>

                <button onClick={() => removeProduct(productCart.product.id)}>
                  <IoTrash size={22} className="cursor-pointer text-gray-400 active:scale-90" />
                </button>
              </div>
            )}
            <button className="h-14 min-h-[3.5rem] w-full rounded-lg bg-orange-500 text-white font-bold">Checkout</button>
          </div>

          : <div className="px-5 md:pt-16 flex h-60 md:h-72 justify-center items-center">
            <span className="font-bold text-lg text-gray-500">Your cart is empty.</span>
          </div>
        }
      </div>
    </div>
  )
}