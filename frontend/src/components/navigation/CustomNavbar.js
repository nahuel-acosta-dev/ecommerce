import React, {useState, useEffect} from 'react';
import {Button, Container, Form, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
  const [window, setWindow] = useState(false);

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
      <NavDropdown title={<i className="bi bi-person"></i>} id="basic-nav-dropdown" variant="success"
      style={{color: 'white'}}>
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
      <NavDropdown title={<i className="bi bi-person"></i>} id="basic-nav-dropdown" variant="success"style={{color: 'white'}}>
        <li>
          <Link to="/login" className="dropdown-item">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="dropdown-item">
            Register
          </Link>
        </li>
      </NavDropdown>
    )
  }

  const navSearch = () => {
    return(
      <NavDropdown title={<i className="bi bi-search"></i>} id="basic-nav-dropdown" variant="success"
      style={{color: 'white'}}>
        
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
        
      </NavDropdown>
    )
  }

    return(
      <div  className={`${window && "fixed-top"}`}>
      <Navbar variant="white" className="navbar" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            Tongo
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"></Nav>
          <Nav
            className="me-auto my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">Sale</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">About</Link>
            </li>
          </Nav>
          <Nav>
              <li className="nav-item">
                  {navSearch()}
              </li>
              <li className="nav-item">
                {isAuthenticated ?
                  authLinks()
                  :
                  guestLinks()
                }
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link"> 
                  <i className="bi bi-heart"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link"> 
                  <span>            
                    <i className="bi bi-cart"> 
                      <i className="text-white navbar__items text-bg-dark">
                        {
                        total_items < 10 ? 
                            total_items
                          :
                          <>
                            +9
                          </> 
                        }
                      </i>
                    </i>
                  </span>  
                </Link>
              </li>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      {window && <Button onClick={() => setWindow(!window)}>
        abrir
      </Button>}
        <Navbar className={`window bg-dark ${window && "window_expanded"}`}>
              {
                window && <>hola</>
              }
        </Navbar>
      <CustomAlert />
      </div>
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