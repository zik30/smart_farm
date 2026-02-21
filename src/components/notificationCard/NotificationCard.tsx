import type { FC } from "react"
import styles from "./NotificationCard.module.scss"
import { AlertTriangle, MapPin } from "lucide-react"
import type { NotificationI } from "shared/types/fields"
import { Typography } from "shared/ui/typography/Typography"
import classNames from "classnames"

export const NotificationCard: FC<{ data: NotificationI }> = ({ data }) => {

    const isDanger = data.type === "danger"

    return (
        <div
            className={`${styles.notification} ${isDanger ? styles.danger : styles.warning
                }`}
        >

            <div className={styles.header}>
                <div className={styles.left}>
                    <AlertTriangle
                        size={22}
                        color={isDanger ? "var(--error)" : "var(--warning)"}
                    />
                    <Typography variant="h4" weight={'semiBold'} className={styles.type}>
                        {isDanger ? "Критическое предупреждение" : "Предупреждение"}
                    </Typography>
                </div>

                <div className={styles.location}>
                    <MapPin size={16} />
                    <Typography variant="bodyText" color="grey500">

                        {data.location}
                    </Typography>
                </div>
            </div>

            {/* Description */}
            <Typography variant="bodyText" className={styles.description}>{data.description}</Typography>
            {/* Disease block */}
            <div className={styles.diseaseBlock}>
                <div className={styles.display}>
                    <div className={classNames(styles.risk, isDanger ? styles.red : styles.yellow)}>

                        <Typography variant="bodyText" className={styles.risk}>
                            Риск заболевания: <br /><strong>{data.diseaseRisk}%</strong>
                        </Typography>
                    </div>

                    <div className={styles.list}>
                        <Typography variant="bodyText" weight="semiBold">
                            Возможные заболевания:
                        </Typography>
                        <ul>
                            {data.potentialDiseases.map((disease, i) => (
                                <li key={i} className={styles.disCard}>
                                    <Typography variant="bodyText" >

                                        {disease}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.details}>
                    <strong>{data.diseaseName}</strong>
                    <p>{data.diseaseDescription}</p>
                </div>
            </div>

        </div>
    )
}