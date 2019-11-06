import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
var createReactClass = require('create-react-class');


// const Home = createReactClass({
//   render() {
//         return (
//             <div>
//                 <a>去detail</a>
//                 <Route exact path="/detail" component={Detail}/>
//             </div>
//         )
//   }
// })

const Detail = createReactClass({
   render() {
        return (
            <div>
                <a>回到home</a>
            </div>
        )
    }
})

class Home extends React.Component {
    render() {
        return (
             <div>
                <div>
                  <Link to="/detail">Detail</Link>
                </div>
                <div>
               
                  <Route exact path="/detail" component={Detail}/>
                </div>
              </div>
            // <div>
            //     <a>去detail</a>
            //     <Route  path="/detail" component={Detail}/>
            // </div>
        )
  }

}

export default Home;
