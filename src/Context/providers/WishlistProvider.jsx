import React, { useReducer } from "react";
import { WishlistContext } from "../Context";

const WishlistProvider = ({ children }) => {
  const initialState = {
    userId: 1,
    wishlistItems: [
      {
        "id": 1,
          "title": "Cricket Helmet",
          "price": 44.99,
          "quantity": 4,
          "total": 179.96,
          "discountPercentage": 11.47,
          "discountedTotal": 159.32,
          "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
      },
      {
        "id": 2,
      "title": "Cricket Helmet",
      "price": 44.99,
      "quantity": 4,
      "total": 179.96,
      "discountPercentage": 11.47,
      "discountedTotal": 159.32,
      "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
      },
    ],
  };

  const wishlistReducer = (state, action) => {
      console.log("action", JSON.stringify(action));
        console.log("state", JSON.stringify(state));
    switch (type) {
      case "ADD_TO_WISHLIST":
          return state;
  case "REMOVE_FROM_WISHLIST":
          return state;
          default:
            return state;
    }
      
      

    
  };

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;