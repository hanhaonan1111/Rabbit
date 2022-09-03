import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import Layout from '@/pages/Layout'

function App() {
    return (
        <div>
            <Router>
                <Route path='/' component={Layout}></Route>
            </Router>
        </div>
    );
}

export default App;