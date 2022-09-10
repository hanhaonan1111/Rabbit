import React, {useEffect} from 'react';
import {Router, Route,} from 'react-router-dom'
import Layout from '@/pages/Layout'
import history from "@/utils/history";
import ScrollToTop from "@/utils/ScrollToTop";

function App() {
    return (
        <div>
            <Router history={history}>
                <ScrollToTop/>
                <Route path='/' component={Layout}></Route>
            </Router>
        </div>
    );
}

export default App;