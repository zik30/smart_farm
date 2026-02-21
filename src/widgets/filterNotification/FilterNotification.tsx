import { type FC } from 'react'
import styles from './FilterNotification.module.scss'
import { useFilterNotification } from './useFilterNotification'
import { Dropdown } from 'shared/ui/dropdown/Dropdown';
import { CustomButton } from 'shared/ui/button/CustomButton';

export const FilterNotification: FC<{ fields: { value: string; label: string }[] }> = ({ fields }) => {

    const {
        time,
        field,
        level,
        setTime,
        setField,
        setLevel,
        reset
    } = useFilterNotification()

    return (
        <div className={styles.filterBar}>

            <Dropdown
                className={styles.dr}
                value={time}
                onChange={setTime}
                options={[
                    { value: "all", label: "Все время" },
                    { value: "today", label: "Сегодня" },
                    { value: "7days", label: "Последние 7 дней" },
                    { value: "30days", label: "Последние 30 дней" },
                ]}
            />

            <Dropdown
                className={styles.dr}
                value={field}
                onChange={setField}
                options={[
                    { value: "all", label: "Все поля" },
                    ...fields
                ]}
            />

            <Dropdown
                className={styles.dr}
                value={level}
                onChange={setLevel}
                options={[
                    { value: "all", label: "Все уровни" },
                    { value: "warning", label: "Warning" },
                    { value: "danger", label: "Danger" },
                ]}
            />

            <CustomButton variant='secondary' onClick={reset}>Сбросить</CustomButton>

        </div>
    )
}