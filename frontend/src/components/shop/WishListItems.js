import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const WishlistItems = ({compareAmount, amount, children}) => {

    return(
        <div className="col-12">
            {/*<!-- card -->*/}
            <div className="mb-5 card mt-6">
                <div className="card-body p-6">
                {/*<!-- heading -->*/}
                <h2 className="h5 mb-4">Summary</h2>
                <div className="card mb-2">
                    {/*<!-- list group -->*/}
                    <ul className="list-group list-group-flush">
                        {/*<!-- list group item -->*/}
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="me-auto">
                            {children}
                        </div>
                        <span>${compareAmount}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="me-auto">
                            <div>Item Subtotal</div>
                        </div>
                        <span>${compareAmount}</span>
                        </li>
                        {/*<!-- list group item -->*/}
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                                <div>Service Fee</div>
                            </div>
                            <span>$3.00</span>
                        </li>
                {/*<!-- list group item -->*/}
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="me-auto">
                                <div className="fw-bold">Subtotal</div>
                            </div>
                            <span className="fw-bold">$67.00</span>
                        </li>
                    </ul>
                </div>
                <div className="d-grid mb-1 mt-4">
                    {/*<!-- btn -->*/}
                    <Link to="/checkout"
                    className="btn btn-primary 
                    btn-lg d-flex 
                    justify-content-between align-items-center 
                    text-decoration-none"
                    >
                        Go to Checkout <span className="fw-bold">${amount}</span>
                    </Link>
                </div>
                {/*<!-- text -->*/}
                <p>
                    <small>By placing your order, you agree to be bound by the Freshcart 
                    <a href="#!">Terms of Service</a>
                        and 
                    <a href="#!">Privacy Policy.</a> </small>
                </p>
            {/*<!-- heading -->*/}
                <div className="mt-8">
                    <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                    <form>
                        <div className="mb-2">
                            {/*<!-- input -->*/}
                            <label htmlFor="giftcard" className="form-label sr-only">Email address</label>
                            <input type="text" className="form-control" id="giftcard" placeholder="Promo or Gift Card"/>
                        </div>
                        {/*<!-- btn -->*/}
                        <div className="d-grid"><button type="submit" className="btn btn-outline-dark mb-1">Redeem</button></div>
                        <p className="text-muted mb-0"> <small>Terms & Conditions apply</small></p>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default WishlistItems;