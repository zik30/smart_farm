import type { FC } from "react"
import styles from './Sidebar.module.scss'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Typography } from "shared/ui/typography/Typography";
import Logo from 'shared/assets/logo.png'
import { Bell, Clover, House, LeafIcon, LogOut, Settings } from "lucide-react";
import { NavLink } from 'react-router-dom'

const nav_list = [
    {
        path: '',
        label: 'dashboard',
        icon: <House />
    },
    {
        path: 'fields',
        label: 'Поля',
        icon: <Clover />
    },
    {
        path: 'health',
        label: 'Болезни',
        icon: <LeafIcon />
    },
    {
        path: 'notifications',
        label: 'уведомления',
        icon: <Bell />
    },
    {
        path: 'settings',
        label: 'настройки',
        icon: <Settings />
    },
    {
        path: '/sign_in',
        label: 'выход',
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
                        <Typography variant="h4" weight="bold">AGRO</Typography>
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

