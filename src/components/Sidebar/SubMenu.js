import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #868291;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 30px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        color: #ef263f;
        border-left: 4px solid #ef263f;
        cursor:pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #ef263f;
    height: 40px; 
    width: 150px;
    padding-left: 30px;
    margin-left: 50px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f8f8fa;
    font-size: 18px;
    border-radius: 50px;
    margin-bottom: 10px;

    &:hover{
        color: #f8f8fa;
        cursor:pointer;
    }
`;

const SubMenu = ({item}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
      <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <div>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
                {item.subNav && subnav
                ? item.iconOpened 
                : item.subNav
                ? item.iconClosed 
                : null}
          </div>
      </SidebarLink>
      {subnav && item.subNav.map((item, index) => {
          return (
              <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
          )
      })}
      </>
  );
};

export default SubMenu;
