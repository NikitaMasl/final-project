import React from 'react';
import{
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Main from './Main';
import SideBar from './SideBar';
import Pokemon from './Pokemon'
import '../App.scss';
import CapturePok from './CapturePok';


class App extends React.Component { 
  render(){  
    return (
    <div className="App">
      <Router>
        <SideBar />
        <Route exact path="/" component={Main} />
        <Route path="/pokemon/:id/:name" component={Pokemon} />
        <Route path="/capture" component={CapturePok} />
      </Router>
    </div>
  );
}
}

export default App;


