import ApiClient from "../HttpClient"

export const getSettings = (id: number, data: object = {}): any => {
    return ApiClient().get(`api/v1/settings?settings-id=${id}`, data)
}

export const createSettings = (data: object = {}): any => {
    return ApiClient().post(`api/v1/settings`, data)
}

export const deleteSettings = (data: object = {}): any => {
    return ApiClient().delete(`api/v1/settings`, data)
}

export const updateSettings = (data: object = {}): any => {
    return ApiClient().put(`api/v1/settings`, data)
}

export const ByIdSettings = (id: any, data: object = {}): any => {
    return ApiClient().get(`api/v1/settings?settings-id=${id}`, data)
}


