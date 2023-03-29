import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { cartReducer } from "./Cart/reducer";
import { orderReducer } from "./Order/reducer";
import { productReducer } from "./Product/Reducer";


const root = combineReducers({
    auth: authReducer,
    products:productReducer,
    cart:cartReducer,
    order:orderReducer
  });

  const initState = {
    cart:{
        cartItems: localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : [],
        shippingInfo:
            localStorage.getItem('shipping') ? 
            JSON.parse(localStorage.getItem('shipping')) : {}
    }
}
  
  export const store = legacy_createStore(root,initState, applyMiddleware(thunk));