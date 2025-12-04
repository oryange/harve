import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ContextCart = createContext();

function ContextCartProvider({ children }) {
  const [cartProductList, setCartProductList] = useState([]);

  useEffect(() => {
    loadCartFromStorage();
  }, []);

  function loadCartFromStorage() {
    const storedCartData = localStorage.getItem("cart_products");

    if (storedCartData) {
      const parsedProducts = JSON.parse(storedCartData);
      setCartProductList(parsedProducts);
    }
  }

  function saveProducts(list) {
    setCartProductList(list);
    const productList = JSON.stringify(list);
    localStorage.setItem("cart_products", productList);
  }

  const addToCart = (product) => {
    const productsInCart = cartProductList.filter(
      (item) => item.id == product.id
    );
    if (productsInCart.length > 0) {
      return toast.error("Product is already in your cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const updatedProductList = [product, ...cartProductList];
    saveProducts(updatedProductList);
  };

  function removeProduct(productId) {
    const updatedProductList = cartProductList.filter(
      (item) => item.id != productId
    );

    saveProducts(updatedProductList);
  }

  return (
    <ContextCart.Provider
      value={{ cartProductList, addToCart, removeProduct }}
    >
      {children}
    </ContextCart.Provider>
  );
}

export default ContextCartProvider;