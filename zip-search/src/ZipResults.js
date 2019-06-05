import React, { Component } from 'react';

class ZipSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            state:this.props.state,
            title:this.props.title,
            city:this.props.city,
            location:this.props.location,
            population:this.props.population,
            wages:this.props.wages
        }
    }

    render(){
        return(
            <div className="card" style={{width:"18rem"}}>
                <div className="card-header">
                {this.state.title}
                </div>
                <ul className="list-unstyled text-left">
                    <li className="">
                        <ul className="">
                            <li className="">State: {this.state.state}</li>
                            <li className="">Location: ({this.state.location})</li>
                            <li className="">Population (estimated): {this.state.population}</li>
                            <li className="">Total Wages: {this.state.wages}</li>

                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ZipSearch
