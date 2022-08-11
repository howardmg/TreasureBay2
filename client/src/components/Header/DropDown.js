import { React, useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import UserContext from '../../context/UserProvider';
import { Link } from 'react-router-dom';
import './DropDown.css'

const DropDown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const { user, setUser } = useContext(UserContext)
    const onClickSet = () => setIsActive(!isActive);

    const logOut = () => {
        setUser(null)
        localStorage.clear();
    }


    return (
        <DropDownContainer>
            {user && <Avatar src={user[0].avatar} onClick={onClickSet}>
            </Avatar>}
            <nav className={`menu ${isActive ? 'active' : 'inactive'}`} ref={dropdownRef}>
                <ul className="dropdown-ul">
                    <li className="dropdown-li"><Link to='/profile'>View Profile</Link></li>
                    <li onClick={logOut} className="dropdown-li">Log Out</li>
                </ul>
            </nav>
        </DropDownContainer>
    );
}

export default DropDown;

const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const Avatar = styled.img`
    border-radius: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    height: 50px;
    border-radius: 999px;
    :hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`