class TokenService {
    getLocalRefreshToken(): any {
      const admin = localStorage.getItem("refreshToken");
      return admin;
    }
  
    getLocalAccessToken(): any {
      return localStorage.getItem("accessToken");
    }
  
    updateLocalAccessToken(token: any): any {
      localStorage.setItem("accessToken", token);
    }
  
    setAdmin(admin: any): any {
        localStorage.setItem("accessToken", admin.Access);
        localStorage.setItem("refreshToken", admin.Refresh);   
    }
  
    removeAdmin(): any {
      localStorage.removeItem("admin");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  }
  
  export default new TokenService();
  