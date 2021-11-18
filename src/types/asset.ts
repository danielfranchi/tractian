export interface Asset {
    id: number
    sensors: string[]
    model: string
    status: string
    healthscore: number
    name: string
    image: string
    specifications: Specifications
    metrics: Metrics
    unitId: number
    companyId: number
}

export interface Specifications {
    maxTemp: number
}

export interface Metrics {
    totalCollectsUptime: number
    totalUptime: number
    lastUptimeAt: string
}