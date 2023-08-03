import { ReactNode, createContext, useState } from "react";
import { Product } from "../interfaces/Product";
import { ProductCart } from "../interfaces/ProductCart";
import Cart from "../components/cart/Cart";

type CartContextType = {
  handleCart: (product?: Product, quantity?: number) => void;
  removeProduct: (id: number) => void;
  quantityProducts: number;
};

export const CartContext = createContext<CartContextType>({
  handleCart: () => {},
  removeProduct: () => {},
  quantityProducts: 0
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({children}: CartProviderProps) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsCart, setProductsCart] = useState<ProductCart[]>([]);
  const [quantityProducts, setQuantityProducts] = useState<number>(0);

  function handleCart(product?: Product, quantity?: number) {
    if (product && quantity) {
      addProduct(product, quantity);
      setQuantityProducts(quantityProducts + quantity);
      return setCartOpen(true);
    }
    
    setCartOpen(!cartOpen);
  }

  function removeProduct(id: number) {
    let product = productsCart.find(p => p.product.id === id);
    let newArrayProducts = productsCart?.filter(p => p.product.id !== id);
    setProductsCart(newArrayProducts);
    setQuantityProducts(quantityProducts - product?.quantity!);
  }

  function addProduct(product: Product, quantity: number) {
    var existingProduct = productsCart.find(p => p.product.id === product?.id);
    
    if (existingProduct) {
      existingProduct.quantity += quantity;
      return setProductsCart([...productsCart])
    }

    return setProductsCart([...productsCart, {
      product: product, 
      quantity: quantity
    }]);
  }

  return (
    <CartContext.Provider value={{ handleCart, removeProduct, quantityProducts }}>
      {cartOpen && <Cart productsCart={productsCart}/>}
      {children}
    </CartContext.Provider>
  );
};