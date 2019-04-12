import ReactDOM from 'react-dom';
import React from 'react';
import KandyKorner from "./components/KandyKorner"
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';


ReactDOM.render(
<Router>
    <KandyKorner />
    </Router>,
    document.getElementById('root')
    );
