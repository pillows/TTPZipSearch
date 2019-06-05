import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ZipSearch from './ZipSearch'
import ZipResults from './ZipResults'
function App() {
  return (
    <div className="App">

        <Router>
          <div className="App">
            <Route exact path="/" component={ZipSearch} />
            <Route exact path="/results" component={ZipResults} />
          </div>
        </Router>
    </div>
  );
}

export default App;
