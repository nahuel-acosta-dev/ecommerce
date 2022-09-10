import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { check_authenticated, load_user, refresh } from '../redux/actions/auth';
import {
    get_items,
    get_total,
    get_item_total
} from "../redux/actions/cart";


import { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/navigation/CustomNavbar';
import Footer from '../components/footer/Footer';


const Layout = (props) => {

    useEffect(() => {
        props.refresh()
        props.check_authenticated()
        props.load_user()
        props.get_items()
        props.get_total()
        props.get_item_total()
    }, []);

    return(
        <div>
            <Navbar/>
            <ToastContainer autoClose={4000} />
            {props.children}
            <Footer/>
        </div>
    )
}


export default connect(null, {
    check_authenticated,
    load_user,
    refresh,
    get_items,
    get_total,
    get_item_total,
}) (Layout)