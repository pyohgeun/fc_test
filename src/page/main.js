import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../layout/header';
import Card from '../component/card';
import Button from '../component/button';
import img_my_taxbill_info from '../image/img_my_taxbill_info.png';
import img_my_taxbill_list from '../image/img_my_taxbill_list.png';
import img_cash_receipt_list from '../image/img_cash_receipt_list.png';
import './_main.scss';
const Main = () =>{
    const navigate = useNavigate();
    const handleConfirmMyTaxbill = () => {
        console.log('');
    }
    const handleConfirmMyBill = () => {
        console.log('');
    }
    return (
        <div className="main">
            <Header />
            <div className="container">
                <Card>
                    <div className="my-taxbill-info">
                        <img src={img_my_taxbill_info} alt=""></img>
                        <h2>내 전자계산서 내역은?</h2>
                        <p className="sub-text">홈택스 연동으로 내 모든 세금계산서 내역을<br/> 한눈에 조회하고 관리하세요.</p>
                        <Button size="wide" color="primary" onClick={handleConfirmMyTaxbill}>확인하기</Button>
                    </div>
                </Card>
                <div className="mt-10">
                    <Card>
                        <div className="my-bill-list">
                            <div className="left-side">
                                <img src={img_my_taxbill_list} alt=""></img>
                                <div className="text-wrap">
                                    <p className="sub-text">세금계산서 받은내역</p>
                                    <h2>내 전체 내역서는?</h2>
                                </div>
                            </div>
                            <div className="right-side">
                                <Button size="md" color="primary" onClick={handleConfirmMyBill}>확인하기</Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="mt-10">
                    <Card>
                        <div className="card-title mb-26">
                            현금영수증
                        </div>
                        <div className="my-cash-receipt-list">
                            <div className="left-side">
                                <img src={img_cash_receipt_list} alt="" className="img-cash-receipt-list"></img>
                                <div className="text-wrap">
                                    <p className="sub-text">발급내역과 받은내역</p>
                                    <h2>내 전체 내역서는?</h2>
                                </div>
                            </div>
                            <div className="right-side">
                                <Button size="md" color="primary" onClick={handleConfirmMyBill}>확인하기</Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <Link to="/addbiz">
                    <Button size="wide" color="">사업체추가</Button>
                </Link>
            </div>
        </div>
    )
}

export default Main