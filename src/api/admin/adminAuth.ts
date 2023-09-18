import ApiClient from "../HttpClient"

export function getToken(data: object = {}): any {
    return ApiClient().post("api/v1/user/sign-in", data)
}
// export function getRefreshToken(data: any): any {
//     return ApiClient().post(
//         `api/v1/user/sign-in/${data.refreshToken}`,
//         data,
//     );
// }
