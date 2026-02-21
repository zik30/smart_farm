import { useState, type FC } from "react"
import type { FieldT } from "shared/types/fields"
import { FieldsSidebar } from "widgets/fieldsSidebar/FieldsSidebar"
import { MapSection } from "widgets/map/Map"

const mockFields: FieldT[] = [
    {
        id: 'ewe12',
        address: "Кочкор, Нарынская область",
        crop: "Пшеница",
        humidity: "45%",
        risk: "20%",
        weather: "+18°C, солнечно",
        polygon: [
            [42.215, 75.758],
            [42.218, 75.762],
            [42.214, 75.766],
            [42.210, 75.760],
        ]
    },
    {
        id: 'ewe1sd2',
        address: "Талас, Таласская область",
        crop: "Картофель",
        humidity: "82%",
        risk: "75%",
        weather: "+16°C, дождь",
        polygon: [
            [42.520, 72.235],
            [42.523, 72.240],
            [42.518, 72.245],
            [42.515, 72.238],
        ]
    },
    {
        id: 'ewq12',
        address: "Кемин, Чуйская область",
        crop: "Кукуруза",
        humidity: "60%",
        risk: "35%",
        weather: "+20°C, облачно",
        polygon: [
            [42.790, 75.695],
            [42.793, 75.700],
            [42.788, 75.705],
            [42.785, 75.698],
        ]
    },
    {
        id: 'ewefwe12',
        address: "Боконбаево, Иссык-Кульская область",
        crop: "Ячмень",
        humidity: "30%",
        risk: "65%",
        weather: "+19°C, ветер",
        polygon: [
            [42.120, 76.995],
            [42.123, 77.000],
            [42.118, 77.005],
            [42.115, 76.998],
        ]
    }
]


export const Fields: FC = () => {
    const [selected, setSelected] = useState<string>(mockFields[0].id)
    return (
        <div style={{ display: 'flex' }}>
            <FieldsSidebar selected={selected} setSelected={(vl) => setSelected(vl)} fields={mockFields} />
            <MapSection selected={selected} setSelected={(vl) => setSelected(vl)} locations={mockFields} />
        </div>
    )
}

