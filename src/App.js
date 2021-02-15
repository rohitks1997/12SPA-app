import {
  Container, Jumbotron, Button,
  Navbar, Nav, Form, FormControl
} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              src="/flower.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> Flower
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>



        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>



      </Container>
    </Router>
  );
}

function Home() {
  return (
    <Jumbotron>
    <h1>Flower App</h1>
    <p>
      This should be the landing page (home page).
  </p>
    <Button className="btn-secondary">Sign Up</Button>
  </Jumbotron>
  )
}

function About() {
  return (
    <h1>About us page</h1>
  )
}

function Pricing() {
  return (
    <h1>Pricing</h1>
  )
}

export default App;
