// import '../commonSass/_common.scss';
import './_header.scss';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Button from '../component/button';
function Header(){
    return (
        <div>
            <div className="header">
                <Link to="/main">
                    <Button size="md" color="primary">
                        메인
                    </Button>
                </Link>
                <Link to="/addbiz">
                    <Button size="md" color="primary">
                        사업체추가
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Header;