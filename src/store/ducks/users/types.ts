export enum TypesUsers {
    GET_USERS = "GET_USERS"
}

export interface ItensUsers {
    id: number,
    email: string,
    name: string,
    unitId: number,
    companyId: number
}

export interface ArrayUsers {
    arrayUsers: ItensUsers[]
}

export interface ReducerDataUsers {
    actions: any;
    users: ArrayUsers
}