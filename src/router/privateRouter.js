import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from '../page/notFound.js';
const PrivateRoute = ({isAllowed, children}) => {
    return (
        !!isAllowed ? children : <NotFound />
    )
}
export default PrivateRoute