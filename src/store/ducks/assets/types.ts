export enum TypesActive {
    GET_ASSETS = "GET_ASSETS",
    SEARCH_ASSETS = 'SEARCH_ASSETS',
    UPDATE_ASSETS = 'UPDATE_ASSETS',
    ADD_ASSETS = 'ADD_ASSETS',
    DELETE_ASSETS ='DELETE_ASSETS',
    DELETE_NEW = 'DELETE_NEW'
}

export interface ItensActive {
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
    power?: number
    rpm?: number | null
}

export interface Metrics {
    totalCollectsUptime: number
    totalUptime: number
    lastUptimeAt: string
}

export interface ArrayActions {
    array: ItensActive[]
    search: ItensActive[]
}

export interface ReducerDataActions {
    assets: any;
    actions: ArrayActions
}