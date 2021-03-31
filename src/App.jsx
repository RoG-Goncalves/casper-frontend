import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Routes from './routes/Routes'

import Form from './components/Form'
import {AuthContext} from './Context/AuthContext/AuthContext'
import NewsPanel from './views/NewsPanel';
import Login from './components/Login';


const App = () => {
    return (
       <Login/>
    )
    }
export default App;