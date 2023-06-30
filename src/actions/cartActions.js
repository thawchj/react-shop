export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_CART = 'DELETE_CART'
export const CHECKOUT_CART = 'CHECKOUT_CART'

// {
//     type: '',
//     payload: {
//         id: '',
//         title: '',
//         price: 2,
//         qutity: 1
//     }
// }

export function addToCart(addedProduct) {
    return {
        type: ADD_TO_CART,
        payload: addedProduct
    }
}

export function deleteCart(id) {
    return {
        type: DELETE_CART,
        payload: id,
    }
}

export function checkoutCart() {
    return {
        type: CHECKOUT_CART,

    }
}







