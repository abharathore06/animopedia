import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md'
import AllPets from '../Pets/AllPets';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard />,
    },
    {
        title: 'Pets',
        path: '/pets',
        icon: <MdIcons.MdOutlinePets />,
        iconClosed: <RiIcons.RiArrowDropDownFill />,
        iconOpened: <RiIcons.RiArrowDropUpFill />,

        subNav: [
            {
                title: 'All Pets',
                path: '/pets/all-pets',
                icon: <FaIcons.FaThList />,
            },
            {
                title: 'Categories',
                path: '/pets/categories',
                icon: <MdIcons.MdCategory />
            }
        ]

    },
    {
        title: 'Availability',
        path: '/available',
        icon: <MdIcons.MdOutlinePets />
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <MdIcons.MdOutlinePets />,
    }
]