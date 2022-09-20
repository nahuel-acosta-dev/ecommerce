import React,{useState,useEffect} from 'react';
import Layout from '../hocs/Layout';
import {Navigate} from 'react-router';
import {connect} from 'react-redux';
import { setAlert } from '../redux/actions/alert'
import CartItem from '../components/shop/CartItem';
import WishlistItems from '../components/shop/WishListItems';
import Paypal from '../components/payment/Paypal'
import {Link} from 'react-router-dom';
import {refresh} from '../redux/actions/auth';
import {Row, Col, Form} from 'react-bootstrap';
import { 
    get_items, 
    get_total, 
    get_item_total,
    remove_item,
    update_item
} from '../redux/actions/cart';
import {countries} from '../helpers/fixedCountries';
import ShippingForm from '../components/shipping/ShippingForm';
import {
    get_payment_total,
    process_payment
  } from '../redux/actions/payment';
import {get_shipping_options} from '../redux/actions/shipping';

const Checkout = ({
    get_items, 
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
        shipping_id,
    } = formData;

    useEffect(() => {
        /*if (coupon && coupon !== null && coupon !== undefined)
            get_payment_total(shipping_id, coupon.name);
        else*/
            get_payment_total(shipping_id, 'default');
      }, [shipping_id]);

    const [render, setRender] = useState(false);

    

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
                            <><Form>
                                <div key={`default-radio`} className="mb-3">
                                    {shipping.map((ship, i) => (
                                        <Form.Check 
                                        key={i}
                                        type='radio'
                                        value={ship.id}
                                        label={`${ship.name} - ${ship.price} (${ship.time_to_delivery})`}
                                        required
                                        />
        
                                    ))}
                                </div>
                                
                            </Form>
                            </>
                            }
                    </WishlistItems>
                    <Paypal/>
                </Col>
            </Row>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
    items: state.Cart.items,
    total_items: state.Cart.total_items,
    shipping: state.Shipping.shipping,
    clientToken: state.Payment.clientToken,
    made_payment: state.Payment.made_payment,
    loading: state.Payment.loading,
    original_price: state.Payment.original_price,
    total_after_coupon: state.Payment.total_after_coupon,
    total_amount: state.Payment.total_amount,
    total_compare_amount: state.Payment.total_compare_amount,
    estimated_tax: state.Payment.estimated_tax,
    shipping_cost: state.Payment.shipping_cost,
    compare_amount: state.Cart.compare_amount,
})

export default connect(mapStateToProps,{
    get_items,
    get_total,
    get_item_total,
    update_item,
    remove_item,
    setAlert,
    get_shipping_options,
    refresh,
    get_payment_total,
    process_payment,
}) (Checkout)