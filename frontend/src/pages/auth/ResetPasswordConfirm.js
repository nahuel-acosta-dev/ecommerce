import React, {useState, useEffect} from 'react';
import Layout from '../../hocs/Layout';
import {Button, Container, Form, Spinner} from 'react-bootstrap'; 
import {connect} from 'react-redux';
import { reset_password_confirm } from '../../redux/actions/auth';
import { Navigate, useParams } from 'react-router';


const ResetPasswordConfirm = ({reset_password_confirm, loading}) => {

    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
      })
    
      const { 
        new_password,
        re_new_password
      } = formData;

      const [requestSent, setRequestSent] = useState(false);
    
      const onChange = e => setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
    });

    const onSubmit = e => {
        e.preventDefault();
        const uid = params.uid;
        const token = params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        if(new_password === re_new_password){
            setRequestSent(true);
        }
    }

    if(requestSent && !loading){
        return <Navigate to="/" />
    }

    return (
        <Layout>
            <Container>
                <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="new_password"
                        value={new_password} onChange={e => onChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" name="re_new_password"
                        value={re_new_password} onChange={e => onChange(e)}
                        />
                    </Form.Group>
                    <hr/>
                    {!loading ?
                        <Button variant="primary" type="submit">
                            Cambiar Contraseña
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
    reset_password_confirm
}) (ResetPasswordConfirm);