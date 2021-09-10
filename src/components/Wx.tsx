//OpenWeather API

import React, { Component } from 'react';
// import { render } from 'react-dom';
import '../index.css';

type WxState = {
    lat: string;
    lon: string;
    temperature: string;
    feelsLike: string;
};  // maybe if a build out a type to encompass my state vars??


const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const key = '0c0cca99463c77df2df1120359bcb1bd';

export default class Wx extends Component <{}, WxState> {

    constructor(props : string) {
        super(props);
        // 'this.state' to create the initial state of this component
        // example - this.state = { simpleMessage: "Welcome user!!!" };
        this.state = { lat: '', lon: '', temperature: '', feelsLike: ''};
    };
    

    getLocation = async () => {
        
        // const that = this;

        const cb = (position: GeolocationPosition) => {
            this.setState({
                lat: (position.coords.latitude).toFixed(3),
                lon: (position.coords.longitude).toFixed(3)
            });  
        };  // doing this as a callback (instead of the way we originally did it in our 72-hour challenge) so I can employ Typescript and fix my 'this' problem

        navigator.geolocation.getCurrentPosition(cb.bind(this));
    };

    

    openWeather = () => {
        
        this.getLocation();
        const fetchResults = () => {
            let url = `${baseURL}?lat=${this.state.lat}&lon=${this.state.lon}&units=imperial&appid=${key}`
    
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    temperature: (data.current.temp),
                    feelsLike: (data.current.feels_like)
                });
            })
            .catch(err => console.log(err));
        };
        fetchResults();
        
    };

    componentDidMount() {
        this.openWeather();
    }

    render (){
        return (
            <div>
                <h2>
                    Local Weather
                </h2>
                <div>
                    <p>Local weather conditions as you head out today:</p>
                </div>
                <p>
                    Current Temperature: { this.state.temperature } 
                    <br />
                    Feels Like: { this.state.feelsLike }
                </p>
            </div>
        );
    };
};
