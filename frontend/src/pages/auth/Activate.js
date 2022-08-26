import React, {useState} from 'react';
import Layout from '../../hocs/Layout';
import {useParams, Navigate} from 'react-router';
import { connect } from 'react-redux';
import { activate } from '../../redux/actions/auth';


import {Container, Button, Col, Row, Spinner} from 'react-bootstrap';


const Activate = ({activate, loading}) => {
    const params = useParams();

    const uid = params.uid;
    const token = params.token;

    console.log(uid);
    console.log(token);

    const [activated, setActivated] = useState(false);

    const activateAccount = () => {
        const uid = params.uid;
        const token = params.token;
        activate(uid, token);
        setActivated(true);
    }

    if(activated && !loading){
        return <Navigate to="/"/>
    }

    return(
        <Layout>
            <Container>
                <Row>
                    <Col xs={4}></Col>
                    <Col>{loading ? 
                    <Button style={{'marginTop': '50px'}}>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                   </Button> 
                   :
                    <Button style={{'marginTop': '50px'}}
                    onClick={activateAccount}
                    >
                        Activate Account
                    </Button> 
                    }
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </Container>
        </Layout>
    )

}

const mapStateToProps = state => ({
    loading: state.Auth.loading   
})

export default connect(mapStateToProps, {
    activate
}) (Activate);