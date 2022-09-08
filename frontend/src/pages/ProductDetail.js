import React,{ useState ,useEffect } from 'react';
import Layout from '../hocs/Layout';
import {useParams} from 'react-router';
import {connect} from 'react-redux';
import { get_product, get_related_products } from '../redux/actions/products';
import { get_items, add_item, get_total, get_item_total } from '../redux/actions/cart';
import Detail from '../components/shop/Detail';
import {Spinner} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductDetail = ({
    get_product,
    get_related_products, 
    product,
    get_items, 
    add_item, 
    get_total, 
    get_item_total
}) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const addToCart = async (e) => {
        e.preventDefault();
        if( product && product !== null && product !== undefined && product.quantity > 0 ) {
            setLoading(true)
            await add_item(product);
            await get_items();
            await get_total();
            await get_item_total();
            setLoading(false);
            navigate('/cart');
        }
    }

    const params = useParams();
    const productId = params.productId;
    
    useEffect(() => {
        window.scrollTo(0, 0);
        get_product(productId);
        get_related_products(productId);
    }, [])

    console.log(product)
    return(
        <Layout>{product ?
            <Detail 
                name={product.name} 
                img={product.get_thumbnail} 
                price={product.price} 
                comparePrice={product.compare_price} 
                quantity={product.quantity}
                addToCart={addToCart}
                loading={loading}
            />
            :
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
        </Layout>
    )
}
//Functionalities to obtain finished products
const mapStateToProps = state => ({
    product: state.Products.product
})

export default connect(mapStateToProps, {
    get_product, 
    get_related_products,
    get_items, 
    add_item, 
    get_total, 
    get_item_total
}) (ProductDetail);