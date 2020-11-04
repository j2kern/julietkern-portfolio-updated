import React from 'react';
import{BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth'
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import PlayPage from './pages/PlayPage';
import MemorymapsPage from './pages/MemorymapsPage';

class App extends React.Component {


  constructor(props){
    
    super(props);
    const firebaseConfig = {
      apiKey: "AIzaSyAJeX3nvMcN2c7LXZdP63dqr3RmndtC7HU",
      authDomain: "juliet-portfolio.firebaseapp.com",
      databaseURL: "https://juliet-portfolio.firebaseio.com",
      projectId: "juliet-portfolio",
      storageBucket: "juliet-portfolio.appspot.com",
      messagingSenderId: "838770796893",
      appId: "1:838770796893:web:2c44eab8096da65732e0b4",
      measurementId: "G-WP7H4NCKQT"
    };
    
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.analytics();
  }

  render(){
    return (
      <>
      <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'/>
      <link href="//fonts.googleapis.com/css?family=Open+Sans"  rel='stylesheet'/>
      <link href="//fonts.googleapis.com/css?family=Poppins"  rel='stylesheet'/>
      <Router>
          <Container>
            <Container> 
              <Row className="justify-content-md-center">
                <Col sm="12" lg="10">
                  <Navbar bg="transparent header-background" expand="lg" >
                      <Navbar.Brand className="juliet-kern">Juliet Kern</Navbar.Brand>
                      <Navbar.Toggle className="border-0" aria-control="navbar-toggle" />
                    <Navbar.Collapse id="navbar-toggle">
                      <Nav className="ml-auto">
                        <Link className="nav-link" to="/">About</Link>
                        <Link className="nav-link" to="/portfolio">Work</Link>
                        <Link className="nav-link" to="/play">Play</Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </Col>
              </Row>
            </Container>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/portfolio" render={() => <PortfolioPage />} />
            <Route path="/play" render={() => <PlayPage />} />
            <Route path="/memorymaps" render={() => <MemorymapsPage  />} />
            <Footer/>
         </Container>
      </Router>
      </>
    );
  }
}

export default App;
