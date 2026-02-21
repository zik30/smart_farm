import type { FC } from "react"
import styles from './Field.module.scss'
import { Typography } from "shared/ui/typography/Typography"
import { AlertTriangle, Sprout } from "lucide-react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import classNames from "classnames";
import { CustomButton } from "shared/ui/button/CustomButton";

interface Props {
    id: string;
    address: string;
    crop: string;
    humidity: string;
    risk: string;
    weather: string;
    polygon: [number, number][];
    selected?: boolean;
    setSelected?: (vl: string) => void;
    map?: boolean
}

export const Field: FC<Props> = ({ id, selected, setSelected, address, crop, humidity, risk, weather, polygon, map = true }) => {

    const humidityValue = parseInt(humidity.replace('%', ''))
    const riskValue = parseInt(risk.replace('%', ''))

    const isHighHumidity = humidityValue > 80
    const isHighRisk = riskValue > 70
    const center = polygon[0]


    return (
        <div onClick={setSelected ? () => setSelected(id) : undefined} className={styles.card}>
            <div className={classNames(styles.textBlock, (selected && !map) && styles.selected)}>
                <div className={styles.crop}>
                    <Sprout size={34} color='var(--primary)' />
                    <Typography variant="h4" weight="bold" >{crop}</Typography>
                </div>
                <Typography variant="h4" weight="semiBold" color="grey600">{address}</Typography>
                <div className={styles.text}>

                    <Typography variant="bodyText" weight="semiBold" color={isHighHumidity ? 'danger' : 'black'}>Влажность:</Typography>
                    <div className={styles.result}>

                        <Typography variant="bodyText" color={isHighHumidity ? 'danger' : 'black'}>{humidity} </Typography>
                        {isHighHumidity && (
                            <AlertTriangle size={18} color="var(--error)" />
                        )}
                    </div>
                </div>
                <div className={styles.text}>

                    <Typography variant="bodyText" weight="semiBold" color={isHighRisk ? 'danger' : 'black'}>Риск болезни:</Typography>
                    <div className={styles.result}>

                        <Typography variant="bodyText" color={isHighRisk ? 'danger' : 'black'}>{risk}</Typography>
                        {isHighRisk && (
                            <AlertTriangle size={18} color="var(--error)" />
                        )}
                    </div>
                </div>
                <div className={styles.text}>

                    <Typography variant="bodyText" weight="semiBold">Погода:</Typography>
                    <Typography variant="bodyText">{weather}</Typography>
                </div>

                <CustomButton className={styles.btn} variant="primary" fullWidth={true} >Подробнее</CustomButton>

            </div>
            {
                map && <div className={styles.map}>
                    <MapContainer
                        center={center}
                        zoom={14}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; OpenStreetMap'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Polygon
                            positions={polygon}
                            pathOptions={{
                                color: isHighRisk ? "red" : "green",
                                fillOpacity: 0.4
                            }}
                        />
                    </MapContainer>

                </div>
            }

        </div>
    )
}

