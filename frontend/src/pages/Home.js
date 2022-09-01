import Layout from "../hocs/Layout"
import { connect } from 'react-redux';
import { 
    get_products_by_arrival, 
    get_products_by_sold 
} from '../redux/actions/products';
import Card from '../components/shop/Card';
import {Container, Row, Col} from 'react-bootstrap';
import { useEffect } from "react";

const Home = ({
    get_products_by_arrival, 
    get_products_by_sold,
    products_arrival,
    products_sold
}) => {

    console.log(products_arrival)

    console.log(products_sold)

    useEffect(() => {
        window.scrollTo(0, 0);

        get_products_by_arrival();
        get_products_by_sold();
    }, []);
    

    return(
        <Layout>
            <Container>
                <Row>
                    <Col xs={6}>
                        Lo mas Reciente
                        {products_arrival && products_arrival.map((product, i) => (
                            <Card key={i} name={product.name} description={product.description} 
                            img={product.get_thumbnail} price={product.price} comparePrice={product.compare_price}/>
                        ))

                        }
                    </Col>
                    <Col xs={6}>
                        Lo mas vendido
                        {products_sold && products_sold.map((product, i) => (
                            <Card key={i} name={product.name} description={product.description} 
                            img={product.get_thumbnail} price={product.price} comparePrice={product.compare_price}/>
                        ))

                        }
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

const mapStateToProps = state =>  ({
    products_arrival: state.Products.products_arrival,
    products_sold: state.Products.products_sold,
})

export default connect(mapStateToProps,{
    get_products_by_arrival, 
    get_products_by_sold,
}) (Home);