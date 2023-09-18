import ApiClient from "../HttpClient"

export const getDataRoom = (offset: string, limit: string, role: string, page: string, data: object = {}): any => {
    return ApiClient().get(`api/v1/user/list?offset=${offset}&limit=${limit}&role=${role}&_page=${page}`, data)
}

export const createRooms = (data: object = {}): any => {
    return ApiClient().post(`api/v1/user/create`, data)
}

export const deleteRooms = (id: any): any => {
    return ApiClient().delete(`api/v1/user?user-id=${id}`)
}

export const updateRooms = (data: object = {}): any => {
    return ApiClient().put(`api/v1/user/`, data)
}

export const getByIdRooms = (id: any, data: object = {}): any => {
    return ApiClient().get(`api/v1/user/?user-id=${id}`, data)
}