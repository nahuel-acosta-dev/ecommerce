import React, {useState, useEffect} from 'react';
import {Button, Container, Form, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {Navigate} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/auth';
import {get_categories} from '../../redux/actions/categories';
import {get_search_products} from '../../redux/actions/products';
import CustomAlert from '../extras/CustomAlert';
 
const CustomNavbar = ({
  isAuthenticated,
  user, 
  logout,
  get_categories,
  categories,
  get_search_products,
  total_items
}) => {

  const [redirect, setRedirect] = useState(false);

  const [render, setRender] = useState(false);
  const [formData, setFormData] = useState({
    category_id: 0,
    search: ''
  });

  const {category_id, search} = formData;

  useEffect(() => {
    get_categories();
  }, [])



  const onChangeHandler = e => setFormData({...formData, [e.target.name]: e.target.value});

  const submit = e => {
    e.preventDefault();
    console.log(search, category_id)
    get_search_products(search, category_id);
    setRender(!render);
  }

  if(render){
    return <Navigate to="/search" />
   }
 

  const logoutHandler = () => {
    logout();
    setRedirect(true);
  }

  if (redirect){
    window.location.reload(false);
    window.scrollTo(0, 0);
    return <Navigate to='/' />;
  }


  const authLinks = () => {
    return(
      <NavDropdown title="Dropdown" id="basic-nav-dropdown" variant="success"
      style={{color: 'white'}}
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <Button 
        onClick={logoutHandler}
        variant="link" 
        className="text-decoration-none text-dark">
          Sign Out
        </Button>
      </NavDropdown>)
  }


  const guestLinks = () => {
    return(
      <div className="d-flex">
        <Button variant="outline-info" style={{'marginRight': "10px"}}>Sign in</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    )
  }

    return(
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">Cart 
              <span className="text-danger"> {
              total_items < 10 ? 
                total_items
                :
                <>+9</>
              }</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <Form className="d-flex" onSubmit={e => submit(e)}>
            <Form.Select aria-label="Default select example" 
            onChange={e => onChangeHandler(e)}
            name="category_id">
              <option value={0}>All</option>
              {
                categories &&
                categories !== null &&
                categories !== undefined &&
                categories.map((category, i) => (
                  <option key={i} value={category.id}>
                    {category.name}
                  </option>
                ))
              }
            </Form.Select>
              <Form.Control
                type="search"
                name="search"
                onChange={e => onChangeHandler(e)}
                value={search}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                required
              />
              <Button variant="outline-success" type="submit">Search</Button>
          </Form>
          </Nav>
          {
            isAuthenticated ?
            authLinks()
            :
            guestLinks()
          }
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <CustomAlert />
      </>
    )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
  categories: state.Categories.categories,
  total_items: state.Cart.total_items
})


export default connect(mapStateToProps,{
  logout,
  get_categories,
  get_search_products
})(CustomNavbar);