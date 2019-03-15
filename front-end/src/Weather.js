import React, { Component } from 'react';
// import $ from 'jquery'
import axios from 'axios';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		const axiosPromise = axios.get(url);

		axiosPromise.then((weatherData) =>{
			console.log(weatherData);
			this.setState({
				icon: weatherData.data.weather[0].icon,
				temp: weatherData.data.main.temp,
				temp_min: weatherData.data.main.temp_min,
				temp_max: weatherData.data.main.temp_max,
				desc: weatherData.data.weather[0].description,
			})
		});
	}
weatherSearch = (e)=>{
  e.preventDefault();
   const city = document.getElementById('city').value;

   var url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=482c145ce8edf1d69ea5168f9d06460c`;
   const axiosPromise = axios.get(url);

   axiosPromise.then((weatherData) =>{
     console.log(weatherData);
     this.setState({
       icon: weatherData.data.weather[0].icon,
       temp: weatherData.data.main.temp,
       temp_min: weatherData.data.main.temp_min,
       temp_max: weatherData.data.main.temp_max,
       desc: weatherData.data.weather[0].description,
     })
   });

}
	render(){
		let iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;
		return(
			<div className= "style">
        <form onSubmit={this.weatherSearch}id="weather-form">
          <input type="text"placeholder="enter city" id="city" />
          <button className="btn btn primary">City</button>
        </form>

				<h4>Real-time Weather Forecast!</h4>
				<h4><img src={iconUrl} /></h4>
				<h4>{this.state.temp}</h4>
				<h4>{this.state.temp_min}</h4>
				<h4>{this.state.temp_max}</h4>
				<h4>{this.state.desc}</h4>
			</div>
		);
	}
}

export default Weather;
