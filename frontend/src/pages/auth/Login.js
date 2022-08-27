import React, {useState, useEffect} from 'react';
import Layout from '../../hocs/Layout';
import {Button, Container, Form, Spinner} from 'react-bootstrap'; 
import {connect} from 'react-redux';
import { login } from '../../redux/actions/auth';
import {Navigate} from 'react-router';

const Login = ({login, loading}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
    
      const { 
        email,
        password,
      } = formData;

      const [accessAcount, setAccessAcount] = useState(false);
    
      const onChange = e => setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
    });

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        login(
            email,
            password,
        )
        setAccessAcount(true);
        window.scrollTo(0, 0);
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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"
                        value={password} onChange={e => onChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    {!loading ?
                        <Button variant="primary" type="submit">
                            Submit
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
    login
}) (Login);