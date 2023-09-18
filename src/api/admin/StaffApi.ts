import ApiClient from "../HttpClient"

export function getUserList(offset: string, limit: string, role: string, data: object = {}): any {
    return ApiClient().get(`api/v1/user/list?offset=${offset}&limit=${limit}&role=${role}`, data)
}