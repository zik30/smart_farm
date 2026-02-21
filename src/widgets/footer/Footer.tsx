import { Typography } from 'shared/ui/typography/Typography'
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Typography variant='smallText' color='white' align='center'>Made by Clan Soprano</Typography>
        </footer>
    )
}

