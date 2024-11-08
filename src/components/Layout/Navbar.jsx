import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ updateTitle }) => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(null);

    const menuItems = [
        { path: '/test', label: '포털관리', icon: 'navbar-ico-01.svg', submenu: [{ path: '/test', label: '테스트메뉴1' }] },
        { path: '/', label: '공통관리', icon: 'navbar-ico-02.svg', submenu: [{ path: '/a', label: '워크플로우' }, { path: '/b', label: '자원목록' }, { path: '/', label: '클러스터' }, { path: '/c', label: '네트워크' }] },
        { path: '/test2', label: '시스템관리', icon: 'navbar-ico-03.svg', submenu: [{ path: '/test2', label: '테스트메뉴1' }, { path: '/test4545', label: '테스트메뉴2' }, { path: '/test34', label: '테스트메뉴3' }] },
        { path: '/test3', label: '사용자관리', icon: 'navbar-ico-04.svg', submenu: [{ path: '/test3', label: '테스트메뉴1' }] },
        { path: '/test4', label: 'Bizkube', icon: 'navbar-ico-05.svg', submenu: [{ path: '/test4', label: '테스트메뉴1' }] },
        { path: '/test5', label: 'DEVOPS 관리', icon: 'navbar-ico-06.svg', submenu: [{ path: '/test5', label: '테스트메뉴1' }] },
        { path: '/test6', label: '모니터링', icon: 'navbar-ico-07.svg', submenu: [{ path: '/test6', label: '테스트메뉴1' }] },
        { path: '/test7', label: '파일관리', icon: 'navbar-ico-08.svg', submenu: [{ path: '/test7', label: '테스트메뉴1' }] },
    ];

    const handleMenuClick = (index) => {
        setActiveMenu(index === activeMenu ? null : index);
    };

    const getActiveSubMenu = (submenu) => {
        return submenu.some(subitem => location.pathname === subitem.path);
    };

    return (
        <div className="sidebar-nav">
            <h1 className="logo">
                <img src={require(`../../img/logo.png`)} alt="" />
            </h1>
            <ul className="navbar">
                {menuItems.map((item, index) => {
                    const isActiveSubMenu = getActiveSubMenu(item.submenu);

                    return (
                        <li 
                            key={index}
                            className={isActiveSubMenu || activeMenu === index ? 'on' : ''}
                            onClick={() => handleMenuClick(index)}
                        >
                            <div className={`menu-title ${isActiveSubMenu ? 'active' : ''}`}>
                                <img src={require(`../../img/navbar/${item.icon}`)} alt="" />
                                <span>{item.label}</span>
                            </div>
                            <ul className="submenu">
                                {item.submenu.map((subitem, subIndex) => (
                                    <li key={subIndex}>
                                        <NavLink 
                                            to={subitem.path} 
                                            className={({ isActive }) => isActive ? 'active' : ''}
                                        >
                                            {subitem.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;