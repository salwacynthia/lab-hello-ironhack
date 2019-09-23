import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

const imgSrc = "images/ironhack-logo.svg";
const imgSrc2 = "images/icon1.png";
const imgSrc3 = "images/icon2.png";
const imgSrc4 = "images/icon3.png";
const imgSrc5 = "images/icon4.png";

// const myStyle = {
//     display: "flex",
//     alignContent: "left",
//     // marginBottom: "0",
//     height: "50px",
//     // padding:"0"
// };
const headerStyle = {
    backgroundColor: "rgb(32, 32, 73)",
    marginLeft: "150px",
    marginRight: "150px",
    marginTop:"0"
};
//render header
const FirstElement = (
    <div style= {headerStyle}> 
    <img src = {imgSrc}/>
    </div>
   
)
ReactDOM.render (FirstElement, document.getElementById("header"));
//render container
const containerStyle = {
    backgroundColor: "rgb(32, 32, 73)",
    height: "400px",
    color:"white",
    // margin: "0",
    marginTop:"0",
    marginLeft: "150px",
    marginRight: "150px",
    fontSize: "30px",
    padding:"0",
    
};
const SecondElement = (
    <div style = {containerStyle}>
        <h1>Say Hello to ReactJs</h1>
       <p>You will learn a Frontend framework  from scratch, to become an Ninka Developer</p>
        <button>Awesome!</button>
    </div>
)
ReactDOM.render (SecondElement, document.getElementById("container"));
// //render footer
const footerStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginLeft: "250px",
    marginRight: "250px",
    marginTop: "150px",
    padding:"0"
};

const NewStyle = {
    height: "150px",
};
const LastElement = (
    <div style = {footerStyle}>
          <div>
          <img src = {imgSrc2} style = {NewStyle}/>
          <h2>Declarative</h2>
          <p>React makes it painless to <br></br> create intereactive UIs</p>
          </div>
          <div>
          <img src = {imgSrc3}  style = {NewStyle}/>
          <h2>Components</h2>
          <p>Build encapsulated Components<br></br> that manage their state</p>
          </div>
          <div>
          <img src = {imgSrc4} style = {NewStyle}/>
          <h2>Single-way</h2>
          <p>A set of immutable values are passed <br></br> to the components</p>
          </div>
          <div>
          <img src = {imgSrc5} style = {NewStyle}/>
          <h2>JSX</h2>
          <p>Statically typed designed to <br></br> run on modern browsers</p>
          </div>
    </div>

)
ReactDOM.render (LastElement, document.getElementById("footer"));