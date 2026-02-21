import { useState, type FC } from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Dropdown } from "shared/ui/dropdown/Dropdown"
import styles from './WeekStatistics.module.scss'
import { Container } from "shared/ui/container/Container"

const fields = [
    {
        label: 'Кукуруза - Кочкор',
        value: '1'
    },
    {
        label: 'Пшеница - Кемин',
        value: '2'
    },
    {
        label: 'Фасоль - Талас',
        value: '3'
    },
    {
        label: 'Картошка - Боконбаево',
        value: '4'
    }
]

const humidityData = {
    '1': [
        { day: "ПН", value: 65 },
        { day: "ВТ", value: 70 },
        { day: "СР", value: 72 },
        { day: "ЧТ", value: 68 },
        { day: "ПТ", value: 75 },
        { day: "СБ", value: 80 },
        { day: "ВС", value: 78 },
    ],
    '2': [
        { day: "ПН", value: 30 },
        { day: "ВТ", value: 70 },
        { day: "СР", value: 20 },
        { day: "ЧТ", value: 40 },
        { day: "ПТ", value: 75 },
        { day: "СБ", value: 50 },
        { day: "ВС", value: 78 },
    ],
    '3': [
        { day: "ПН", value: 15 },
        { day: "ВТ", value: 20 },
        { day: "СР", value: 72 },
        { day: "ЧТ", value: 100 },
        { day: "ПТ", value: 75 },
        { day: "СБ", value: 60 },
        { day: "ВС", value: 10 },
    ],
    '4': [
        { day: "ПН", value: 50 },
        { day: "ВТ", value: 20 },
        { day: "СР", value: 72 },
        { day: "ЧТ", value: 10 },
        { day: "ПТ", value: 95 },
        { day: "СБ", value: 50 },
        { day: "ВС", value: 60 },
    ],
}

export const WeekStatistics: FC = () => {

    const [location, setLocation] = useState<string>('1')


    return (
        <section  >
            <Container className={styles.graphs}>


                <Dropdown className={styles.dropdown} value={location} onChange={(val) => setLocation(val)} options={fields} />

                {/* Chart */}
                <ResponsiveContainer>
                    <LineChart data={humidityData[location as keyof typeof humidityData]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="var(--primary)"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Container>
        </section>
    )
}

