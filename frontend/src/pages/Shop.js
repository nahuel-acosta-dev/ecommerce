import React, {useState, useEffect} from 'react';
import Layout from '../hocs/Layout';

import { connect } from 'react-redux';
import {get_categories} from '../redux/actions/categories'; 
import {get_products, get_filtered_products} from '../redux/actions/products'; 

import {Row, Col} from 'react-bootstrap';
import Card from '../components/shop/Card';

import Ball from '../img/balls.jpg';
import Categories from '../components/shop/Categories'
import Store from '../components/shop/Store';
import Price from '../components/shop/Price';
import Rating from '../components/shop/Rating';

const Shop = ({get_categories, 
    categories, 
    get_products, 
    products,
    get_filtered_products,
    filtered_products

}) => {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [filtered, setFiltered] = useState(false);
    const [formData, setFormData] = useState({
        category_id: '0',
        price_range: 'Any',
        sortBy: 'created',
        order: 'desc'
    });

    const {
        category_id,
        price_range,
        sortBy,
        order
    } = formData;

    useEffect(() => {
        get_categories();
        get_products();
        window.scrollTo(0,0);
    }, [])

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const submit = e => {
        e.preventDefault();
        get_filtered_products(category_id, price_range, sortBy, order);
        setFiltered(true);
    }

    const showProducts = () => {
        let results = [];
        let display = [];

        if (filtered_products && filtered_products !== null
            && filtered_products !== undefined && filtered) {
                filtered_products.map((product, i) => {
                    return display.push(
                        <Col key={i}>
                           <Card key={i} id={product.id} name={product.name} description={product.description} 
                            img={product.get_thumbnail} price={product.price} comparePrice={product.compare_price}/>
                        </Col>
                    )
                })
            }
        else if(!filtered && products &&
                products !== null && 
                products !== undefined
            ){
                products.map((product, i) => {
                    return display.push(
                        <Col key={i}>
                           <Card key={i} id={product.id} name={product.name} description={product.description} 
                            img={product.get_thumbnail} price={product.price} comparePrice={product.compare_price}/>
                        </Col>
                    )
                })
            }

            for(let i = 0; i< display.length; i += 3){
                results.push(
                    <Row key={i}>
                        {display[i] ? display[i] : <div></div>}
                        {display[i + 1] ? display[i + 1] : <div></div>}
                        {display[i + 2] ? display[i + 2] : <div></div>}
                    </Row>
                )
            }

            return results;
    }

    return (
        <Layout>
        <Row>
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
            <Col>
                    {products && showProducts()}
            </Col>
        </Row>
        </Layout>
    )
}

const mapStateToProps = state => ({
    categories: state.Categories.categories,
    products: state.Products.products,
    filtered_products: state.Products.filtered_products
})

export default connect(mapStateToProps,{
    get_categories, 
    get_products,
    get_filtered_products
}) (Shop);