import React,{useState,useEffect} from 'react';
import Layout from '../hocs/Layout';
import {Navigate} from 'react-router';
import {connect} from 'react-redux';
import CartItem from '../components/shop/CartItem';
import WishlistItems from '../components/shop/WishListItems';
import {Link} from 'react-router-dom';
import {Row, Col, Form} from 'react-bootstrap';
import { 
    get_items, 
    get_total, 
    get_item_total,
    remove_item,
    update_item
} from '../redux/actions/cart';
import {get_shipping_options} from '../redux/actions/shipping';

const Checkout = ({get_items, 
    get_total, 
    get_item_total,
    isAuthenticated,
    items,
    amount,
    compare_amount,
    total_items,
    remove_item,
    update_item,
    get_shipping_options,
    shipping
}) => {

    useEffect(() => {
        window.scrollTo(0,0)
        get_shipping_options()
    }, [])

    const [render, setRender] = useState(false);

    const [formData, setFormData] = useState({
        full_name: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        state_province_region: '',
        postal_zip_code: '',
        country_region: 'Peru',
        telephone_number: '',
        coupon_name: '',
        shipping_id: 0,
    });

    const { 
        full_name,
        address_line_1,
        address_line_2,
        city,
        state_province_region,
        postal_zip_code,
        country_region,
        telephone_number,
        coupon_name,
        shipping_id,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    useEffect(() => {
        window.scrollTo(0, 0);
        get_items();
        get_total();
        get_item_total();
    }, [render])

    if(!isAuthenticated){
        return <Navigate to="/"/>
    }

    console.log(shipping)

    const showItems = () => (
            <div>
            <div className="row">
                <div className="col-12">
                <div className="py-3">
                    {/*<!-- alert -->*/}
                    <div className="alert alert-danger p-2" role="alert">
                        You’ve got FREE delivery. Start <a href="#!" className="alert-link">checkout now!</a>
                    </div>
                    {
                        items &&
                        items !== null &&
                        items !== undefined &&
                        items.length !== 0 &&
                        items.map((item, i) => 
                        <CartItem 
                            key={i} 
                            item={item}
                            count={item.count}
                            update_item={update_item}
                            remove_item={remove_item}
                            render={render}
                            setRender={setRender}
                            />
                        )
                    }

                    <div className="d-flex justify-content-between mt-4">
                        <a href="/" className="btn btn-primary">Continue Shopping</a>
                        <a href="/" className="btn btn-dark">Update Cart</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

    return(
        <Layout>
            <Row>
                <Col>
                    {showItems()}
                </Col>
                <Col className="text-center">
                    <WishlistItems 
                    compareAmount={compare_amount.toFixed(2)}
                    amount={amount}
                    >
                        {
                            shipping && shipping !== null && shipping !== undefined &&
                            <Form>
                            <div key={`default-radio`} className="mb-3">
                                {shipping.map((ship, i) => (
                                    <Form.Check 
                                    type='radio'
                                    value={ship.id}
                                    label={`${ship.name} - ${ship.price} (${ship.time_to_delivery})`}
                                    required
                                    />
    
                                ))}
                                
                            </div>
                        </Form>}
                    </WishlistItems>
                </Col>
            </Row>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    items: state.Cart.items,
    amount: state.Cart.amount,
    compare_amount: state.Cart.compare_amount,
    total_items: state.Cart.total_items,
    shipping: state.Shipping.shipping
})

export default connect(mapStateToProps, {
    get_items, 
    get_total, 
    get_item_total,
    remove_item,
    update_item,
    get_shipping_options
}) (Checkout);