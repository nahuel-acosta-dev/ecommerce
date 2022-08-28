import React, {useState, useEffect} from 'react';
import Layout from '../../hocs/Layout';
import {Button, Container, Form, Spinner} from 'react-bootstrap'; 
import {connect} from 'react-redux';
import { reset_password } from '../../redux/actions/auth';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

const ResetPassword = ({reset_password, loading}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        email: '',
      })
    
      const { 
        email,
      } = formData;

      const [requestSent, setRequestSent] = useState(false);
    
      const onChange = e => setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
    });

    const onSubmit = e => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    }

    if(requestSent && !loading) {
        return <Navigate to="/" />
    }

    return (
        <Layout>
            <Container>
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email"
                        value={email} onChange={e => onChange(e)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <hr/>
                    {!loading ?
                        <Button variant="primary" type="submit">
                            Enviar Email
                        </Button>
                    :    
                    <Button variant="primary">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Button>
                    }
                </Form>
            </Container>
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    loading: state.Auth.loading
})
export default connect(mapStateToProps, {
    reset_password
}) (ResetPassword);