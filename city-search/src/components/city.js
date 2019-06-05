import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        fetch("http://ctp-zip-api.herokuapp.com/city/:cityname", { method: "GET" })
            .then(res => res.json())
            .then(data => this.setState({ data }))
    }


    render() {
        return (<div>

        </div>);
    }
}

export default City;