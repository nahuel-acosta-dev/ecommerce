import React from 'react';

const Footer = () => {

    return(
        <>
        <footer className="py-5">
            <div className="row">
                <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">About</a></li>
                </ul>
                </div>

                <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">About</a></li>
                </ul>
                </div>

                <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="http" className="nav-link p-0 text-muted">About</a></li>
                </ul>
                </div>

                <div className="col-4 offset-1">
                <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of whats new and exciting from us.</p>
                    <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                    <button className="btn btn-primary" type="button">Subscribe</button>
                    </div>
                </form>
                </div>
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>© 2021 Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-dark" href="http"><i className="bi bi-twitter"></i></a></li>
                <li className="ms-3"><a className="link-dark" href="http"><i className="bi bi-instagram"></i></a></li>
                <li className="ms-3"><a className="link-dark" href="http"><i className="bi bi-facebook"></i></a></li>
                </ul>
            </div>
        </footer>

        {/*<footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="http" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="http" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="http" className="nav-link px-2 text-muted">Pricing</a></li>
                <li className="nav-item"><a href="http" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="http" className="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p className="text-center text-muted">© 2021 Company, Inc</p>
    </footer>*/}</>
    
    )
}

export default Footer;