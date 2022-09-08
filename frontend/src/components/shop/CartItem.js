import React, {useState, useEffect} from 'react';
import { setAlert } from "../../redux/actions/alert";
import {Button,Form} from 'react-bootstrap';

const CartItem = ({
    item,
    count,
    update_item,
    remove_item,
    render,
    setRender
}) => {
    const [formData, setFormData] = useState({
        item_count: 1
    });

    const { item_count } = formData;

    useEffect(() => {
        if(count){
            setFormData({...formData, item_count: count});
        }
    }, [count]);

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();

        const fetchData = async () =>{
            try{
                if(item.product.quantity >= item_count){
                    await update_item(item, item_count);
                }
                else{
                    setAlert('Not enough in stock', 'danger')
                }
                setRender(!render)
            }
            catch(err){
                
            }
        }

        fetchData();
    }

    const removeItemHandler = async () => {
        await remove_item(item);
        setRender(!render);
    };

    return(
        <Form onSubmit={e => onSubmit(e)}>
            <ul className="list-group list-group-flush">
                {/*<!-- list group -->*/}
                <li className="list-group-item py-3 py-lg-0 px-0 border-top">
                    {/*<!-- row -->*/}
                    <div className="row align-items-center">
                    <div className="col-3 col-md-2">
                        {/*<!-- img -->*/} 
                        <img 
                            src={item.product.photo} 
                            alt={item.product.name} 
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-4 col-md-5">
                        {/*<!-- title -->*/}
                        <a href="shop-single.html" className="text-inherit">
                            <h6 className="mb-0">{item.product.name}</h6>
                        </a>
                        <span><small className="text-muted">.98 / lb</small></span>
                        {/*<!-- text -->*/}
                        <div className="mt-2 small lh-1">
                        <Button 
                            variant="link" 
                            className="text-decoration-none text-inherit"
                            onClick={removeItemHandler}
                        >
                            <span className="me-1 align-text-bottom">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="14" height="14" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="feather feather-trash-2 text-success"
                                >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                </path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            </span>
                            <span className="text-muted">Remove</span>
                        </Button>
                        </div>
                        </div>
                    {/*<!-- input group -->*/}
                    <div className="col-3 col-md-3 col-lg-2">
                        {/*<!-- input -->*/}
                        <div className="input-group input-spinner">
                        <input 
                            type="button" 
                            defaultValue="-" 
                            className="button-minus btn btn-sm" 
                            data-field="quantity"
                        />
                        <input 
                            type="number" 
                            step="1" 
                            min="1" 
                            max="10" 
                            defaultValue={item_count} 
                            onChange={(e) => onChange(e)}
                            name='item_count'  
                            className="quantity-field form-control-sm form-input"
                        />
                        <input 
                            type="button" 
                            defaultValue="+" 
                            className="button-plus btn btn-sm " 
                            data-field="quantity"
                        />
                        </div>
                    </div>
                    <Button 
                        type="submit"
                        className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                    >
                        <span className="mx-2">Update Item</span>
                    </Button>
                    {/*<!-- price -->*/}
                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                        <span className="fw-bold">$5.00</span>
                    </div>
                    <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                        {     
                            item.product && 
                            item.product !== null &&
                            item.product !== undefined && 
                            item.product.quantity > 0 ? 
                        (
                            <>
                                <span>In Stock</span>
                            </>
                        ) 
                        : (
                            <>
                                <span>Out of Stock</span>
                            </>
                        )}
                    </p>
                    </div>
                </li>
            </ul>
        </Form>
    )
}

export default CartItem;