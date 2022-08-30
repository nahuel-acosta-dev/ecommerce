import React, {useState, useEffect} from 'react';
import Layout from '../hocs/Layout';

import { connect } from 'react-redux';
import {get_categories} from '../redux/actions/categories'; 

import Ball from '../img/balls.jpg';
import Categories from '../components/shop/Categories'
import Store from '../components/shop/Store';
import Price from '../components/shop/Price';
import Rating from '../components/shop/Rating';

const Shop = ({get_categories, categories}) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    useEffect(() => {
        get_categories()
    }, [])

    return (
        <Layout>
        <div className="row">
        <div className="offset-lg-1 col-lg-3 col-12">
         <Categories categories={categories}/>
         <Store />
         <Price />
         <Rating />
         
         <div className="mb-8 position-relative">
            {/*<!-- Banner Design -->*/}
            {/*<!-- Banner Content -->*/}
            <div className="position-absolute p-5 py-8">
               <h3 className="mb-0">Fresh Fruits </h3>
               <p>Get Upto 25% Off</p>
               <a href="#" className="btn btn-dark">Shop Now<i className="feather-icon icon-arrow-right ms-1"></i></a>
            </div>
            {/*<!-- Banner Content -->*/}
            {/*<!-- Banner Image -->*/}
            {/*<!-- img -->*/}
            <img src={Ball} alt=""
               className="img-fluid rounded-3"/>
            {/*<!-- Banner Image -->*/}
           </div>
         </div>
        </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    categories: state.Categories.categories
})

export default connect(mapStateToProps,{
    get_categories
}) (Shop);