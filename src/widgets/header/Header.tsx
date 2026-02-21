import { useState, type FC } from "react"
import styles from './Header.module.scss'
import { Typography } from "shared/ui/typography/Typography"
import { Dropdown, type DropdownOption } from "shared/ui/dropdown/Dropdown"
import { Bell } from "lucide-react"
import { useLocation } from "react-router-dom"

const langs: DropdownOption[] = [
    {
        label: 'Eng',
        value: 'Eng'
    },
    {
        label: 'Рус',
        value: 'Ru'
    },
    {
        label: 'Кыр',
        value: 'Ky'
    }
]

export const Header: FC = () => {

    const { pathname } = useLocation()
    console.log(pathname);


    const [lang, setLang] = useState("Ru")
    return (
        <header>

            <Typography variant="h2">Dashboard</Typography>
            <div className={styles.leftside}>
                <Dropdown className={styles.langDr} value={lang} onChange={(val) => setLang(val)} options={langs} />
                <div className={styles.notifications}>
                    <Bell size={24} color="var(--grey700)" />
                </div>
                <div className={styles.profile}>
                    <div className={styles.avatar}>
                        <img src="https://plus.unsplash.com/premium_photo-1686269460458-d54b75d68fbf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="farmer avatar" />
                    </div>
                    <Typography variant="bodyText">Name Surname</Typography>
                </div>
            </div>

        </header>
    )
}

