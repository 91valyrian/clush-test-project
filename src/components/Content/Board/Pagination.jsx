import React, { useState } from 'react';
import PagerArrow from '../../../img/util/ico-pager-down.svg';
import PageArrow from '../../../img/util/ico-page-arrow.svg';

const Pagenation = () => {
    const [pager, setpager] = useState(1);
    const [ispagerOpen, setIspagerOpen] = useState(false);

    const pagerOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const handlepagerSelect = (option) => {
        setpager(option);
        setIspagerOpen(false);
    };

    return (
        <div className="board-bottom">
            <div
                className={`pager-select ${ispagerOpen ? 'active' : ''}`}
                onClick={() => setIspagerOpen(!ispagerOpen)}
            >
                <div className="selected-option">
                    {`${pager} / 10`}
                    <span><img src={PagerArrow} alt="" /></span>
                </div>
                {ispagerOpen && (
                    <div className="options">
                        {pagerOptions.map((option, index) => (
                            <div key={index} className="option" onClick={() => handlepagerSelect(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="pagination" >
                <button className="page-button prev-button">
                    <img src={PageArrow} alt="" />
                </button>
                <button className="page-button active">1</button>
                <button className="page-button">2</button>
                <button className="page-button">3</button>
                <button className="page-button">4</button>
                <button className="page-button">5</button>
                <span>...</span>
                <button className="page-button">10</button>
                <button className="page-button next-button">
                    <img src={PageArrow} alt="" />
                </button>
            </div >
        </div>
    )
}

export default Pagenation;