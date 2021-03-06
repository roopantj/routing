import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    } from 'reactstrap';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';


const Header = props =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <Navbar color="primary" light expand="md">
         <NavbarBrand href='/' style={{cursor:'pointer'}}><h3>React Routing</h3></NavbarBrand>
         <NavbarToggler onClick={toggle} />
         <Collapse isOpen={isOpen} navbar>
          <Nav className={styles.links} navbar>
            <NavItem>
              <NavLink activeClassName={styles.active} to='/users'>Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName={styles.active} to='/add-user'>Add User</NavLink>
            </NavItem>
          </Nav> 
          </Collapse>
         </Navbar>
    )
}

export default Header;