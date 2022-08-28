import React, {useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {check_authenticated, load_user, refresh} from '../redux/actions/auth';
import {connect} from 'react-redux';

import Navbar from '../components/navigation/CustomNavbar';
import Footer from '../components/footer/Footer';

const Layout = (props) => {

    useEffect(() => {
        props.refresh();
        props.check_authenticated();
        props.load_user();
    }, []);

    return(
        <div>
            <Navbar/>
            <ToastContainer autoClose={5000}/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default connect(null, {
    check_authenticated,
    load_user,
    refresh
}) (Layout)