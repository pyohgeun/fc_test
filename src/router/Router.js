
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../page/main.js';
import AddBiz from '../page/addBiz.js';
import PrivateRoute from './privateRouter.js';
import {React, useState} from 'react';
import TestLogin from '../page/testLogin.js';

const FcRouter = () => {
    const [isAllowed, setIsAllowed] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isStepPass, setIsStepPass] = useState(false);
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="*" element={<Main />}></Route>
                    <Route exact path="/" element={<TestLogin />}/>
                    <Route path="/main" element={<PrivateRoute isAllowed={isAllowed}><Main /></PrivateRoute>}></Route>
                    <Route path="/addbiz" element={<PrivateRoute isAllowed={isAllowed}><AddBiz /></PrivateRoute>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default FcRouter