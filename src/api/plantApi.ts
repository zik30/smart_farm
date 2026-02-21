import { $mainApi } from "shared/lib/requester"
import type { HealthResult } from "shared/types/fields"

// ⛳ Мок (оставляем)
export const mockAnalyzePlant = async (): Promise<HealthResult> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                plant: "Wheat",
                disease: "Powdery Mildew",
                confidence: 92,
                risk: 74,
                recommendation: "Apply fungicide treatment within 3 days."
            })
        }, 1500)
    })
}


// 🌿 Реальный axios запрос
export const analyzePlant = async (file: File): Promise<HealthResult> => {
    const formData = new FormData()
    formData.append("image", file)

    const { data } = await $mainApi.post<HealthResult>(
        "/analyze",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    )

    return data
}