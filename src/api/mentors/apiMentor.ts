import ApiClient from "../HttpClient"

export function getMentor(offset: string, limit: string, role: string, data: object = {}): any {
    return ApiClient().get(`api/v1/user/list?offset=${offset}&limit=${limit}&role=${role}`, data)
}

export function createMentors(data: object = {}): any {
    return ApiClient().post(`api/v1/user/create`, data)
}

export function deleteUser(id: any): any {
    return ApiClient().delete(`api/v1/user?user-id=${id}`)
}

export function updateMentor(data: object = {}): any {
    return ApiClient().put(`api/v1/user/`, data)
}

export function mentorById(id: any, data: object = {}): any {
    return ApiClient().get(`api/v1/user/?user-id=${id}`, data)
}
