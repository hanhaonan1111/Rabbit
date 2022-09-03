import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './assets/font/iconfont.css'
import "@/assets/style/comment.scss";

import {Provider} from 'react-redux'
import store from '@/store'

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))

