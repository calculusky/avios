import * as actionTypes from '../constants/constants';
import Axios from '../../axios';

//list products in home page
export const listProductsAction = () => async (dispatch) => {
    dispatch({
        type: actionTypes.PRODUCT_LIST_START
    })
    try {
        const productsRes = await Axios.get('/api/management/get-products');
        dispatch({
            type: actionTypes.PRODUCT_LIST_SUCCESS,
            payload: productsRes.data
        })

    } catch (error) {
        dispatch({
            type: actionTypes.PRODUCT_LIST_FAILURE,
            payload: (error.response && error.response.data.message) ? error.response.data.message : error.message
        })
    }
}

//product details
export const productDetailAction = (prodId) => async(dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_START,
        payload: prodId
    })
    try {
        const productRes = await Axios.get(`/api/management/get-product/${prodId}`);
        dispatch({
            type: actionTypes.GET_PRODUCT_SUCCESS,
            payload: productRes.data
        })

    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_FAILURE,
            payload: (error.response && error.response.data.message) ? error.response.data.message : error.message
        })
    }
}