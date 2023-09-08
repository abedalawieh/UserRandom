import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RecoveryContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { keyword, setKeyword, loggedin, setLoggedIn } =
    useContext(RecoveryContext);
  const handleLogout = () => {
    sessionStorage.removeItem("loggedin");

    sessionStorage.removeItem("id");
    sessionStorage.removeItem("newUsers");
    setLoggedIn(false);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Random User App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/newUsers">View All</Nav.Link>
                <Nav.Link href="/newUsersRequest">Add New</Nav.Link>
                <Nav.Link href="/" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
