import { type FC } from "react"
import { FilterNotification } from "widgets/filterNotification/FilterNotification"
import { NotificationsArchive } from "widgets/notifications/NotificationsArchive"

const mockFields = [
    {
        value: 'ewe12',
        label: "Кочкор, Нарынская область",
    },
    {
        value: 'ewe1sd2',
        label: "Талас, Таласская область",
    },
    {
        value: 'ewq12',
        label: "Кемин, Чуйская область",
    },
    {
        value: 'ewefwe12',
        label: "Боконбаево, Иссык-Кульская область",
    }
]


export const Notifications: FC = () => {
    return (
        <div style={{ display: 'flex' }}>
            <NotificationsArchive />
            <FilterNotification fields={mockFields} />
        </div>
    )
}

