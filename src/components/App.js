import React, { Component } from 'react';
import '../css/App.scss';
import {Button,Navbar,Form,FormControl,Nav} from 'react-bootstrap';
import AppPageRouter from './AppRouter'

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">Sinight</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#/">留言板</Nav.Link>
            <Nav.Link href="#/about">关于</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="搜索" className="mr-sm-2" />
            <Button variant="outline-info">搜索</Button>
          </Form>
        </Navbar>

        <div className="content">
          <AppPageRouter/>
        </div>
        
      </div>
    );
  }
}

export default App;
