import { AllProducts} from "../Domiciles/ProductCategories/Data/Categories";
import {ADD_TO_CART, ADD_TO_CART_MENU, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FORM_CART} from "./types"

export const initialState ={
    products: AllProducts,
    cart:[]
};

export function shoppingReducer(state = initialState, action){

    switch(action.type){

        case ADD_TO_CART: {
            let newItem = state.products.find((product) => product.id === action.payload);
            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return(
                itemInCart?{...state,
                                cart: state.cart.map((item) => item.id === newItem.id
                                ?{...item, quantity: item.quantity+1}
                                :item)}
                            :{
                            ...state,
                            cart:[...state.cart, {...newItem, quantity:1}]
                            }
            );
        };

        case ADD_TO_CART_MENU: {
            let newItem = state.products.find((product) => product.id === action.payload1);
            let quantityItem = action.payload2;
            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return(
                itemInCart?{...state,
                                cart: state.cart.map((item) => item.id === newItem.id
                                ?{...item, quantity: item.quantity+quantityItem}
                                :item)}
                            :{
                            ...state,
                            cart:[...state.cart, {...newItem, quantity:quantityItem}]
                            }
            );
        };

        case REMOVE_ONE_FORM_CART: {
            let itemToDelete = state.cart.find((product) => product.id === action.payload);
            
            return itemToDelete.quantity>1?
                    {...state, cart: state.cart.map((item) => item.id === action.payload
                        ?{...item, quantity: item.quantity-1}
                        :item)}
                    :{
                        ...state,
                         cart: state.cart.filter((item)=>item.id !==action.payload)
                        }
        };

        case REMOVE_ALL_FROM_CART: 
            return {
                ...state,
                 cart: state.cart.filter((item)=>item.id !==action.payload)
                };
        ;

        case CLEAR_CART:
            return initialState
        ;

        default: return state;
    }
}