export enum TypesUnits {
    GET_UNITS = "GET_UNITS",
    GET_COMPANIES = 'GET_COMPANIES'
}

export interface ItensUnits {
    id: number
    name: string
    companyId?: number
}

export interface ArrayUnits {
    arrayUnits: ItensUnits[]
    companies: ItensUnits[]
}

export interface ReducerDataUnits {
    units: ArrayUnits
}