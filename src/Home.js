import {
    Jumbotron, Button
  } from 'react-bootstrap';
  
  export default function Home() {
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
  