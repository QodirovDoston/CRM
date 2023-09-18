import ApiClient from "../HttpClient"

export const getStaff = (offset: string, limit: string, role: string, page: string, data: object = {}): any => {
    return ApiClient().get(`api/v1/user/list?offset=${offset}&limit=${limit}&role=${role}&_page=${page}`, data)
}

export const createStaff = (data: object = {}): any => {
    return ApiClient().post(`api/v1/user/create`, data)
}

export const deletestaff = (id: any): any => {
    return ApiClient().delete(`api/v1/user?user-id=${id}`)
}

export const updateStaff = (data: object = {}): any => {
    return ApiClient().put(`api/v1/user/`, data)
}

export const StaffById = (id: any, data: object = {}): any => {
    return ApiClient().get(`api/v1/user/?user-id=${id}`, data)
}