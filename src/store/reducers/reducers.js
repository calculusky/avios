import * as actionTypes from '../constants/constants';


//All products
export const listProducts = (state = { loading: true, products: [] }, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_LIST_START:
            return {
                loading: true,
                products: []
            }

        case actionTypes.PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }

        case actionTypes.PRODUCT_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }           
    
        default:
            return state;
    }
}

//product details
export const productDetail = (state = { loading: true, product: null }, action ) => {
    switch(action.type){
        case actionTypes.GET_PRODUCT_START:
            return {
                loading: true,
                product: null
            }
        
        case actionTypes.GET_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        case actionTypes.GET_PRODUCT_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
} 