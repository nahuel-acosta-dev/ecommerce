import React from 'react';
import {Link} from 'react-router-dom';


const Card = ({id, name, description, img, price, comparePrice}) => {

    return(
        <>
        <div className="col-lg-4">
            <div className="card card-product">
                <div className="card-body">
                <div className="text-center position-relative ">
                    <div className=" position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                    </div>
                    <a href="#!"> <img src={img} alt="Grocery Ecommerce Template"
                        className="mb-3 img-fluid"/></a>
                    <div className="card-product-action">
                    <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i
                        className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i></a>
                    <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i
                        className="bi bi-heart"></i></a>
                    <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i
                        className="bi bi-arrow-left-right"></i></a>
                </div>
                    </div>
                <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>{name}</small></a></div>
                <h2 className="fs-6"><Link to={`product/${id}`} className="text-inherit text-decoration-none">Haldiram's
                    Sev Bhujia</Link></h2>
                <div>
                <small className="text-warning"> <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5(149)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div><span className="text-dark">${price}</span> <span
                    className="text-decoration-line-through text-muted">${comparePrice}</span>
                    </div>
                    <div><a href="#!" className="btn btn-primary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-plus">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg> Add</a></div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}



export default Card;
