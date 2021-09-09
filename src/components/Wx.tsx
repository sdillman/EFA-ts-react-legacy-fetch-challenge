//OpenWeather API

import React, { Component } from 'react';
// import { render } from 'react-dom';
import '../index.css';
//Geolocation API

export default class Wx extends Component {

    constructor(props : string) {
        super(props);
        // 'this.state' to create the initial state of this component
        // example - this.state = { simpleMessage: "Welcome user!!!" };
        this.state = { lat: '', lon: ''};
    };
    

    getLocation = async () => {
        // const that = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
            this.setState({
                lat: (position.coords.latitude).toFixed(3),
                lon: (position.coords.longitude).toFixed(3)
            });
        });
    };

    
    render () {
        return (
            <div>
                <div>
                    <p>fml</p>
                </div>
            </div>
        );
    };
};




