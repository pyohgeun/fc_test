import { React, useState, useEffect } from 'react';
import './_TestLogin.scss';
import InputText from '../component/inputText';
import InputPassword from '../component/inputPassword';
import $ from 'jquery';
import Button from '../component/button';
const TestLogin = () => {
    useEffect(() => {
    });
    return(
        <div className="login pt-30">
            <div className="mb-30">
                <InputText placeholder="이메일주소">
                    <label className="input-label mb-6">아이디</label>
                </InputText>
            </div>
            <div className="">
                <InputPassword>
                    <label className="input-label mb-6">비밀번호</label>
                </InputPassword>
            </div>
            <div className="mt-50">
                <Button size="wide" color="primary" disabled="true">로그인</Button>
            </div>
        </div>
    )
}
export default TestLogin