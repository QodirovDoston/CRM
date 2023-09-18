import ApiClient from "../HttpClient"

export function postImage(data: object = {}): any {
    return ApiClient().post(`api/v1/minio/upload-image`, data)
}
export const postImgages = (data: object = {}): any => {
    return ApiClient().post(`api/v1/minio/upload-images`, data)
}
