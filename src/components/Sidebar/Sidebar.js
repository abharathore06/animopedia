import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import sidebaricon from '../../images/sidebaricon.png';

const Nav = styled.div`
    background: #f8f8fa;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 20px;
    color: #ef263f;
    font-size: 20px;
    margin-right: 20px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const SidebarNav = styled.nav`
    background: #f8f8fa;
    height: 80vh;
    width: 250px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 100px;
    left: ${({ sidebar }) => (sidebar ? '20px' : '-100%')};
    transition: 350ms;
    z-index: 10;
    border-radius: 40px;
`;


const SidebarWrap = styled.div`
    width: 100%;
`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const hideSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
                <h3 style={{ color: "#ef263f", fontFamily: "Dancing Script", fontSize: "30px" }}>Animopedia</h3>
            </Nav>
            <SidebarNav sidebar = {sidebar} >
                <SidebarWrap>    
                    <img src={sidebaricon} alt="Logo" style={{height: "100px", paddingTop: "30px", paddingLeft: "95px"}}/>
                    <h3 style={{paddingLeft: "80px", fontSize: "15px", color: "#ef263f"}}>Hello, Admin!</h3>
                {SidebarData.map((item, index) => {
                    return <SubMenu item = {item} key = {index} />;
                })}
                <NavIcon to='#'>
                    <MdIcons.MdOutlineKeyboardArrowLeft onClick={hideSidebar} style={{background: "#efbfb5", width: "120px", padding: "6px", borderRadius: "20px", marginLeft: "40px", marginTop: "60px"}}/>
                </NavIcon>
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar
