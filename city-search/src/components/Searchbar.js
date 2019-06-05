import React, { Component } from 'react';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} >
                    <input value={this.props.value} onChange={this.props.handleChange} placeholder="Filter list"></input>
                    <input type="submit" value="Submit"></input>
                </form>

            </div>
        );
    }
}

export default Searchbar;
//onChange={props.updateChar}