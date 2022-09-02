import React,{ useEffect } from 'react';
import Layout from '../hocs/Layout';
import {useParams} from 'react-router';
import {connect} from 'react-redux';
import { get_product, get_related_products } from '../redux/actions/products';
import Detail from '../components/shop/Detail';

const ProductDetail = ({
    get_product,
    get_related_products, 
    product
}) => {
    const params = useParams();
    const productId = params.productId;
    
    useEffect(() => {
        get_product(productId);
        get_related_products(productId);
    }, [])

    console.log(product)
    return(
        <Layout>
            <Detail name={product.name} img={product.get_thumbnail} price={product.price} 
            comparePrice={product.compare_price}/>
        </Layout>
    )
}

const mapStateToProps = state => ({
    product: state.Products.product
})

export default connect(mapStateToProps, {
    get_product, 
    get_related_products
}) (ProductDetail);