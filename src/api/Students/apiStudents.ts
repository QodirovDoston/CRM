import ApiClient from "../HttpClient"

export const getStudents = (offset: string, limit: string, role: string, data: object = {}): any => {
    return ApiClient().get(`api/v1/user/list?offset=${offset}&limit=${limit}&role=${role}`, data)
}

export const createStudents = (data: object = {}): any => {
    return ApiClient().post(`api/v1/user/create`, data)
}

export const deleteStudents = (id: any): any => {
    return ApiClient().delete(`api/v1/user?user-id=${id}`)
}

export const updateStudents = (data: object = {}): any => {
    return ApiClient().put(`api/v1/user/`, data)
}

export const ByIdStudents = (id: any, data: object = {}): any => {
    return ApiClient().get(`api/v1/user/?user-id=${id}`, data)
}