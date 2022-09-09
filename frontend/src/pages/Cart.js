import React, {useState,useEffect} from 'react';
import Layout from '../hocs/Layout';
import CartItem from '../components/shop/CartItem';
import WishlistItems from '../components/shop/WishListItems';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import { 
    get_items, 
    get_total, 
    get_item_total,
    remove_item,
    update_item
} from '../redux/actions/cart';

const Cart = ({
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
}) => {
    
    const [render, setRender] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        get_items();
        get_total();
        get_item_total();
    }, [render])

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

    const checkoutButton = () =>{
        if(total_items < 1){
            return(
                <Link to="/shop">Buscar productos para comprar</Link>
            )
        }
        else if(!isAuthenticated){
            return(
                <Link to="/login">Login</Link>
            )
        }
        else{
           return (<Link to="/checkout">Buscar productos para comprar</Link>)
        }
    }
    

    return(
        <Layout>
            <Row>
                <Col>
                    {showItems()}
                </Col>
                <Col className="text-center">
                    {checkoutButton()}
                    <WishlistItems 
                    compareAmount={compare_amount.toFixed(2)}
                    amount={amount}
                    />
                </Col>
            </Row>
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.Auth.isAuthenticated,
    items: state.Cart.items,
    amount: state.Cart.amount,
    compare_amount: state.Cart.compare_amount,
    total_items: state.Cart.total_items
})

export default connect(mapStateToProps, {
    get_items, 
    get_total, 
    get_item_total,
    remove_item,
    update_item
}) (Cart);