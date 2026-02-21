import type { FC } from "react"
import { CustomInput } from "shared/ui/input/CustomInput";
import { Typography } from "shared/ui/typography/Typography";
import styles from './FieldsSidebar.module.scss'
import { Field } from "components/field/Field";
import type { FieldT } from "shared/types/fields";

interface Props {
    selected: string;
    setSelected: (vl: string) => void;
    fields: FieldT[]
}

export const FieldsSidebar: FC<Props> = ({ selected, setSelected, fields }) => {
    return (
        <aside className={styles.sidebar2}>
            <Typography variant="h2">Мои поля</Typography>
            <CustomInput />
            <div className={styles.fields}>
                {
                    fields.map((field, index) => (
                        <Field map={false} selected={selected === field.id} setSelected={(vl) => setSelected(vl)} key={index} {...field} />
                    ))
                }
            </div>
        </aside>
    )
}

