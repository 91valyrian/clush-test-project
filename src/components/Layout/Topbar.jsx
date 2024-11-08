import React, { useState } from 'react';

import userIcon from '../../img/util/ico-user.svg';
import bellIcon from '../../img/util/ico-bell.svg';
import lightIcon from '../../img/util/ico-light.svg';
import langIcon from '../../img/util/ico-lang.svg';


const Topbar = () => {

    const [activeItem, setactiveItem] = useState(false);

    const handleLangClick = () => {
        setactiveItem((prev) => !prev);
    };


    return(
        <div className='util-wrap'>
            <ul className="util-list">
                <li>
                    <a href="#none">
                        <img src={userIcon} alt="User Icon" />
                    </a>
                </li>
                <li>
                    <a href="#none">
                        <img src={bellIcon} alt="User Icon" />
                    </a>
                </li>
                <li>
                    <a href="#none">
                        <img src={lightIcon} alt="User Icon" />
                    </a>
                </li>
                <li className={`lang ${activeItem ? 'on' : ''}`}>
                    <a href="#none" onClick={handleLangClick}>
                        <img src={langIcon} alt="User Icon" />
                        <span>KOR</span>
                        <i className="ico"></i>
                    </a>

                    <ul className="lang-list">
                        <li><a href="#none">KOR</a></li>
                        <li><a href="#none">ENG</a></li>
                    </ul>
                </li>
            </ul>
            <div className="login-container">
                <span className="bold">최종로그인</span>
                <span className="date">2024.07.16 16:58</span>
            </div>
        </div>
    )
}

export default Topbar;