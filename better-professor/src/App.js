import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from './components/Login';
import StudentList from './components/StudentList';
import CreateAccount from './components/CreateAccount';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/login' component={Login} />
        <Route exact path='/create-account' component={CreateAccount} />
        <Route exact path='/student-list' component={StudentList} />
        {/* <Redirect from="/" to="/login" /> */}
      </div>
    </Router>
  )
}

export default App;


