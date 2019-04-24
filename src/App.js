import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button'
import {Row,Col,Alert} from 'reactstrap'


const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
      
       Reusable React Components
        
      </header>
      <Row>
        <Col lg="4" md="4" sm="4">
        <p style={{padding:"30px"}}>With all props diffrent value </p>
      <Button 
      className="Name"
       buttontext="Button1"
        padding="5px 5px" 
        fontSize="20px" 
      color="white"
      cursor="pointer"
      margin="100px"
       background="linear-gradient(40deg,#2096ff,#05ffa3)"
        border="2px solid lightgrey"
         borderRadius="5px"
         onClick={()=>{return(alert("i am from Button1"))}}
         url="https://www.mediclare.com/img/android%20(2).png"
      />
      </Col>
      <Col  lg="4" md="4" sm="4">
      <p style={{padding:"30px"}}>With all props diffrent value </p>
       <Button 
      className="Name"
       buttontext="Button2"
        padding="5px 5px" 
        fontSize="30px" 
      color="white"
      cursor="pointer"
      margin="100px"
       background="linear-gradient(40deg,#ffd86f,#fc6262)"
        border="2px solid lightgreen"
         borderRadius="5px"
         onClick={()=>{return(alert("i am from Button2"))}}
         url="https://www.mediclare.com/img/apple%20(1).png"
      />
      </Col>
      <Col  lg="4" md="4" sm="4">
      <p style={{padding:"30px"}}>with classname you can also put css here classname is passed from last component button3 </p>
       <Button 
      className="button3"
       buttontext="Button2"
       margin="100px"
       
      />
      
      </Col>
      </Row>

      <Alert color="danger">
      You can add or remove those props which you need as css
      <br/>
       Here Row Col and Alert are component from reactstarp 

      </Alert>
    </div>
  );
}

export default App;
