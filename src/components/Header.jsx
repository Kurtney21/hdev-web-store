import { Button, Container, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import logo from "../assets/logo-no-background.png";

// Styled component for logo
const Logo = styled.img`
  width: 100px;
`;

// Styled Component for active nav-link
const NavLink = styled(Link)`
  &.active {
    border-bottom: 2px solid rgb(240, 248, 255);
  }
`;

// Styled Component for Nav items
const NavItem = styled.li`
  margin-left: 15px;
`;

function Header() {
  // Get current loaction to determine active nav link
  const location = useLocation();

  // Retrieve cart items from Redux store and calculcate item count
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store
  const itemCount = cartItems.length; // Calculate the number of items in the cart
  const username = useSelector((state) => state.user.username); // Get username from Redux store

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-bg py-4">
        <Container fluid>
          <NavLink className="navbar-brand" to="/">
            <Logo src={logo} alt="Logo" />
          </NavLink>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <NavItem className="nav-item">
                <NavLink
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink
                  className={`nav-link ${
                    location.pathname === "/products" ? "active" : ""
                  }`}
                  to="/products"
                >
                  Products
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink
                  className={`nav-link ${
                    location.pathname === "/cart" ? "active" : ""
                  }`}
                  to="/cart"
                >
                  Cart{" "}
                  {itemCount > 0 && (
                    <Badge pill bg="danger">
                      {itemCount}
                    </Badge>
                  )}
                </NavLink>
              </NavItem>
            </ul>
            <div className="d-flex">
              {username ? (
                `Welcome, ${username}!`
              ) : (
                <div className="d-flex">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>{" "}
                  <NavLink className="nav-link ms-2" to="/register">
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
