import { useEffect, type FC } from "react"
import {
    MapContainer,
    TileLayer,
    Polygon,
    Popup,
    useMap,
    ZoomControl,
} from "react-leaflet"
import type { FieldT } from "shared/types/fields"
import { Typography } from "shared/ui/typography/Typography"
import L from 'leaflet'

interface Props {
    locations: FieldT[]
    selected: string | null
    setSelected: (id: string) => void
}

/* ---------- Fit to all bounds ---------- */
const FitBounds: FC<{ locations: FieldT[] }> = ({ locations }) => {
    const map = useMap()

    useEffect(() => {
        if (!locations.length) return

        const allPoints = locations.flatMap(l => l.polygon)
        const bounds = L.latLngBounds(allPoints)

        map.fitBounds(bounds, {
            padding: [50, 50],
        })
    }, [locations])

    return null
}

/* ---------- Zoom to selected ---------- */
const ZoomToSelected: FC<{ field: FieldT | undefined }> = ({ field }) => {
    const map = useMap()

    useEffect(() => {
        if (!field) return

        const bounds = L.latLngBounds(field.polygon)

        map.fitBounds(bounds, {
            padding: [80, 80],
            animate: true,
        })
    }, [field])

    return null
}

export const MapSection: FC<Props> = ({
    locations,
    selected,
    setSelected,
}) => {

    const selectedField = locations.find(l => l.id === selected)

    const center =
        selectedField?.polygon?.[0] ??
        locations[0]?.polygon?.[0] ??
        [42.87, 74.60] // fallback

    const getColor = (risk: number) => {
        if (risk > 70) return "#E53935"      // red
        if (risk > 40) return "#F4B740"      // yellow
        return "#2E7D32"                    // green
    }

    return (
        <section style={{ height: "calc(100vh - 90px)", width: "100%" }}>
            <MapContainer
                center={center}
                zoom={7}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FitBounds locations={locations} />
                <ZoomToSelected field={selectedField} />

                {locations.map(field => {
                    const isSelected = selected === field.id

                    return (
                        <Polygon
                            key={field.id}
                            positions={field.polygon}
                            pathOptions={{
                                color: getColor(Number(field.risk)),
                                weight: isSelected ? 4 : 2,
                            }}
                            eventHandlers={{
                                click: (e) => {
                                    setSelected(field.id)
                                    e.target.bringToFront()
                                },
                            }}
                        >
                            <Popup>
                                <Typography variant="bodyText" weight="semiBold">{field.crop}</Typography>
                                <Typography variant="smallText">

                                    {field.address}
                                </Typography>
                                <Typography variant="smallText">

                                    Влажность: {field.humidity}%
                                </Typography>
                                <Typography variant="smallText">

                                    Риск: {field.risk}%
                                </Typography>
                            </Popup>
                        </Polygon>
                    )
                })}
                <ZoomControl position="bottomright" />
            </MapContainer>
        </section>
    )
}