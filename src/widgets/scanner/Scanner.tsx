import { type FC, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import type { HealthResult } from "shared/types/fields"
import { mockAnalyzePlant } from "api/plantApi"
import styles from './Scanner.module.scss'
import { CustomButton } from "shared/ui/button/CustomButton"
import { Typography } from "shared/ui/typography/Typography"

export const Scanner: FC = () => {
    const [file, setFile] = useState<File | null>(null)
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: (file: File) =>
            // 👇 меняешь на analyzePlant(file) когда backend готов
            mockAnalyzePlant(),
        onSuccess: (data: HealthResult) => {
            navigate("/health", { state: data })
        }
    })

    const handleUpload = () => {
        if (!file) return
        mutation.mutate(file)
    }

    return (
        <div className={styles.scanner} style={{ padding: 40 }}>
            <Typography align="center" variant="h3">Upload plant photo</Typography>

            <div className={styles.center}>

                <input
                    className={styles.file}
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
            </div>

            <CustomButton
                onClick={handleUpload}
                disabled={mutation.isPending}
                fullWidth
                className={styles.btn}
            >
                {mutation.isPending ? "Analyzing..." : "Scan plant"}
            </CustomButton>

            {mutation.isError && (
                <Typography variant="h5" weight="semiBold" align="center" color="danger">
                    Failed to analyze image
                </Typography>
            )}
        </div>
    )
}