import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import "./App.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Router>
          <Sidebar/>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Sidebar2 from './components/sidebar/Sidebar2';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/home/Home.jsx';
// import Topbar from "./components/topbar/Topbar";
// // import Reports from './pages/Reports';
// // import Products from './pages/Products';

// function App() {
//   return (
//     <>
//       <Router>
//         {/* <Topbar/> */}
//         <Sidebar2 />
//         <Switch>
//           <Route path='/' exact component={Home} />
//           {/* <Route path='/reports' component={Reports} />
//           <Route path='/products' component={Products} /> */}
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;