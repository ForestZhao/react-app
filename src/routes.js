import React, { Component } from 'react'
//import AuthRoute from '@/components/AuthRoute'
import {Route,Switch} from 'react-router-dom'

import Login from './pages/Login.jsx'
//import Register from '@/pages/Register.jsx'
import NotFound from './pages/NotFound.jsx'
// import Index from '@/pages/Index.jsx'

class Routes extends React.Component {
    render(){
        return (
            <div style={{height:"100%",overflow: 'hidden'}}>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/404' component={NotFound}></Route>
                </Switch>
            </div>
        )
    }
}

export default Routes