import React, { Component } from "react";
import Post from "./post";
import axios from 'axios';

// handle button click of login form
async function recommended() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/book/recommended');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// get age from access token -> data
async function recommendedByAge() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/book/age/' + localStorage.getItem('email'));
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// get country from access token -> data
async function recommendedByCountry() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/book/country/' + localStorage.getItem('email'));
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// handle button click of login form
async function getTopData() {
  try {
    const response = await axios.get('http://127.0.0.1:5001/book/top');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default class Home extends Component {

  componentDidMount =()=>{
      
if(localStorage.getItem('email')){
  this.setState({
    visibleComponent: true
  });
    recommended().then(response => {
      this.setState({
        recommend: response.data
      });
    });
    recommendedByAge().then(response => {
      this.setState({
        booksByAgs: response.data
      });
    });
    recommendedByCountry().then(response => {
      this.setState({
        booksByCountry: response.data
      });
    });
  }
    getTopData().then(response => {
      this.setState({
        books: response.data
      });
    });

  }

  state = {visible: false,visibleComponent: false,recommend: [],booksByAgs: [], booksByCountry: [], searchDataBooks: [],books: []};

render() {


return (
<div>

<div className="row justify-content-center theme" style={{display:"block"}}>
    <div className="col-md-12">    
        <div className="jumbotron jumbotron-fluid">
            <div className="container" style={{display:"block"}}>
              <div className="row">
                <div className="col-md-2">
                  <img src="book.svg" className="rounded position-relative icone-play" alt=""/>
                </div>
                <div className="col-md-10">
                  <h1 className="display-4 text-center text-white font-weight-bold">Read of books.</h1>
                  <p className="lead text-center text-white">you can do alot of thing on bookland,Read and rating books even abonmment and save books you love it...</p>                </div>
              </div>
            </div>
        </div>
    </div>

</div>

<div className="col-md-12 bg-white">    
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row">
              
{
  this.state.visibleComponent
    ? <Post name="Recommended" link="/book/single/" elements={this.state.recommend}></Post>
    : null
}     

{
  this.state.visibleComponent
    ? <Post name="Users your age like this" link="/book/single/" elements={this.state.booksByAgs}></Post>
    : null
}       

{
  this.state.visibleComponent
    ? <Post name="Users in your area like" link="/book/single/" elements={this.state.booksByCountry}></Post>
    : null
}
                <Post name="Top rating" link="/book/single/" elements={this.state.books}></Post>
            </div>
        </div>
    </div>
</div>

</div>

);
}
}