import React, {useState, useEffect} from 'react';
import Layout from '../../hocs/Layout';
import {Button, Container, Form} from 'react-bootstrap'; 
import {connect} from 'react-redux';
import { signup } from '../../redux/actions/auth';

const Signup = ({signup}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [accountCreated, setAccountCreated] = useState(false);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
      })
    
      const { 
        first_name,
        last_name,
        email,
        password,
        re_password
      } = formData;
    
      const onChange = e => setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
    });

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        signup(
            first_name,
            last_name,
            email,
            password,
            re_password
        )
        setAccountCreated(true);
    }

    console.log(process.env.REACT_APP_API_URL)

    return (
        <Layout>
            <Container>
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>Ingresa tu nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu nombre" name="first_name"
                        value={first_name} onChange={e => onChange(e)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Ingresa tu Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu apellido" name="last_name"
                        value={last_name} onChange={e => onChange(e)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
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
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="re_password"
                        value={re_password} onChange={e => onChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
            </Container>
        </Layout>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {
    signup
}) (Signup);