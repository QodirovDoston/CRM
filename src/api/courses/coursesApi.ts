import ApiClient from "../HttpClient"

export function getCourses(offset: string, limit: string, data: object = {}): any {
    return ApiClient().get(`api/v1/course/list?offset=${offset}&limit=${limit}`, data)
}
export function postCourseApi(data: object = {}): any {
    return ApiClient().post("api/v1/course/", data)
}
export function deleteCourse(id: any): any {
    return ApiClient().delete(`api/v1/course/?course-id=${id}`)
}

export function updateCoursePage(data: object = {}): any {
    return ApiClient().put(`api/v1/course/`, data)
}

export function coursePageById(id: any, data: object = {}): any {
    return ApiClient().get(`api/v1/course/?course-id=${id}`, data)
}
