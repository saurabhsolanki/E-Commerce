import * as types from "./ProductType"

const initial={
    data:[]
}

export const productReducer=(state=initial,action)=>{
    const {type,payload}=action
switch (type) {
        case types.getProductSuccess:
            return{
                ...state,
                data:payload
            }
default:return state
}
}