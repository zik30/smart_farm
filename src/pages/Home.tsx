import type { FC } from "react"
import { OverallFields } from "widgets/overall/OverallFields"
import { WeekStatistics } from "widgets/weekStatistics/WeekStatistics"

export const HomePage: FC = () => {
    return (
        <div >
            <WeekStatistics />
            <OverallFields />
        </div>
    )
}

