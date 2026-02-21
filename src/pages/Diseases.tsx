import type { FC } from "react"
import { Health } from "widgets/health/Health"
import { Scanner } from "widgets/scanner/Scanner"

export const Diseases: FC = () => {
    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 90px', alignItems: 'center', justifyContent: 'center' }}>
            <Scanner />
            <Health />
        </div>
    )
}

