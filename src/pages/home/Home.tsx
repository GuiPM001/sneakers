import Header from "../../components/header/Header";
import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';
import productThumb1 from '../../assets/images/image-product-1-thumbnail.jpg';
import productThumb2 from '../../assets/images/image-product-2-thumbnail.jpg';
import productThumb3 from '../../assets/images/image-product-3-thumbnail.jpg';
import productThumb4 from '../../assets/images/image-product-4-thumbnail.jpg';
import { useContext, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import Carousel from "../../components/carousel/Carousel";
import { CartContext } from "../../providers/CartProvider";

export default function Home() {
  const [quantity, setQuantity] = useState<number>(0);
  
  const { handleCart } = useContext(CartContext);

  let product = 
    {
      id: 1,
      name: 'Fall Limited Edition Senakers',
      description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they willl withstand everything the weather can offer.',
      price: 125,
      discount: 50,
      image: product1
    };

  function handlerCount(number: number) {
    if (number < 0 && quantity === 0) {
      return setQuantity(0);
    }

    setQuantity(quantity + number);
  }

  function addToCart() {
    if (quantity !== 0)
      handleCart(product, quantity)
  }

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center my-16 h-screen md:h-screen md:flex-row md:my-0 md:mx-16">
        
        <div className="md:hidden w-full h-2/3">
          <Carousel images={[product1, product2, product3, product4]} />
        </div>

        <div className="hidden md:block md:w-1/2 md:mr-4 overflow-hidden">
          <Carousel 
            images={[product1, product2, product3, product4]}
            imagesThumbnail={[productThumb1, productThumb2, productThumb3, productThumb4]}
          />
        </div>
        
        <div className="w-11/12 my-4 md:w-1/2 md:">
          <span className="text-orange-400 text-sm font-bold tracking-wider pt-6">
            SNEAKER COMPANY
          </span>

          <h1 className="text-4xl font-bold mt-2.5 mb-4 md:mb-8">
            {product.name}
          </h1>

          <p className="text-gray-700">
            {product.description}
          </p>

          <div className="w-full my-6 inline-flex justify-between items-center md:flex-col md:items-start">
            <div className="flex items-center">
              <span className='text-3xl font-bold mr-4'>${product.price.toFixed(2)}</span>
              <span className='bg-orange-100 py-0.25 px-2 text-orange-400 rounded-lg text-lg font-bold'>{product.discount}%</span>
            </div>

            <span className='text-lg font-bold line-through text-gray-400'>${(product.price / (1 - product.discount / 100)).toFixed(2)}</span>
          </div>

          <div className='md:inline-flex md:items-center md:justify-center md:w-full'>
            <div 
              className='
              w-full
              md:w-1/3
              inline-flex
              justify-between
              items-center
              bg-gray-100
              rounded-lg
              py-2
              px-2
              mb-4
              md:mb-0
              md:mr-4'
            >
              <button 
                onClick={() => handlerCount(-1)}
                className="p-4 rounded-full active:scale-90"
              >
                <FaMinus color="orange" size={20}/>
              </button>

              <span className="font-bold text-lg">{quantity}</span>

              <button 
                onClick={() => handlerCount(+1)} 
                className="p-4 rounded-full active:scale-90"
              >
                <FaPlus color="orange" size={20}/>
              </button>
            </div>

            <button 
              onClick={addToCart}
              className='
                w-full
                md:w-2/3
                inline-flex 
                justify-center 
                items-center 
                bg-orange-500
                rounded-lg
                py-4
                shadow-2xl shadow-orange-200
                hover:bg-orange-300
                transition duration-150 ease-in-out
                active:scale-95'
            >
              <IoCartOutline color="white" size={25} className="mx-2"/>
              <span className="text-lg font-bold text-white mx-2">
                Add to cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}