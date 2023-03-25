import { addToCartSuccess, deleteToCartSuccess, SHIPPING_INFO } from "./actionType";

export const cartReducer=(state={cartItems:[],shippingInfo:{}},action)=>{
    switch (action.type) {
        case addToCartSuccess:
            const item = action.payload;
            console.log("item in reducer of cart",item)
            const isCart = state.cartItems.find((e)=>e._id === item._id)
            if(isCart){
                return {
                    ...state,
                    cartItems: state.cartItems.map((e)=> e._id === isCart._id ? item : e
                    )
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems, item]
                }
        }
        case deleteToCartSuccess:
            return{
                ...state,
                cartItems: state.cartItems.filter((i) => i._id !== action.payload) 
            }
        case SHIPPING_INFO: 
        return{
            ...state,
            shippingInfo: action.payload
        }
        default:
            return state;
    }
}