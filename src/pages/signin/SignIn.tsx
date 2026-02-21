import type { FC } from "react"
import styles from './SignIn.module.scss'
import { Typography } from "shared/ui/typography/Typography"
import { CustomInput } from "shared/ui/input/CustomInput"
import { CustomButton } from "shared/ui/button/CustomButton"
import { Link } from "react-router-dom"

export const SignIn: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <Typography variant="h2" align="center">Войти</Typography>
                <CustomInput className={styles.input} fullWidth helperText="Email" placeholder="Введите email" />
                <CustomInput type="password" password={true} className={styles.pass} fullWidth helperText="Пароль" placeholder="Введите пароль" />
                <Link to={'/'}>
                    <CustomButton className={styles.btn}>Войти</CustomButton>
                </Link>
            </div>
            <div className={styles.image}>

            </div>
        </div>
    )
}

