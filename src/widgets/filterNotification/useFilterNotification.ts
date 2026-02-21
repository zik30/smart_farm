import { create } from "zustand"

interface FilterState {
    time: string
    field: string
    level: string

    setTime: (value: string) => void
    setField: (value: string) => void
    setLevel: (value: string) => void

    reset: () => void
}

export const useFilterNotification = create<FilterState>((set) => ({
    time: "all",
    field: "all",
    level: "all",

    setTime: (value) => set({ time: value }),
    setField: (value) => set({ field: value }),
    setLevel: (value) => set({ level: value }),

    reset: () =>
        set({
            time: "all",
            field: "all",
            level: "all",
        }),
}))