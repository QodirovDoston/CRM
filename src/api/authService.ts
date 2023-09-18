import { getToken } from "./admin/adminAuth";
import tokenService from "./tokenService";

class AuthService {

    login(password: any, phoneNumber: any): any {
        const data = {
            password,
            phoneNumber,
        };
        return getToken(data).then((response: any) => {
            
            if (response.data.Access) {
                tokenService.setAdmin(response.data);
            }
            return response;
        });
    }
}

export default new AuthService();