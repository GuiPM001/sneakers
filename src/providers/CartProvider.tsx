import { ReactNode, createContext, useState } from "react";
import { Product } from "../interfaces/Product";
import { ProductCart } from "../interfaces/ProductCart";
import Cart from "../components/cart/Cart";

type CartContextType = {
  handleCart: (product?: Product, quantity?: number) => void;
  removeProduct: (id: number) => void;
};

export const CartContext = createContext<CartContextType>({
  handleCart: () => {},
  removeProduct: () => {}
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({children}: CartProviderProps) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsCart, setProductsCart] = useState<ProductCart[]>([]);

  function handleCart(product?: Product, quantity?: number) {
    if (product && quantity) {
      var existingProduct = productsCart.find(p => p.product.id === product?.id)
      if (existingProduct) {
        existingProduct.quantity += quantity;
        return setProductsCart([...productsCart])
      }
      
      setProductsCart([...productsCart, {product: product, quantity: quantity}]);
      return setCartOpen(true);
    }
    
    setCartOpen(!cartOpen);
  }

  function removeProduct(id: number) {
    let newArrayProducts = productsCart?.filter(p => p.product.id !== id);
    setProductsCart(newArrayProducts);
  }

  return (
    <CartContext.Provider value={{ handleCart, removeProduct }}>
      {cartOpen && <Cart productsCart={productsCart}/>}
      {children}
    </CartContext.Provider>
  );
};