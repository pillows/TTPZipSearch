import React, { Component } from 'react';
import ZipResults from './ZipResults'
class ZipSearch extends Component {


    constructor(props){
        super(props);
        this.state = {
            results:[]
        }
        this.zipQuery = this.zipQuery.bind(this)

    }

    componentWillMount(){

    }

    zipQuery(){
        let zip = document.getElementById("zip-input").value
        // console.log(zip)

        // Boooo javascript...
        const thisCopy = this;
        fetch('http://ctp-zip-api.herokuapp.com/zip/'+zip)
          .then(function(response) {
            return response.json();
          })
          // When the real data is sent and readable
          .then(function(myJson) {
              // console.log(myJson)
              let rows = [];
              for (let i = 0; i < myJson.length; i++) {
                  console.log(myJson[i])
                  const props = {
                      state:myJson[i].State,
                      title:myJson[i].LocationText,
                      city:myJson[i].City,
                      location:myJson[i].Long + ", " + myJson[i].Lat,
                      population:myJson[i].EstimatedPopulation,
                      wages:myJson[i].TotalWages
                  }
                  rows.push(<ZipResults {...props} key={i}/>);
              }
              thisCopy.setState({results:rows})
          });





    }

    preventSubmit(e){
        e.preventDefault()
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-nav navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">Zip Search</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <main role="main" className="container">
                    <div className="starter-template">
                    <form onSubmit={this.preventSubmit} >
                      <div className="form-group">
                        <label>Zip Code</label>
                        <input type="number" className="form-control" id="zip-input"  placeholder="10036"/>

                      </div>

                      <button type="submit" className="btn btn-primary" onClick={this.zipQuery}>Submit</button>
                      <br />
                       <br />
                      <div id="results" className="mx-auto" style={{width: "300px"}}>
                        {this.state.results}
                      </div>

                    </form>
                    </div>

                </main>
            </div>
        )
    }
}

export default ZipSearch
