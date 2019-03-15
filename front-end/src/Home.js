import React, { Component } from 'react';

import Carousel from './Carousel';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            task: "",
            date: ""
        }
        this.inputName = this.inputName.bind(this)
        this.inputDate = this.inputDate.bind(this)
        this.inputTask = this.inputTask.bind(this)

    }

    addNewTask = (event)=>{
        event.preventDefault();
        console.log("someone submitted the form!!");
        this.props.addNewTask(this.state.name, this.state.task, this.state.date);
    }
    inputName = (event)=>{
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }
    inputTask = (event)=>{
        console.log(event.target.value)
        this.setState({
            task: event.target.value
        })
    }
    inputDate = (event)=>{
        this.setState({
            date: event.target.value
        })
    }




  render(){
    return(
      <div className="carousel-container">

        <Carousel />
      </div>
    );
  }
}

export default Home;
