import { Container } from "shared/ui/container/Container"
import { NotificationCard } from "components/notificationCard/NotificationCard"
import { notifications } from "./mockData"
import type { FC } from "react"
import styles from './Notifications.module.scss'

export const NotificationsArchive: FC = () => {
    return (
        <section className={styles.section}>
            <Container>
                {notifications.map((not) => (
                    <NotificationCard key={not.id} data={not} />
                ))}
            </Container>
        </section>
    )
}