import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';
import ProductVariety from '../../components/ProductVariety/ProductVariety';
import { productDetailAction } from '../../store/actions/actions';
import './ProductDetailScreen.css';

const ProductDetailScreen = (props) => {

    const prodId = props.match.params.id
    const redirect = props.history;

    //get state from redux store
    const { loading, product, error } = props.singleProduct;

    //get dispatch from props
    const { onProductDetail } = props;

    useEffect(() => {
        onProductDetail(prodId)
    }, [prodId, onProductDetail])
    
    return (
        loading ? <LoadingBox/> :
        error ? <MessageBox variant={'danger'}>{error}</MessageBox>
        : (
            <div className="product-container">
                <div>
                    <h1>{product.product_name}</h1>
                </div>
                <div className="description">
                    <div className="title">Description</div>
                    <div className="content">{product.product_description}</div>
                </div>
                <div className="varieties">
                    {
                        product.product_varieties.map((variety, index) => <ProductVariety key={index} variety={variety} redirect={redirect}/>)
                    }

                </div>

            </div>
        )
    )
}
 

const mapStateToProps = (state) => {
    return {
        singleProduct: state.productDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onProductDetail: (prodId) => dispatch(productDetailAction(prodId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen);