import type { FC } from "react"
import { useLocation } from "react-router-dom"
import type { HealthResult } from "shared/types/fields"
import styles from './Health.module.scss'
import { Typography } from "shared/ui/typography/Typography"



export const Health: FC = () => {
    const location = useLocation()
    const result = location.state as HealthResult | undefined

    if (!result) {
        return <div style={{ padding: 40 }}>No data available</div>
    }

    return (
        <div className={styles.card} >
            <Typography variant="h3" className={styles.title}>Analysis Result</Typography>

            <Typography variant="h5"><strong>Plant:</strong> {result.plant}</Typography>
            <Typography variant="h5"><strong>Disease:</strong> {result.disease ?? "Healthy"}</Typography>
            <Typography variant="h5"><strong>Confidence:</strong> {result.confidence}%</Typography>
            <Typography variant="h5"><strong>Risk Level:</strong> {result.risk}%</Typography>

            <Typography variant="h4" weight="semiBold" className={styles.recommendation}>Recommendation</Typography>
            <p>{result.recommendation}</p>
        </div>
    )
}