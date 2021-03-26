import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';
import Products from '../../components/Products/Products';
import { listProductsAction } from '../../store/actions/actions';

const HomeScreen = (props) => {

    //get state from redux store through props
    const { loading, products, error } = props.products;


    //get dispatch action from props
    const { onListProducts } = props;

    useEffect(() => {
        onListProducts();
    }, [onListProducts])

    
    return ( 
        loading ? <LoadingBox/> 
        : error ? <MessageBox variant={'danger'}>{error}</MessageBox>
        : (
            <div className="row center">
                {
                    products.length <= 0 ? <h1>Product is empty</h1> :
                    products.map(product => <Products key={product.id} product={product}/>)
                } 
            </div>
        )
     );
}


//get products state
const mapStateToProps = (state) => {
    return {
        products: state.listProducts
    }
}

//dispatch products action
const mapDispatchToProps = (dispatch) => {
    return {
        onListProducts: () => dispatch(listProductsAction())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);