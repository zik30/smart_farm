export type FieldT = {
    id: string;
    address: string;
    crop: string;
    humidity: string;
    risk: string;
    weather: string;
    polygon: [number, number][];
}

export interface NotificationI {
    id: number
    type: "danger" | "warning"
    location: string
    description: string
    diseaseRisk: number
    potentialDiseases: string[]
    diseaseName: string
    diseaseDescription: string
}