import type { FC } from "react"
import styles from './Sidebar.module.scss'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Typography } from "shared/ui/typography/Typography";
import Logo from 'shared/assets/—Pngtree—farm agriculture logo vector with_5325275.png'
import { Bell, ChartSpline, Clover, House, LogOut, Map, Settings, Sun } from "lucide-react";
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const nav_list = [
    {
        path: '',
        label: 'dashboard',
        icon: <House />
    },
    {
        path: 'fields',
        label: 'fields',
        icon: <Clover />
    },
    {
        path: 'analytics',
        label: 'analytics',
        icon: <ChartSpline />
    },
    {
        path: 'notifications',
        label: 'notifications',
        icon: <Bell />
    },
    {
        path: 'settings',
        label: 'settings',
        icon: <Settings />
    },
    {
        path: 'sign_out',
        label: 'sign out',
        icon: <LogOut />
    },
]

export const SidebarBlock: FC = () => {
    return (
        <>

            <Sidebar className={styles.sidebar}>

                <Menu>
                    <div className={styles.logo}>
                        <img src={Logo} alt="logo" />
                        <Typography variant="h4" weight="bold">SmartFarm</Typography>
                    </div>
                    {
                        nav_list.map(item => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? styles.activeLink : styles.link
                                }
                            >
                                <MenuItem>
                                    <div className={styles.nav}>
                                        {item.icon}
                                        <Typography variant="bodyText" transform="capitalize">
                                            {item.label}
                                        </Typography>
                                    </div>
                                </MenuItem>
                            </NavLink>
                        ))
                    }
                </Menu>
            </Sidebar>
        </>
    )
}

