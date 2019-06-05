import React, { Component } from 'react';
import Searchbar from './Searchbar';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.setZip = this.setZip.bind(this);

    }

    setZip() {
        let input = document.getElementById("value").value.toUpperCase();
        this.getZip(input);
    }

    getZip = (city) => {
        fetch(`http://ctp-zip-api.herokuapp.com/city/${city}`, { method: "GET" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ data })
            }).catch(error => { throw (error) })
    }

    prevent(e) {
        e.preventDefault();
    }

    render() {
        let zip = this.state.data.map((item) => (
            <div>{item}</div>
        ))
        const { data } = this.state;
        return (<div>
            <form onSubmit={this.prevent}>
                <input type="text" id="value" placeholder="Filter list"></input>
                <button type="submit" onClick={this.setZip}>button</button>
            </form>
            {zip}
        </div>);
    }
}

export default City;