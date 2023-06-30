import { ADD_TO_CART } from '../actions/cartActions'
import { DELETE_CART } from '../actions/cartActions'
import { CHECKOUT_CART } from '../actions/cartActions'


// >>> action.payload
// {
//     id: '',
//     title: '',
//     price: 2,
//     qutity: 1
// }


const initialState = {
    cart: []
}


export function cartReducer(state = initialState, action){
    switch (action.type) {
        case ADD_TO_CART:
            let updataedCart 
            const foundItem = state.cart.find(item => item.id === action.payload.id)

            if(!foundItem){
                updataedCart = [...state.cart , action.payload]
            }
            else{
                updataedCart = state.cart.map(item => ({
                    ...item,
                    quantity: item.id === foundItem.id ?  item.quantity + 1 : item.quantity
                }))
            }

            return {
                ...state,
                cart: updataedCart
            }
        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }

        case CHECKOUT_CART:
        return {
            ...state,
            cart: []
        }
        
        default:
            return state
    }
}
  

